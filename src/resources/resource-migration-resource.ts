import { ChargebeeResource } from "./abstract-resource";
export class ResourceMigrationResource extends ChargebeeResource {
  public readonly retrieveLatest = super.request(
    "resource_migration",
    "retrieve_latest",
    { resource_migration: { optional: false } },
  );
}
