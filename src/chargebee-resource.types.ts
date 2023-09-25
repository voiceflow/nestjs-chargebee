import type { ChargeBee } from "chargebee-typescript";

import type { RequestWrapper } from "chargebee-typescript/lib/request_wrapper";
import type { ListResult } from "chargebee-typescript/lib/list_result";
import type { Result } from "chargebee-typescript/lib/result";
import type { ProcessWait } from "chargebee-typescript/lib/process_wait";

export type ResultMethodName<
  TResource extends keyof ChargeBee,
  TMethod extends keyof ChargeBee[TResource],
> = ChargeBee[TResource][TMethod] extends (
  ...args: unknown[]
) => RequestWrapper<infer R>
  ? R extends Result | ProcessWait
    ? TMethod
    : "Method must return a RequestWrapper<Result | ProcessWait>"
  : never;

export type ListResultMethodName<
  TResource extends keyof ChargeBee,
  TMethod extends keyof ChargeBee[TResource],
> = ChargeBee[TResource][TMethod] extends (
  ...args: unknown[]
) => RequestWrapper<infer R>
  ? R extends ListResult
    ? TMethod
    : "Method must return a RequestWrapper<ListResult>"
  : never;

export type ResourceResult = {
  [K in keyof Result]?: {
    optional: boolean;
  };
};

export type ResolveResultReturn<T extends ResourceResult> = {
  [K in keyof T]: K extends keyof Result
    ? T[K] extends { optional: true }
      ? Result[K] | undefined
      : Result[K]
    : never;
};
