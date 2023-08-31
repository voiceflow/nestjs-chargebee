import { Invoice } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class InvoiceResource extends ChargebeeResource {
  public readonly create = super
    .request("invoice", "create")
    .returns<{ invoice: Invoice }>();
  public readonly createForChargeItemsAndCharges = super
    .request("invoice", "create_for_charge_items_and_charges")
    .returns<{ invoice: Invoice }>();
  public readonly charge = super
    .request("invoice", "charge")
    .returns<{ invoice: Invoice }>();
  public readonly chargeAddon = super
    .request("invoice", "charge_addon")
    .returns<{ invoice: Invoice }>();
  public readonly createForChargeItem = super
    .request("invoice", "create_for_charge_item")
    .returns<{ invoice: Invoice }>();
  public readonly stopDunning = super
    .request("invoice", "stop_dunning")
    .returns<{ invoice: Invoice }>();
  public readonly importInvoice = super
    .request("invoice", "import_invoice")
    .returns<{ invoice: Invoice }>();
  public readonly applyPayments = super
    .request("invoice", "apply_payments")
    .returns<{ invoice: Invoice }>();
  public readonly syncUsages = super
    .request("invoice", "sync_usages")
    .returns<{ invoice: Invoice }>();
  public readonly deleteLineItems = super
    .request("invoice", "delete_line_items")
    .returns<{ invoice: Invoice }>();
  public readonly applyCredits = super
    .request("invoice", "apply_credits")
    .returns<{ invoice: Invoice }>();
  public readonly list = super
    .listRequest("invoice", "list")
    .returns<{ invoice: Invoice }>();
  public readonly invoicesForCustomer = super
    .listRequest("invoice", "invoices_for_customer")
    .returns<{ invoice: Invoice }>();
  public readonly invoicesForSubscription = super
    .listRequest("invoice", "invoices_for_subscription")
    .returns<{ invoice: Invoice }>();
  public readonly retrieve = super
    .request("invoice", "retrieve")
    .returns<{ invoice: Invoice }>();
  public readonly pdf = super
    .request("invoice", "pdf")
    .returns<{ invoice: Invoice }>();
  public readonly downloadEinvoice = super
    .request("invoice", "download_einvoice")
    .returns<{ invoice: Invoice }>();
  public readonly listPaymentReferenceNumbers = super
    .listRequest("invoice", "list_payment_reference_numbers")
    .returns<{ invoice: Invoice }>();
  public readonly addCharge = super
    .request("invoice", "add_charge")
    .returns<{ invoice: Invoice }>();
  public readonly addAddonCharge = super
    .request("invoice", "add_addon_charge")
    .returns<{ invoice: Invoice }>();
  public readonly addChargeItem = super
    .request("invoice", "add_charge_item")
    .returns<{ invoice: Invoice }>();
  public readonly close = super
    .request("invoice", "close")
    .returns<{ invoice: Invoice }>();
  public readonly collectPayment = super
    .request("invoice", "collect_payment")
    .returns<{ invoice: Invoice }>();
  public readonly recordPayment = super
    .request("invoice", "record_payment")
    .returns<{ invoice: Invoice }>();
  public readonly recordTaxWithheld = super
    .request("invoice", "record_tax_withheld")
    .returns<{ invoice: Invoice }>();
  public readonly removeTaxWithheld = super
    .request("invoice", "remove_tax_withheld")
    .returns<{ invoice: Invoice }>();
  public readonly refund = super
    .request("invoice", "refund")
    .returns<{ invoice: Invoice }>();
  public readonly recordRefund = super
    .request("invoice", "record_refund")
    .returns<{ invoice: Invoice }>();
  public readonly removePayment = super
    .request("invoice", "remove_payment")
    .returns<{ invoice: Invoice }>();
  public readonly removeCreditNote = super
    .request("invoice", "remove_credit_note")
    .returns<{ invoice: Invoice }>();
  public readonly voidInvoice = super
    .request("invoice", "void_invoice")
    .returns<{ invoice: Invoice }>();
  public readonly writeOff = super
    .request("invoice", "write_off")
    .returns<{ invoice: Invoice }>();
  public readonly delete = super
    .request("invoice", "delete")
    .returns<{ invoice: Invoice }>();
  public readonly updateDetails = super
    .request("invoice", "update_details")
    .returns<{ invoice: Invoice }>();
  public readonly resendEinvoice = super
    .request("invoice", "resend_einvoice")
    .returns<{ invoice: Invoice }>();
  public readonly sendEinvoice = super
    .request("invoice", "send_einvoice")
    .returns<{ invoice: Invoice }>();
}
