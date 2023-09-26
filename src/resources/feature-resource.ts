import { ChargebeeResource } from "../chargebee-resource.class";
export class FeatureResource extends ChargebeeResource {
  public readonly list = super.listRequest("feature", "list", {
    feature: { optional: false },
  });
  public readonly create = super.request("feature", "create", {
    feature: { optional: false },
  });
  public readonly update = super.request("feature", "update", {
    feature: { optional: false },
  });
  public readonly retrieve = super.request("feature", "retrieve", {
    feature: { optional: false },
  });
  public readonly delete = super.request("feature", "delete", {
    feature: { optional: false },
  });
  public readonly activate = super.request("feature", "activate", {
    feature: { optional: false },
  });
  public readonly archive = super.request("feature", "archive", {
    feature: { optional: false },
  });
  public readonly reactivate = super.request("feature", "reactivate", {
    feature: { optional: false },
  });
}
