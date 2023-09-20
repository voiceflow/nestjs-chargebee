import { ChargebeeResource } from "./abstract-resource";
export class NonSubscriptionResource extends ChargebeeResource {
  public readonly processReceipt = super.request(
    "non_subscription",
    "process_receipt",
    { non_subscription: { optional: false } },
  );
}
