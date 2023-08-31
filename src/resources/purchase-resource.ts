import { Purchase } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class PurchaseResource extends ChargebeeResource {
  public readonly create = super
    .request("purchase", "create")
    .returns({ purchase: Purchase });
  public readonly estimate = super
    .request("purchase", "estimate")
    .returns({ purchase: Purchase });
}
