import { ChargebeeResource } from "./abstract-resource";
export class CouponCodeResource extends ChargebeeResource {
  public readonly create = super.request("coupon_code", "create", {
    coupon_code: { optional: false },
  });
  public readonly retrieve = super.request("coupon_code", "retrieve", {
    coupon_code: { optional: false },
  });
  public readonly list = super.listRequest("coupon_code", "list", {
    coupon_code: { optional: false },
  });
  public readonly archive = super.request("coupon_code", "archive", {
    coupon_code: { optional: false },
  });
}
