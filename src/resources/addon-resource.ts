import { Addon } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";

export class AddonResource extends ChargebeeResource {
  public readonly create = super
    .request("addon", "create")
    .returns<{ addon: Addon }>();
  public readonly update = super
    .request("addon", "update")
    .returns<{ addon: Addon }>();
  public readonly list = super
    .listRequest("addon", "list")
    .returns<{ addon: Addon }>();
  public readonly retrieve = super
    .request("addon", "retrieve")
    .returns<{ addon: Addon }>();
  public readonly delete = super
    .request("addon", "delete")
    .returns<{ addon: Addon }>();
  public readonly copy = super
    .request("addon", "copy")
    .returns<{ addon: Addon }>();
  public readonly unarchive = super
    .request("addon", "unarchive")
    .returns<{ addon: Addon }>();
}
