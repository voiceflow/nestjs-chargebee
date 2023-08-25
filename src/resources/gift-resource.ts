import { Gift } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "../chargebee-resource.class";
export class GiftResource extends ChargebeeResource {
  public readonly create = super
    .request("gift", "create")
    .returns<{ gift: Gift }>();
  public readonly createForItems = super
    .request("gift", "create_for_items")
    .returns<{ gift: Gift }>();
  public readonly retrieve = super
    .request("gift", "retrieve")
    .returns<{ gift: Gift }>();
  public readonly list = super.listRequest("gift", "list");
  public readonly claim = super
    .request("gift", "claim")
    .returns<{ gift: Gift }>();
  public readonly cancel = super
    .request("gift", "cancel")
    .returns<{ gift: Gift }>();
  public readonly updateGift = super
    .request("gift", "update_gift")
    .returns<{ gift: Gift }>();
}
