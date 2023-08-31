import { Address } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";

export class AddressResource extends ChargebeeResource {
  public readonly retrieve = super
    .request("address", "retrieve")
    .returns<{ address: Address }>();
  public readonly update = super
    .request("address", "update")
    .returns<{ address: Address }>();
}
