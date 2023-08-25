import { CouponSet } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "../chargebee-resource.class";
export class CouponSetResource extends ChargebeeResource {
  public readonly create = super
    .request("coupon_set", "create")
    .returns<{ coupon_set: CouponSet }>();
  public readonly addCouponCodes = super
    .request("coupon_set", "add_coupon_codes")
    .returns<{ coupon_set: CouponSet }>();
  public readonly list = super
    .listRequest("coupon_set", "list")
    .returns<{ coupon_set: CouponSet }>();
  public readonly retrieve = super
    .request("coupon_set", "retrieve")
    .returns<{ coupon_set: CouponSet }>();
  public readonly update = super
    .request("coupon_set", "update")
    .returns<{ coupon_set: CouponSet }>();
  public readonly delete = super
    .request("coupon_set", "delete")
    .returns<{ coupon_set: CouponSet }>();
  public readonly deleteUnusedCouponCodes = super
    .request("coupon_set", "delete_unused_coupon_codes")
    .returns<{ coupon_set: CouponSet }>();
}
