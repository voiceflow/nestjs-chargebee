import { Feature } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class FeatureResource extends ChargebeeResource {
  public readonly list = super
    .listRequest("feature", "list")
    .returns({ feature: Feature });
  public readonly create = super
    .request("feature", "create")
    .returns({ feature: Feature });
  public readonly update = super
    .request("feature", "update")
    .returns({ feature: Feature });
  public readonly retrieve = super
    .request("feature", "retrieve")
    .returns({ feature: Feature });
  public readonly delete = super
    .request("feature", "delete")
    .returns({ feature: Feature });
  public readonly activate = super
    .request("feature", "activate")
    .returns({ feature: Feature });
  public readonly archive = super
    .request("feature", "archive")
    .returns({ feature: Feature });
  public readonly reactivate = super
    .request("feature", "reactivate")
    .returns({ feature: Feature });
}
