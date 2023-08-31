import {
  CreditNote,
  Customer,
  Download,
  Invoice,
  Transaction,
} from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class CreditNoteResource extends ChargebeeResource {
  public readonly create = super
    .request("credit_note", "create")
    .returns({ credit_note: CreditNote, invoice: Invoice });
  public readonly retrieve = super
    .request("credit_note", "retrieve")
    .returns({ credit_note: CreditNote });
  public readonly pdf = super
    .request("credit_note", "pdf")
    .returns({ download: Download });
  public readonly downloadEinvoice = super
    .request("credit_note", "download_einvoice")
    .returns({ download: Download });
  public readonly refund = super
    .request("credit_note", "refund")
    .returns({ credit_note: CreditNote, transaction: Transaction });
  public readonly recordRefund = super
    .request("credit_note", "record_refund")
    .returns({ credit_note: CreditNote, transaction: Transaction });
  public readonly voidCreditNote = super
    .request("credit_note", "void_credit_note")
    .returns({ credit_note: CreditNote, invoice: Invoice });
  public readonly list = super
    .listRequest("credit_note", "list")
    .returns({ credit_note: CreditNote });
  public readonly creditNotesForCustomer = super
    .listRequest("credit_note", "credit_notes_for_customer")
    .returns({ credit_note: CreditNote, customer: Customer });
  public readonly delete = super
    .request("credit_note", "delete")
    .returns({ credit_note: CreditNote });
  public readonly removeTaxWithheldRefund = super
    .request("credit_note", "remove_tax_withheld_refund")
    .returns({ credit_note: CreditNote, customer: Customer });
  public readonly resendEinvoice = super
    .request("credit_note", "resend_einvoice")
    .returns({ credit_note: CreditNote });
  public readonly sendEinvoice = super
    .request("credit_note", "send_einvoice")
    .returns({ credit_note: CreditNote });
  public readonly importCreditNote = super
    .request("credit_note", "import_credit_note")
    .returns({ credit_note: CreditNote });
}
