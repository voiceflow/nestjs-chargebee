import { Model } from "chargebee-typescript/lib/resources/model";

type FilterModelKeys<T extends Model> = {
  [K in keyof T]: K extends keyof Model ? never : K;
}[keyof T];

/**
 * Extracts the properties from a Chargebee resource class.
 */
export type ResourceModelType<TResource extends Model> = {
  [K in FilterModelKeys<TResource>]: TResource[K] extends (
    ...args: unknown[]
  ) => unknown
    ? never
    : TResource[K];
};
