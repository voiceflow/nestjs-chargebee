import { ChargebeeResource } from "./abstract-resource";
export class CouponSetResource extends ChargebeeResource {
  public readonly create = super.request("coupon_set", "create", {
    coupon_set: { optional: false },
  });
  public readonly addCouponCodes = super.request(
    "coupon_set",
    "add_coupon_codes",
    { coupon_set: { optional: false } },
  );
  public readonly list = super.listRequest("coupon_set", "list", {
    coupon_set: { optional: false },
  });
  public readonly retrieve = super.request("coupon_set", "retrieve", {
    coupon_set: { optional: false },
  });
  public readonly update = super.request("coupon_set", "update", {
    coupon_set: { optional: false },
  });
  public readonly delete = super.request("coupon_set", "delete", {
    coupon_set: { optional: false },
  });
  public readonly deleteUnusedCouponCodes = super.request(
    "coupon_set",
    "delete_unused_coupon_codes",
    { coupon_set: { optional: false } },
  );
}
