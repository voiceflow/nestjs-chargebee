import { ChargebeeResource } from "../chargebee-resource.class";

export class AddressResource extends ChargebeeResource {
  public readonly retrieve = super.request("address", "retrieve", {
    address: { optional: false },
  });
  public readonly update = super.request("address", "update", {
    address: { optional: false },
  });
}
