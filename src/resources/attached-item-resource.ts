import { AttachedItem } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";

export class AttachedItemResource extends ChargebeeResource {
  public readonly create = super
    .request("attached_item", "create")
    .returns({ attached_item: AttachedItem });
  public readonly update = super
    .request("attached_item", "update")
    .returns({ attached_item: AttachedItem });
  public readonly retrieve = super
    .request("attached_item", "retrieve")
    .returns({ attached_item: AttachedItem });
  public readonly delete = super
    .request("attached_item", "delete")
    .returns({ attached_item: AttachedItem });
  public readonly list = super
    .listRequest("attached_item", "list")
    .returns({ attached_item: AttachedItem });
}
