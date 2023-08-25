import { Coupon } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "../chargebee-resource.class";
export class CouponResource extends ChargebeeResource {
  public readonly create = super
    .request("coupon", "create")
    .returns<{ coupon: Coupon }>();
  public readonly createForItems = super
    .request("coupon", "create_for_items")
    .returns<{ coupon: Coupon }>();
  public readonly updateForItems = super
    .request("coupon", "update_for_items")
    .returns<{ coupon: Coupon }>();
  public readonly list = super
    .listRequest("coupon", "list")
    .returns<{ coupon: Coupon }>();
  public readonly retrieve = super
    .request("coupon", "retrieve")
    .returns<{ coupon: Coupon }>();
  public readonly update = super
    .request("coupon", "update")
    .returns<{ coupon: Coupon }>();
  public readonly delete = super
    .request("coupon", "delete")
    .returns<{ coupon: Coupon }>();
  public readonly copy = super
    .request("coupon", "copy")
    .returns<{ coupon: Coupon }>();
  public readonly unarchive = super
    .request("coupon", "unarchive")
    .returns<{ coupon: Coupon }>();
}
