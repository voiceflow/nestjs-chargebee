import { ChargebeeResource } from "./abstract-resource";
export class ItemFamilyResource extends ChargebeeResource {
  public readonly create = super.request("item_family", "create", {
    item_family: { optional: false },
  });
  public readonly retrieve = super.request("item_family", "retrieve", {
    item_family: { optional: false },
  });
  public readonly list = super.listRequest("item_family", "list", {
    item_family: { optional: false },
  });
  public readonly update = super.request("item_family", "update", {
    item_family: { optional: false },
  });
  public readonly delete = super.request("item_family", "delete", {
    item_family: { optional: false },
  });
}
