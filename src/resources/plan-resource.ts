import { ChargebeeResource } from "../chargebee-resource.class";
export class PlanResource extends ChargebeeResource {
  public readonly create = super.request("plan", "create", {
    plan: { optional: false },
  });
  public readonly update = super.request("plan", "update", {
    plan: { optional: false },
  });
  public readonly list = super.listRequest("plan", "list", {
    plan: { optional: false },
  });
  public readonly retrieve = super.request("plan", "retrieve", {
    plan: { optional: false },
  });
  public readonly delete = super.request("plan", "delete", {
    plan: { optional: false },
  });
  public readonly copy = super.request("plan", "copy", {
    plan: { optional: false },
  });
  public readonly unarchive = super.request("plan", "unarchive", {
    plan: { optional: false },
  });
}
