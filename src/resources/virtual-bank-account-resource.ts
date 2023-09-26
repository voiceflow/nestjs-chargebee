import { ChargebeeResource } from "../chargebee-resource.class";
export class VirtualBankAccountResource extends ChargebeeResource {
  public readonly createUsingPermanentToken = super.request(
    "virtual_bank_account",
    "create_using_permanent_token",
    { virtual_bank_account: { optional: false } },
  );
  public readonly create = super.request("virtual_bank_account", "create", {
    virtual_bank_account: { optional: false },
  });
  public readonly retrieve = super.request("virtual_bank_account", "retrieve", {
    virtual_bank_account: { optional: false },
  });
  public readonly list = super.listRequest("virtual_bank_account", "list", {
    virtual_bank_account: { optional: false },
  });
  public readonly delete = super.request("virtual_bank_account", "delete", {
    virtual_bank_account: { optional: false },
  });
  public readonly deleteLocal = super.request(
    "virtual_bank_account",
    "delete_local",
    { virtual_bank_account: { optional: false } },
  );
}
