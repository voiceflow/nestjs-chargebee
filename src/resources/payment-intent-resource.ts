import { PaymentIntent } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class PaymentIntentResource extends ChargebeeResource {
  public readonly create = super
    .request("payment_intent", "create")
    .returns<{ payment_intent: PaymentIntent }>();
  public readonly update = super
    .request("payment_intent", "update")
    .returns<{ payment_intent: PaymentIntent }>();
  public readonly retrieve = super
    .request("payment_intent", "retrieve")
    .returns<{ payment_intent: PaymentIntent }>();
}
