import { ChargebeeResource } from "./abstract-resource";
export class ItemPriceResource extends ChargebeeResource {
  public readonly create = super.request("item_price", "create", {
    item_price: { optional: false },
  });
  public readonly retrieve = super.request("item_price", "retrieve", {
    item_price: { optional: false },
  });
  public readonly update = super.request("item_price", "update", {
    item_price: { optional: false },
  });
  public readonly list = super.listRequest("item_price", "list", {
    item_price: { optional: false },
  });
  public readonly delete = super.request("item_price", "delete", {
    item_price: { optional: false },
  });
  public readonly findApplicableItems = super.listRequest(
    "item_price",
    "find_applicable_items",
    { item: { optional: false } },
  );
  public readonly findApplicableItemPrices = super.listRequest(
    "item_price",
    "find_applicable_item_prices",
    { item: { optional: false } },
  );
}
