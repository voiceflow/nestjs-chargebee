import { ChargebeeResource } from "../chargebee-resource.class";
export class ItemResource extends ChargebeeResource {
  public readonly create = super.request("item", "create", {
    item: { optional: false },
  });
  public readonly retrieve = super.request("item", "retrieve", {
    item: { optional: false },
  });
  public readonly update = super.request("item", "update", {
    item: { optional: false },
  });
  public readonly list = super.listRequest("item", "list", {
    item: { optional: false },
  });
  public readonly delete = super.request("item", "delete", {
    item: { optional: false },
  });
}
