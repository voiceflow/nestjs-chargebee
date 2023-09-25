import { ChargebeeResource } from "../chargebee-resource.class";
export class EventResource extends ChargebeeResource {
  public readonly list = super.listRequest("event", "list", {
    event: { optional: false },
  });
  public readonly retrieve = super.request("event", "retrieve", {
    event: { optional: false },
  });
}
