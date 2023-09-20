import { ChargebeeResource } from "./abstract-resource";
export class UsageResource extends ChargebeeResource {
  public readonly create = super.request("usage", "create", {
    usage: { optional: false },
  });
  public readonly retrieve = super.request("usage", "retrieve", {
    usage: { optional: false },
  });
  public readonly delete = super.request("usage", "delete", {
    usage: { optional: false },
  });
  public readonly list = super.listRequest("usage", "list", {
    usage: { optional: false },
  });
  public readonly pdf = super.request("usage", "pdf", {
    usage: { optional: false },
  });
}
