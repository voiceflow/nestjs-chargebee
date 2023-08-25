import { ItemPrice } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "../chargebee-resource.class";
export class ItemPriceResource extends ChargebeeResource {
  public readonly create = super
    .request("item_price", "create")
    .returns<{ item_price: ItemPrice }>();
  public readonly retrieve = super
    .request("item_price", "retrieve")
    .returns<{ item_price: ItemPrice }>();
  public readonly update = super
    .request("item_price", "update")
    .returns<{ item_price: ItemPrice }>();
  public readonly list = super
    .listRequest("item_price", "list")
    .returns<{ item_price: ItemPrice }>();
  public readonly delete = super
    .request("item_price", "delete")
    .returns<{ item_price: ItemPrice }>();
  public readonly findApplicableItems = super
    .listRequest("item_price", "find_applicable_items")
    .returns<{ item_price: ItemPrice }>();
  public readonly findApplicableItemPrices = super
    .listRequest("item_price", "find_applicable_item_prices")
    .returns<{ item_price: ItemPrice }>();
}
