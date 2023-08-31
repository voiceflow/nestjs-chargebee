import { SiteMigrationDetail } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class SiteMigrationDetailResource extends ChargebeeResource {
  public readonly list = super
    .listRequest("site_migration_detail", "list")
    .returns({ site_migration_detail: SiteMigrationDetail });
}
