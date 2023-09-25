import { ChargebeeResource } from "../chargebee-resource.class";
export class SubscriptionEntitlementResource extends ChargebeeResource {
  public readonly subscriptionEntitlementsForSubscription = super.listRequest(
    "subscription_entitlement",
    "subscription_entitlements_for_subscription",
    { subscription_entitlement: { optional: false } },
  );
  public readonly setSubscriptionEntitlementAvailability = super.request(
    "subscription_entitlement",
    "set_subscription_entitlement_availability",
    { subscription_entitlement: { optional: false } },
  );
}
