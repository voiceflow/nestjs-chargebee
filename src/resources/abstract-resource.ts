import { ChargeBee } from "chargebee-typescript";

import type { RequestWrapper } from "chargebee-typescript/lib/request_wrapper";
import type { ListResult } from "chargebee-typescript/lib/list_result";
import type { Result } from "chargebee-typescript/lib/result";
import type { ProcessWait } from "chargebee-typescript/lib/process_wait";

type ChargeBeeResultMethodName<
  TResource extends keyof ChargeBee,
  TMethod extends keyof ChargeBee[TResource],
> = ChargeBee[TResource][TMethod] extends (
  ...args: unknown[]
) => RequestWrapper<infer R>
  ? R extends Result
    ? TMethod
    : "Method must return a RequestWrapper<Result>"
  : never;

type ChargeBeeResultFunction<
  TResource extends keyof ChargeBee,
  TMethod extends keyof ChargeBee[TResource],
> = ChargeBee[TResource][TMethod] extends (
  ...args: unknown[]
) => RequestWrapper<infer R>
  ? R extends Result
    ? ChargeBee[TResource][TMethod]
    : never
  : never;

type ChargeBeeListResultMethodName<
  TResource extends keyof ChargeBee,
  TMethod extends keyof ChargeBee[TResource],
> = ChargeBee[TResource][TMethod] extends (
  ...args: unknown[]
) => RequestWrapper<infer R>
  ? R extends ListResult
    ? TMethod
    : "Method must return a RequestWrapper<ListResult>"
  : never;

type ChargeBeeListResultFunction<
  TResource extends keyof ChargeBee,
  TMethod extends keyof ChargeBee[TResource],
> = ChargeBee[TResource][TMethod] extends (
  id: string,
  params?: infer P,
) => RequestWrapper<infer R>
  ? R extends ListResult
    ? (id: string, params: P) => RequestWrapper<R>
    : never
  : ChargeBee[TResource][TMethod] extends (
      params?: infer P,
    ) => RequestWrapper<infer R>
  ? R extends ListResult
    ? (params: P) => RequestWrapper<R>
    : never
  : never;

type ChargeBeeProcessWaitMethodName<
  TResource extends keyof ChargeBee,
  TMethod extends keyof ChargeBee[TResource],
> = ChargeBee[TResource][TMethod] extends (...args: unknown[]) => ProcessWait
  ? TMethod
  : "Method must return a ProcessWait";

type ResultConstructor<K extends keyof Result> = {
  new (...args: unknown[]): Result[K];
};

type ResolveResult<T extends { [K in keyof Result]?: ResultConstructor<K> }> = {
  [K in keyof T]: K extends keyof Result ? Result[K] : never;
};

export abstract class ChargebeeResource {
  constructor(protected readonly chargebee: ChargeBee) {}

  private resolveGetters =
    <TResult extends { [K in keyof Result]?: ResultConstructor<K> }>(
      result: TResult,
    ) =>
    (value: Result) => {
      const descriptors = Object.getOwnPropertyDescriptors(
        value.constructor.prototype,
      );
      const properties = Object.entries(descriptors)
        .filter(([, descriptor]) => typeof descriptor.get === "function")
        .map(([key]) => key as keyof Result);
      return Object.fromEntries(
        properties
          .filter((key) => Object.keys(result).includes(key))
          .map((key) => [key, value[key]]),
      ) as ResolveResult<TResult>;
    };

  protected request<
    TResource extends keyof ChargeBee,
    TMethod extends keyof ChargeBee[TResource],
  >(
    resourceProp: TResource,
    methodProp: ChargeBeeResultMethodName<TResource, TMethod>,
  ) {
    return {
      returns:
        <TResult extends { [K in keyof Result]?: ResultConstructor<K> }>(
          result: TResult,
        ) =>
        async (
          ...args: Parameters<ChargeBeeResultFunction<TResource, TMethod>>
        ): Promise<ResolveResult<TResult>> => {
          return this.chargebee[resourceProp][methodProp as unknown as TMethod](
            ...args,
          )
            .request()
            .then(this.resolveGetters(result));
        },
    };
  }

  protected listRequest<
    TResource extends keyof ChargeBee,
    TMethod extends keyof ChargeBee[TResource],
  >(
    resourceProp: TResource,
    methodProp: ChargeBeeListResultMethodName<TResource, TMethod>,
  ) {
    return {
      returns:
        <TResult extends { [K in keyof Result]?: ResultConstructor<K> }>(
          result: TResult,
        ) =>
        async (
          ...args: Parameters<ChargeBeeListResultFunction<TResource, TMethod>>
        ): Promise<ResolveResult<TResult>[]> => {
          const request = (offset: string | undefined): Promise<ListResult> => {
            const forwardArgs = args.map((arg) =>
              Object.assign(arg, { offset }),
            );
            return this.chargebee[resourceProp][
              methodProp as unknown as TMethod
            ](...forwardArgs).request();
          };

          let offset: string | undefined =
            typeof args[1] === "object" &&
            "offset" in args[1] &&
            typeof args[1].offset === "string"
              ? args[1]?.offset
              : typeof args[0] === "object" &&
                "offset" in args[0] &&
                typeof args[0].offset === "string"
              ? args[0]?.offset
              : undefined;

          const items: Result[] = [];

          do {
            const response = await request(offset);
            items.push(...response.list);
            offset = response.next_offset;
          } while (offset);

          return items.map(this.resolveGetters(result));
        },
    };
  }

  protected processWait<
    TResource extends keyof ChargeBee,
    TMethod extends keyof ChargeBee[TResource],
  >(
    resourceProp: TResource,
    methodProp: ChargeBeeProcessWaitMethodName<TResource, TMethod>,
  ) {
    return {
      returns:
        <TResult extends { [K in keyof Result]?: ResultConstructor<K> }>(
          result: TResult,
        ) =>
        async (
          ...args: Parameters<ChargeBeeResultFunction<TResource, TMethod>>
        ): Promise<ResolveResult<TResult>> => {
          return await this.chargebee[resourceProp][
            methodProp as unknown as TMethod
          ](...args)
            .request()
            .then(this.resolveGetters(result));
        },
    };
  }
}
