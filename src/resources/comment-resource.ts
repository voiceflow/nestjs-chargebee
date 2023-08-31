import { Comment } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class CommentResource extends ChargebeeResource {
  public readonly create = super
    .request("comment", "create")
    .returns<{ comment: Comment }>();
  public readonly retrieve = super
    .request("comment", "retrieve")
    .returns<{ comment: Comment }>();
  public readonly list = super
    .listRequest("comment", "list")
    .returns<{ comment: Comment }>();
  public readonly delete = super
    .request("comment", "delete")
    .returns<{ comment: Comment }>();
}
