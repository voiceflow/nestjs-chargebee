import { ChargebeeResource } from "../chargebee-resource.class";
export class InvoiceResource extends ChargebeeResource {
  public readonly create = super.request("invoice", "create", {
    invoice: { optional: false },
  });
  public readonly createForChargeItemsAndCharges = super.request(
    "invoice",
    "create_for_charge_items_and_charges",
    { invoice: { optional: false } },
  );
  public readonly charge = super.request("invoice", "charge", {
    invoice: { optional: false },
  });
  public readonly chargeAddon = super.request("invoice", "charge_addon", {
    invoice: { optional: false },
  });
  public readonly createForChargeItem = super.request(
    "invoice",
    "create_for_charge_item",
    { invoice: { optional: false } },
  );
  public readonly stopDunning = super.request("invoice", "stop_dunning", {
    invoice: { optional: false },
  });
  public readonly importInvoice = super.request("invoice", "import_invoice", {
    invoice: { optional: false },
  });
  public readonly applyPayments = super.request("invoice", "apply_payments", {
    invoice: { optional: false },
  });
  public readonly syncUsages = super.request("invoice", "sync_usages", {
    invoice: { optional: false },
  });
  public readonly deleteLineItems = super.request(
    "invoice",
    "delete_line_items",
    { invoice: { optional: false } },
  );
  public readonly applyCredits = super.request("invoice", "apply_credits", {
    invoice: { optional: false },
  });
  public readonly list = super.listRequest("invoice", "list", {
    invoice: { optional: false },
  });
  public readonly invoicesForCustomer = super.listRequest(
    "invoice",
    "invoices_for_customer",
    { invoice: { optional: false } },
  );
  public readonly invoicesForSubscription = super.listRequest(
    "invoice",
    "invoices_for_subscription",
    { invoice: { optional: false } },
  );
  public readonly retrieve = super.request("invoice", "retrieve", {
    invoice: { optional: false },
  });
  public readonly pdf = super.request("invoice", "pdf", {
    invoice: { optional: false },
  });
  public readonly downloadEinvoice = super.request(
    "invoice",
    "download_einvoice",
    { invoice: { optional: false } },
  );
  public readonly listPaymentReferenceNumbers = super.listRequest(
    "invoice",
    "list_payment_reference_numbers",
    { invoice: { optional: false } },
  );
  public readonly addCharge = super.request("invoice", "add_charge", {
    invoice: { optional: false },
  });
  public readonly addAddonCharge = super.request(
    "invoice",
    "add_addon_charge",
    { invoice: { optional: false } },
  );
  public readonly addChargeItem = super.request("invoice", "add_charge_item", {
    invoice: { optional: false },
  });
  public readonly close = super.request("invoice", "close", {
    invoice: { optional: false },
  });
  public readonly collectPayment = super.request("invoice", "collect_payment", {
    invoice: { optional: false },
  });
  public readonly recordPayment = super.request("invoice", "record_payment", {
    invoice: { optional: false },
  });
  public readonly recordTaxWithheld = super.request(
    "invoice",
    "record_tax_withheld",
    { invoice: { optional: false } },
  );
  public readonly removeTaxWithheld = super.request(
    "invoice",
    "remove_tax_withheld",
    { invoice: { optional: false } },
  );
  public readonly refund = super.request("invoice", "refund", {
    invoice: { optional: false },
  });
  public readonly recordRefund = super.request("invoice", "record_refund", {
    invoice: { optional: false },
  });
  public readonly removePayment = super.request("invoice", "remove_payment", {
    invoice: { optional: false },
  });
  public readonly removeCreditNote = super.request(
    "invoice",
    "remove_credit_note",
    { invoice: { optional: false } },
  );
  public readonly voidInvoice = super.request("invoice", "void_invoice", {
    invoice: { optional: false },
  });
  public readonly writeOff = super.request("invoice", "write_off", {
    invoice: { optional: false },
  });
  public readonly delete = super.request("invoice", "delete", {
    invoice: { optional: false },
  });
  public readonly updateDetails = super.request("invoice", "update_details", {
    invoice: { optional: false },
  });
  public readonly resendEinvoice = super.request("invoice", "resend_einvoice", {
    invoice: { optional: false },
  });
  public readonly sendEinvoice = super.request("invoice", "send_einvoice", {
    invoice: { optional: false },
  });
}
