import { ChargebeeResource } from "../chargebee-resource.class";
export class PurchaseResource extends ChargebeeResource {
  public readonly create = super
    .request("purchase", "create")
    .returns<{ purchase: PurchaseResource }>();
  public readonly estimate = super
    .request("purchase", "estimate")
    .returns<{ purchase: PurchaseResource }>();
}
