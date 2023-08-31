import { ItemEntitlement } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class ItemEntitlementResource extends ChargebeeResource {
  public readonly itemEntitlementsForItem = super
    .listRequest("item_entitlement", "item_entitlements_for_item")
    .returns({ item_entitlement: ItemEntitlement });
  public readonly itemEntitlementsForFeature = super
    .listRequest("item_entitlement", "item_entitlements_for_feature")
    .returns({ item_entitlement: ItemEntitlement });
  public readonly addItemEntitlements = super
    .request("item_entitlement", "add_item_entitlements")
    .returns({ item_entitlement: ItemEntitlement });
  public readonly upsertOrRemoveItemEntitlementsForItem = super
    .request("item_entitlement", "upsert_or_remove_item_entitlements_for_item")
    .returns({ item_entitlement: ItemEntitlement });
}
