import { DifferentialPrice } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class DifferentialPriceResource extends ChargebeeResource {
  public readonly create = super
    .request("differential_price", "create")
    .returns({ differential_price: DifferentialPrice });
  public readonly retrieve = super
    .request("differential_price", "retrieve")
    .returns({ differential_price: DifferentialPrice });
  public readonly update = super
    .request("differential_price", "update")
    .returns({ differential_price: DifferentialPrice });
  public readonly delete = super
    .request("differential_price", "delete")
    .returns({ differential_price: DifferentialPrice });
  public readonly list = super.listRequest("differential_price", "list");
}
