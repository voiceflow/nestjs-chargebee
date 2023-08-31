import { Item } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class ItemResource extends ChargebeeResource {
  public readonly create = super
    .request("item", "create")
    .returns({ item: Item });
  public readonly retrieve = super
    .request("item", "retrieve")
    .returns({ item: Item });
  public readonly update = super
    .request("item", "update")
    .returns({ item: Item });
  public readonly list = super
    .listRequest("item", "list")
    .returns({ item: Item });
  public readonly delete = super
    .request("item", "delete")
    .returns({ item: Item });
}
