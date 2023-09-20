import { ChargebeeResource } from "./abstract-resource";
export class EntitlementOverrideResource extends ChargebeeResource {
  public readonly addEntitlementOverrideForSubscription = super.request(
    "entitlement_override",
    "add_entitlement_override_for_subscription",
    { entitlement_override: { optional: false } },
  );
  public readonly listEntitlementOverrideForSubscription = super.listRequest(
    "entitlement_override",
    "list_entitlement_override_for_subscription",
    { entitlement_override: { optional: false } },
  );
}
