import { ChargebeeResource } from "../chargebee-resource.class";
export class ItemEntitlementResource extends ChargebeeResource {
  public readonly itemEntitlementsForItem = super.listRequest(
    "item_entitlement",
    "item_entitlements_for_item",
    { item_entitlement: { optional: false } },
  );
  public readonly itemEntitlementsForFeature = super.listRequest(
    "item_entitlement",
    "item_entitlements_for_feature",
    { item_entitlement: { optional: false } },
  );
  public readonly addItemEntitlements = super.request(
    "item_entitlement",
    "add_item_entitlements",
    { item_entitlement: { optional: false } },
  );
  public readonly upsertOrRemoveItemEntitlementsForItem = super.request(
    "item_entitlement",
    "upsert_or_remove_item_entitlements_for_item",
    { item_entitlement: { optional: false } },
  );
}
