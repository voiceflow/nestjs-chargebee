import { ChargebeeResource } from "./abstract-resource";
export class PurchaseResource extends ChargebeeResource {
  public readonly create = super.request("purchase", "create", {
    purchase: { optional: false },
  });
  public readonly estimate = super.request("purchase", "estimate", {
    purchase: { optional: false },
  });
}
