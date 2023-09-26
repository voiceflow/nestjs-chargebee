import { ChargebeeResource } from "../chargebee-resource.class";
export class PaymentIntentResource extends ChargebeeResource {
  public readonly create = super.request("payment_intent", "create", {
    payment_intent: { optional: false },
  });
  public readonly update = super.request("payment_intent", "update", {
    payment_intent: { optional: false },
  });
  public readonly retrieve = super.request("payment_intent", "retrieve", {
    payment_intent: { optional: false },
  });
}
