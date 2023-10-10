import type { ChargeBee } from "chargebee-typescript";

import type { RequestWrapper } from "chargebee-typescript/lib/request_wrapper";
import type { ListResult } from "chargebee-typescript/lib/list_result";
import type { Result } from "chargebee-typescript/lib/result";

import {
  type ResourceResult,
  type ResultMethodName,
  type ProcessWaitMethodName,
  type ListResultMethodName,
  type ResolveResultReturn,
  isListOptions,
  AddListOptions,
} from "./chargebee-resource.types";

export class ChargebeeResource {
  constructor(protected readonly chargebee: ChargeBee) {}

  protected request<
    TResourceName extends keyof ChargeBee,
    TMethodName extends keyof ChargeBee[TResourceName],
    TReturning extends ResourceResult,
  >(
    resourceName: TResourceName,
    methodName: TMethodName extends
      | ResultMethodName<TResourceName, TMethodName>
      | ProcessWaitMethodName<TResourceName, TMethodName>
      ? TMethodName
      : never,
    returning: TReturning,
  ) {
    type MethodDefinition = ChargeBee[TResourceName][TMethodName] extends (
      ...args: unknown[]
    ) => RequestWrapper<Result>
      ? ChargeBee[TResourceName][TMethodName]
      : never;

    const functionDef = this.chargebee[resourceName][
      methodName
    ] as MethodDefinition;

    return async (...args: Parameters<MethodDefinition>) => {
      return functionDef(...args)
        .request()
        .then(this.resolveResult(returning));
    };
  }

  protected listRequest<
    TResourceName extends keyof ChargeBee,
    TMethodName extends keyof ChargeBee[TResourceName],
    TReturning extends ResourceResult,
  >(
    resourceName: TResourceName,
    methodName: TMethodName extends ListResultMethodName<
      TResourceName,
      TMethodName
    >
      ? TMethodName
      : never,
    returning: TReturning,
  ) {
    type MethodDefinition = ChargeBee[TResourceName][TMethodName] extends (
      ...args: unknown[]
    ) => RequestWrapper<ListResult>
      ? ChargeBee[TResourceName][TMethodName]
      : never;

    const functionDef = this.chargebee[resourceName][
      methodName
    ] as MethodDefinition;

    return async (...args: Parameters<AddListOptions<MethodDefinition>>) => {
      let nextOffset: string | undefined = args.find(
        (arg): arg is { offset: string | undefined } =>
          typeof arg === "object" &&
          "offset" in arg &&
          typeof arg.offset === "string",
      )?.offset;

      const exhaust = args.find(isListOptions)?.options?.exhaust ?? false;

      const items: ResolveResultReturn<TReturning>[] = [];
      do {
        const newArgs = args.flatMap((arg) => {
          // strip out or custom list options
          if (isListOptions(arg)) return [];
          // update offset on the proper argument (not our custom list options)
          if (typeof arg === "object") {
            return [{ ...arg, offset: nextOffset }];
          }
          return [arg];
        });

        const listResult = await functionDef(...newArgs).request();
        items.push(...listResult.list.map(this.resolveResult(returning)));
        nextOffset = listResult.next_offset;
      } while (exhaust && nextOffset);

      return {
        items,
        nextOffset,
      };
    };
  }

  private resolveResult =
    <TReturning extends ResourceResult>(returning: TReturning) =>
    (result: Result) =>
      Object.fromEntries(
        Object.keys(returning).map((key) => [key, result[key as keyof Result]]),
      ) as ResolveResultReturn<TReturning>;
}
