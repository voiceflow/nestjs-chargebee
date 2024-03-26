import { ChargebeeResource } from "../chargebee-resource.class";
export class EntitlementResource extends ChargebeeResource {
  public readonly create = super.request("entitlement", "create", {
    entitlement: { optional: false },
  });

  public readonly list = super.listRequest("entitlement", "list", {
    entitlement: { optional: false },
  });
}
