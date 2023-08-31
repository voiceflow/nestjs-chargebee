import { ItemFamily } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class ItemFamilyResource extends ChargebeeResource {
  public readonly create = super
    .request("item_family", "create")
    .returns({ item_family: ItemFamily });
  public readonly retrieve = super
    .request("item_family", "retrieve")
    .returns({ item_family: ItemFamily });
  public readonly list = super
    .listRequest("item_family", "list")
    .returns({ item_family: ItemFamily });
  public readonly update = super
    .request("item_family", "update")
    .returns({ item_family: ItemFamily });
  public readonly delete = super
    .request("item_family", "delete")
    .returns({ item_family: ItemFamily });
}
