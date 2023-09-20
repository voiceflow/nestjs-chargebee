import { ChargebeeResource } from "./abstract-resource";
export class InAppSubscriptionResource extends ChargebeeResource {
  public readonly processReceipt = super.request(
    "in_app_subscription",
    "process_receipt",
    { in_app_subscription: { optional: false } },
  );
  public readonly importReceipt = super.request(
    "in_app_subscription",
    "import_receipt",
    { in_app_subscription: { optional: false } },
  );
  public readonly importSubscription = super.request(
    "in_app_subscription",
    "import_subscription",
    { in_app_subscription: { optional: false } },
  );
  public readonly retrieveStoreSubs = super.request(
    "in_app_subscription",
    "retrieve_store_subs",
    { in_app_subscription: { optional: false } },
  );
}
