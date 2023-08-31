import { Plan } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class PlanResource extends ChargebeeResource {
  public readonly create = super
    .request("plan", "create")
    .returns<{ plan: Plan }>();
  public readonly update = super
    .request("plan", "update")
    .returns<{ plan: Plan }>();
  public readonly list = super
    .listRequest("plan", "list")
    .returns<{ plan: Plan }>();
  public readonly retrieve = super
    .request("plan", "retrieve")
    .returns<{ plan: Plan }>();
  public readonly delete = super
    .request("plan", "delete")
    .returns<{ plan: Plan }>();
  public readonly copy = super
    .request("plan", "copy")
    .returns<{ plan: Plan }>();
  public readonly unarchive = super
    .request("plan", "unarchive")
    .returns<{ plan: Plan }>();
}
