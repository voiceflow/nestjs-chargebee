import { UnbilledCharge } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class UnbilledChargeResource extends ChargebeeResource {
  public readonly createUnbilledCharge = super
    .request("unbilled_charge", "create_unbilled_charge")
    .returns({ unbilled_charge: UnbilledCharge });
  public readonly create = super
    .request("unbilled_charge", "create")
    .returns({ unbilled_charge: UnbilledCharge });
  public readonly invoiceUnbilledCharges = super
    .request("unbilled_charge", "invoice_unbilled_charges")
    .returns({ unbilled_charge: UnbilledCharge });
  public readonly delete = super
    .request("unbilled_charge", "delete")
    .returns({ unbilled_charge: UnbilledCharge });
  public readonly list = super
    .listRequest("unbilled_charge", "list")
    .returns({ unbilled_charge: UnbilledCharge });
  public readonly invoiceNowEstimate = super
    .request("unbilled_charge", "invoice_now_estimate")
    .returns({ unbilled_charge: UnbilledCharge });
}
