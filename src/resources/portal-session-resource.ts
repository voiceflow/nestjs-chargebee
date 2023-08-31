import { PortalSession } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class PortalSessionResource extends ChargebeeResource {
  public readonly create = super
    .request("portal_session", "create")
    .returns({ portal_session: PortalSession });
  public readonly retrieve = super
    .request("portal_session", "retrieve")
    .returns({ portal_session: PortalSession });
  public readonly logout = super
    .request("portal_session", "logout")
    .returns({ portal_session: PortalSession });
  public readonly activate = super
    .request("portal_session", "activate")
    .returns({ portal_session: PortalSession });
}
