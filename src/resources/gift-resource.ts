import { ChargebeeResource } from "./abstract-resource";
export class GiftResource extends ChargebeeResource {
  public readonly create = super.request("gift", "create", {
    gift: { optional: false },
  });
  public readonly createForItems = super.request("gift", "create_for_items", {
    gift: { optional: false },
  });
  public readonly retrieve = super.request("gift", "retrieve", {
    gift: { optional: false },
  });
  public readonly list = super.listRequest("gift", "list");
  public readonly claim = super.request("gift", "claim", {
    gift: { optional: false },
  });
  public readonly cancel = super.request("gift", "cancel", {
    gift: { optional: false },
  });
  public readonly updateGift = super.request("gift", "update_gift", {
    gift: { optional: false },
  });
}
