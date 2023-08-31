import { EntitlementOverride } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class EntitlementOverrideResource extends ChargebeeResource {
  public readonly addEntitlementOverrideForSubscription = super
    .request(
      "entitlement_override",
      "add_entitlement_override_for_subscription",
    )
    .returns<{ entitlement_override: EntitlementOverride }>();
  public readonly listEntitlementOverrideForSubscription = super
    .listRequest(
      "entitlement_override",
      "list_entitlement_override_for_subscription",
    )
    .returns<{ entitlement_override: EntitlementOverride }>();
}
