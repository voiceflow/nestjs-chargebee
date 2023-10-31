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
  isListOffsetOption,
} from "./chargebee-resource.types";
import { chargebeeResourceRetryPolicy } from "./chargebee-resource-retry";

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
      return chargebeeResourceRetryPolicy.execute(() =>
        functionDef(...args)
          .request()
          .then(this.resolveResult(returning)),
      );
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

    const method = async (...args: Parameters<MethodDefinition>) => {
      return chargebeeResourceRetryPolicy.execute(() =>
        functionDef(...args)
          .request()
          .then((listResult) => {
            const items = listResult.list.map(this.resolveResult(returning));
            return {
              items,
              nextOffset: listResult.next_offset as string | undefined,
            };
          }),
      );
    };

    const iterate = async function* (...args: Parameters<typeof method>) {
      let offset = args.find(isListOffsetOption)?.offset;

      do {
        const forwardArgs = args.map((arg) =>
          Object.assign(arg, { offset }),
        ) as Parameters<typeof functionDef>;

        const listResult = await method(...forwardArgs);
        yield* listResult.items;
        offset = listResult.nextOffset;
      } while (offset);
    };

    const all = async (...args: Parameters<typeof method>) => {
      const items: ResolveResultReturn<TReturning>[] = [];

      for await (const result of iterate(...args)) {
        items.push(result);
      }

      return items;
    };

    return Object.assign(method, { all, iterate });
  }

  private resolveResult =
    <TReturning extends ResourceResult>(returning: TReturning) =>
    (result: Result) =>
      Object.fromEntries(
        Object.keys(returning).map((key) => [key, result[key as keyof Result]]),
      ) as ResolveResultReturn<TReturning>;
}
