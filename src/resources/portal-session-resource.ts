import { ChargebeeResource } from "../chargebee-resource.class";
export class PortalSessionResource extends ChargebeeResource {
  public readonly create = super.request("portal_session", "create", {
    portal_session: { optional: false },
  });
  public readonly retrieve = super.request("portal_session", "retrieve", {
    portal_session: { optional: false },
  });
  public readonly logout = super.request("portal_session", "logout", {
    portal_session: { optional: false },
  });
  public readonly activate = super.request("portal_session", "activate", {
    portal_session: { optional: false },
  });
}
