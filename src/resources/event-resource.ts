import { Event } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class EventResource extends ChargebeeResource {
  public readonly list = super
    .listRequest("event", "list")
    .returns({ event: Event });
  public readonly retrieve = super
    .request("event", "retrieve")
    .returns({ event: Event });
}
