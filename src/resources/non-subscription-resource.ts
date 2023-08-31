import { NonSubscription } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class NonSubscriptionResource extends ChargebeeResource {
  public readonly processReceipt = super
    .request("non_subscription", "process_receipt")
    .returns({ non_subscription: NonSubscription });
}