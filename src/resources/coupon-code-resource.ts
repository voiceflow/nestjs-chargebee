import { CouponCode } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class CouponCodeResource extends ChargebeeResource {
  public readonly create = super
    .request("coupon_code", "create")
    .returns<{ coupon_code: CouponCode }>();
  public readonly retrieve = super
    .request("coupon_code", "retrieve")
    .returns<{ coupon_code: CouponCode }>();
  public readonly list = super
    .listRequest("coupon_code", "list")
    .returns<{ coupon_code: CouponCode }>();
  public readonly archive = super
    .request("coupon_code", "archive")
    .returns<{ coupon_code: CouponCode }>();
}
