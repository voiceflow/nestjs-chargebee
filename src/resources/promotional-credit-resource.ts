import { PromotionalCredit } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class PromotionalCreditResource extends ChargebeeResource {
  public readonly add = super
    .request("promotional_credit", "add")
    .returns<{ promotional_credit: PromotionalCredit }>();
  public readonly deduct = super
    .request("promotional_credit", "deduct")
    .returns<{ promotional_credit: PromotionalCredit }>();
  public readonly set = super
    .request("promotional_credit", "set")
    .returns<{ promotional_credit: PromotionalCredit }>();
  public readonly list = super
    .listRequest("promotional_credit", "list")
    .returns<{ promotional_credit: PromotionalCredit }>();
  public readonly retrieve = super
    .request("promotional_credit", "retrieve")
    .returns<{ promotional_credit: PromotionalCredit }>();
}
