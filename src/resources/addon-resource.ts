import { ChargebeeResource } from "./abstract-resource";

export class AddonResource extends ChargebeeResource {
  public readonly create = super.request("addon", "create", {
    addon: { optional: false },
  });
  public readonly update = super.request("addon", "update", {
    addon: { optional: false },
  });
  public readonly list = super.listRequest("addon", "list", {
    addon: { optional: false },
  });
  public readonly retrieve = super.request("addon", "retrieve", {
    addon: { optional: false },
  });
  public readonly delete = super.request("addon", "delete", {
    addon: { optional: false },
  });
  public readonly copy = super.request("addon", "copy", {
    addon: { optional: false },
  });
  public readonly unarchive = super.request("addon", "unarchive", {
    addon: { optional: false },
  });
}
