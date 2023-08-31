import { InAppSubscription } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class InAppSubscriptionResource extends ChargebeeResource {
  public readonly processReceipt = super
    .request("in_app_subscription", "process_receipt")
    .returns({ in_app_subscription: InAppSubscription });
  public readonly importReceipt = super
    .request("in_app_subscription", "import_receipt")
    .returns({ in_app_subscription: InAppSubscription });
  public readonly importSubscription = super
    .request("in_app_subscription", "import_subscription")
    .returns({ in_app_subscription: InAppSubscription });
  public readonly retrieveStoreSubs = super
    .request("in_app_subscription", "retrieve_store_subs")
    .returns({ in_app_subscription: InAppSubscription });
}
