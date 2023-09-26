import { ChargebeeResource } from "../chargebee-resource.class";
export class DifferentialPriceResource extends ChargebeeResource {
  public readonly create = super.request("differential_price", "create", {
    differential_price: { optional: false },
  });
  public readonly retrieve = super.request("differential_price", "retrieve", {
    differential_price: { optional: false },
  });
  public readonly update = super.request("differential_price", "update", {
    differential_price: { optional: false },
  });
  public readonly delete = super.request("differential_price", "delete", {
    differential_price: { optional: false },
  });
  public readonly list = super.listRequest("differential_price", "list", {
    differential_price: { optional: false },
  });
}
