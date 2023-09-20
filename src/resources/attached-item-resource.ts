import { ChargebeeResource } from "./abstract-resource";

export class AttachedItemResource extends ChargebeeResource {
  public readonly create = super.request("attached_item", "create", {
    attached_item: { optional: false },
  });
  public readonly update = super.request("attached_item", "update", {
    attached_item: { optional: false },
  });
  public readonly retrieve = super.request("attached_item", "retrieve", {
    attached_item: { optional: false },
  });
  public readonly delete = super.request("attached_item", "delete", {
    attached_item: { optional: false },
  });
  public readonly list = super.listRequest("attached_item", "list", {
    attached_item: { optional: false },
  });
}
