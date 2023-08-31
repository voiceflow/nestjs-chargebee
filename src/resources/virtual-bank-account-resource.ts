import { VirtualBankAccount } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class VirtualBankAccountResource extends ChargebeeResource {
  public readonly createUsingPermanentToken = super
    .request("virtual_bank_account", "create_using_permanent_token")
    .returns<{ virtual_bank_account: VirtualBankAccount }>();
  public readonly create = super
    .request("virtual_bank_account", "create")
    .returns<{ virtual_bank_account: VirtualBankAccount }>();
  public readonly retrieve = super
    .request("virtual_bank_account", "retrieve")
    .returns<{ virtual_bank_account: VirtualBankAccount }>();
  public readonly list = super
    .listRequest("virtual_bank_account", "list")
    .returns<{ virtual_bank_account: VirtualBankAccount }>();
  public readonly delete = super
    .request("virtual_bank_account", "delete")
    .returns<{ virtual_bank_account: VirtualBankAccount }>();
  public readonly deleteLocal = super
    .request("virtual_bank_account", "delete_local")
    .returns<{ virtual_bank_account: VirtualBankAccount }>();
}
