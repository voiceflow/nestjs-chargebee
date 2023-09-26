import { ChargebeeResource } from "../chargebee-resource.class";
export class CouponResource extends ChargebeeResource {
  public readonly create = super.request("coupon", "create", {
    coupon: { optional: false },
  });
  public readonly createForItems = super.request("coupon", "create_for_items", {
    coupon: { optional: false },
  });
  public readonly updateForItems = super.request("coupon", "update_for_items", {
    coupon: { optional: false },
  });
  public readonly list = super.listRequest("coupon", "list", {
    coupon: { optional: false },
  });
  public readonly retrieve = super.request("coupon", "retrieve", {
    coupon: { optional: false },
  });
  public readonly update = super.request("coupon", "update", {
    coupon: { optional: false },
  });
  public readonly delete = super.request("coupon", "delete", {
    coupon: { optional: false },
  });
  public readonly copy = super.request("coupon", "copy", {
    coupon: { optional: false },
  });
  public readonly unarchive = super.request("coupon", "unarchive", {
    coupon: { optional: false },
  });
}
