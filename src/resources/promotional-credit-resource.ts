import { ChargebeeResource } from "../chargebee-resource.class";
export class PromotionalCreditResource extends ChargebeeResource {
  public readonly add = super.request("promotional_credit", "add", {
    promotional_credit: { optional: false },
  });
  public readonly deduct = super.request("promotional_credit", "deduct", {
    promotional_credit: { optional: false },
  });
  public readonly set = super.request("promotional_credit", "set", {
    promotional_credit: { optional: false },
  });
  public readonly list = super.listRequest("promotional_credit", "list", {
    promotional_credit: { optional: false },
  });
  public readonly retrieve = super.request("promotional_credit", "retrieve", {
    promotional_credit: { optional: false },
  });
}
