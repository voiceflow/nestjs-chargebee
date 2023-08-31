import { SubscriptionEntitlement } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class SubscriptionEntitlementResource extends ChargebeeResource {
  public readonly subscriptionEntitlementsForSubscription = super
    .listRequest(
      "subscription_entitlement",
      "subscription_entitlements_for_subscription",
    )
    .returns<{ subscription_entitlement: SubscriptionEntitlement }>();
  public readonly setSubscriptionEntitlementAvailability = super
    .request(
      "subscription_entitlement",
      "set_subscription_entitlement_availability",
    )
    .returns<{ subscription_entitlement: SubscriptionEntitlement }>();
}
