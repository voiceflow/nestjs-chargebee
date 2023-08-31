import { Usage } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class UsageResource extends ChargebeeResource {
  public readonly create = super
    .request("usage", "create")
    .returns({ usage: Usage });
  public readonly retrieve = super
    .request("usage", "retrieve")
    .returns({ usage: Usage });
  public readonly delete = super
    .request("usage", "delete")
    .returns({ usage: Usage });
  public readonly list = super
    .listRequest("usage", "list")
    .returns({ usage: Usage });
  public readonly pdf = super.request("usage", "pdf").returns({ usage: Usage });
}
