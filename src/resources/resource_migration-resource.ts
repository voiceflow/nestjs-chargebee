import { ResourceMigration } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "../chargebee-resource.class";
export class ResourceMigrationResource extends ChargebeeResource {
  public readonly retrieveLatest = super
    .request("resource_migration", "retrieve_latest")
    .returns<{ resource_migration: ResourceMigration }>();
}
