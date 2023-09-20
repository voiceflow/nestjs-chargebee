import { ChargebeeResource } from "./abstract-resource";
export class SiteMigrationDetailResource extends ChargebeeResource {
  public readonly list = super.listRequest("site_migration_detail", "list", {
    site_migration_detail: { optional: false },
  });
}
