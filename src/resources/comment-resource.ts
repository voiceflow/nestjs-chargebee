import { ChargebeeResource } from "./abstract-resource";
export class CommentResource extends ChargebeeResource {
  public readonly create = super.request("comment", "create", {
    comment: { optional: false },
  });
  public readonly retrieve = super.request("comment", "retrieve", {
    comment: { optional: false },
  });
  public readonly list = super.listRequest("comment", "list", {
    comment: { optional: false },
  });
  public readonly delete = super.request("comment", "delete", {
    comment: { optional: false },
  });
}
