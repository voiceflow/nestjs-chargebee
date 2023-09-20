import { ChargebeeResource } from "./abstract-resource";
export class CreditNoteResource extends ChargebeeResource {
  public readonly create = super.request("credit_note", "create", {
    credit_note: { optional: false },
    invoice: { optional: false },
  });
  public readonly retrieve = super.request("credit_note", "retrieve", {
    credit_note: { optional: false },
  });
  public readonly pdf = super.request("credit_note", "pdf", {
    download: { optional: false },
  });
  public readonly downloadEinvoice = super.request(
    "credit_note",
    "download_einvoice",
    { download: { optional: false } },
  );
  public readonly refund = super.request("credit_note", "refund", {
    credit_note: { optional: false },
    transaction: { optional: false },
  });
  public readonly recordRefund = super.request("credit_note", "record_refund", {
    credit_note: { optional: false },
    transaction: { optional: false },
  });
  public readonly voidCreditNote = super.request(
    "credit_note",
    "void_credit_note",
    { credit_note: { optional: false }, invoice: { optional: false } },
  );
  public readonly list = super.listRequest("credit_note", "list", {
    credit_note: { optional: false },
  });
  public readonly creditNotesForCustomer = super.listRequest(
    "credit_note",
    "credit_notes_for_customer",
    { credit_note: { optional: false }, customer: { optional: false } },
  );
  public readonly delete = super.request("credit_note", "delete", {
    credit_note: { optional: false },
  });
  public readonly removeTaxWithheldRefund = super.request(
    "credit_note",
    "remove_tax_withheld_refund",
    { credit_note: { optional: false }, customer: { optional: false } },
  );
  public readonly resendEinvoice = super.request(
    "credit_note",
    "resend_einvoice",
    { credit_note: { optional: false } },
  );
  public readonly sendEinvoice = super.request("credit_note", "send_einvoice", {
    credit_note: { optional: false },
  });
  public readonly importCreditNote = super.request(
    "credit_note",
    "import_credit_note",
    { credit_note: { optional: false } },
  );
}
