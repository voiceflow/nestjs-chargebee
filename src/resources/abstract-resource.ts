import { ChargeBee } from "chargebee-typescript";

import type { RequestWrapper } from "chargebee-typescript/lib/request_wrapper";
import type { ListResult } from "chargebee-typescript/lib/list_result";
import type { Result } from "chargebee-typescript/lib/result";
import type { ProcessWait } from "chargebee-typescript/lib/process_wait";

export class ChargebeeResource {
  constructor(protected readonly chargebee: ChargeBee) {}

  protected request<
    TResourceName extends keyof ChargeBee,
    TMethodName extends keyof ChargeBee[TResourceName],
    TReturning extends ResourceResult,
  >(
    resourceName: TResourceName,
    methodName: TMethodName extends ResultMethodName<TResourceName, TMethodName>
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

    return async (...args: Parameters<MethodDefinition>) => {
      return functionDef(...args)
        .request()
        .then((listResult) => {
          const items = listResult.list.map(this.resolveResult(returning));
          return {
            items,
            nextOffset: listResult.next_offset as string | undefined,
          };
        });
    };
  }

  private resolveResult =
    <TReturning extends ResourceResult>(returning: TReturning) =>
    (result: Result) =>
      Object.fromEntries(
        Object.keys(returning).map((key) => [key, result[key as keyof Result]]),
      ) as ResolveResultReturn<TReturning>;
}

type ResultMethodName<
  TResource extends keyof ChargeBee,
  TMethod extends keyof ChargeBee[TResource],
> = ChargeBee[TResource][TMethod] extends (
  ...args: unknown[]
) => RequestWrapper<infer R>
  ? R extends Result | ProcessWait
    ? TMethod
    : "Method must return a RequestWrapper<Result | ProcessWait>"
  : never;

type ListResultMethodName<
  TResource extends keyof ChargeBee,
  TMethod extends keyof ChargeBee[TResource],
> = ChargeBee[TResource][TMethod] extends (
  ...args: unknown[]
) => RequestWrapper<infer R>
  ? R extends ListResult
    ? TMethod
    : "Method must return a RequestWrapper<ListResult>"
  : never;

type ResourceResult = {
  [K in keyof Result]?: {
    optional: boolean;
  };
};

type ResolveResultReturn<T extends ResourceResult> = {
  [K in keyof T]: K extends keyof Result
    ? T[K] extends { optional: true }
      ? Result[K] | undefined
      : Result[K]
    : never;
};
