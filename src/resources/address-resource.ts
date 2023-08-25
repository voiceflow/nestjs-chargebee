import { Address } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "../chargebee-resource.class";

export class AddressResource extends ChargebeeResource {
  public readonly retrieve = super
    .request("address", "retrieve")
    .returns<{ address: Address }>();
  public readonly update = super
    .request("address", "update")
    .returns<{ address: Address }>();
}
