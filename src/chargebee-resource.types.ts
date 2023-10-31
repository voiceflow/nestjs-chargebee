import type { ChargeBee } from "chargebee-typescript";

import type { RequestWrapper } from "chargebee-typescript/lib/request_wrapper";
import type { ListResult } from "chargebee-typescript/lib/list_result";
import type { Result } from "chargebee-typescript/lib/result";
import type { ProcessWait } from "chargebee-typescript/lib/process_wait";

export interface ChargebeeError {
  message: string;
  type?: string;
  api_error_code: ChargebeeErrorCode;
  http_status_code: number;
}

export type ChargebeeErrorCode =
  | "resource_not_found"
  | "resource_limit_exhausted"
  | "param_wrong_value"
  | "duplicate_entry"
  | "db_connection_failure"
  | "invalid_state_for_request"
  | "http_method_not_supported"
  | "invalid_request"
  | "resource_limit_exceeded"
  | "unable_to_process_request"
  | "lock_timeout"
  | "internal_error"
  | "internal_temporary_error"
  | "request_blocked"
  | "api_request_limit_exceeded"
  | "third_party_api_request_limit_exceeded"
  | "site_not_ready"
  | "site_read_only_mode"
  | "api_authentication_failed"
  | "basic_authentication_failed"
  | "api_authorization_failed"
  | "site_not_found"
  | "configuration_incompatible";

export const isChargebeeError = (arg: unknown): arg is ChargebeeError =>
  arg != null &&
  typeof arg === "object" &&
  "message" in arg &&
  "api_error_code" in arg &&
  "http_status_code" in arg;

export const isChargebeeErrorWithCode =
  <TCode extends ChargebeeErrorCode>(code: TCode) =>
  (arg: unknown): arg is ChargebeeError & { api_error_code: TCode } =>
    isChargebeeError(arg) && arg.api_error_code === code;

export type ResultMethodName<
  TResource extends keyof ChargeBee,
  TMethod extends keyof ChargeBee[TResource],
> = ChargeBee[TResource][TMethod] extends (
  ...args: unknown[]
) => RequestWrapper<infer R>
  ? R extends Result
    ? TMethod
    : "Method must return a RequestWrapper<Result>"
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

export type ProcessWaitMethodName<
  TResource extends keyof ChargeBee,
  TMethod extends keyof ChargeBee[TResource],
> = ChargeBee[TResource][TMethod] extends (...args: unknown[]) => ProcessWait
  ? TMethod
  : "Method must return a ProcessWait";

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

export const isListOffsetOption = (arg: unknown): arg is { offset: string } =>
  typeof arg === "object" && "offset" in arg && typeof arg.offset === "string";
