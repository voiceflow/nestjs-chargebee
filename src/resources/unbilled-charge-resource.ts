import { ChargebeeResource } from "./abstract-resource";
export class UnbilledChargeResource extends ChargebeeResource {
  public readonly createUnbilledCharge = super.request(
    "unbilled_charge",
    "create_unbilled_charge",
    { unbilled_charge: { optional: false } },
  );
  public readonly create = super.request("unbilled_charge", "create", {
    unbilled_charge: { optional: false },
  });
  public readonly invoiceUnbilledCharges = super.request(
    "unbilled_charge",
    "invoice_unbilled_charges",
    { unbilled_charge: { optional: false } },
  );
  public readonly delete = super.request("unbilled_charge", "delete", {
    unbilled_charge: { optional: false },
  });
  public readonly list = super.listRequest("unbilled_charge", "list", {
    unbilled_charge: { optional: false },
  });
  public readonly invoiceNowEstimate = super.request(
    "unbilled_charge",
    "invoice_now_estimate",
    { unbilled_charge: { optional: false } },
  );
}
