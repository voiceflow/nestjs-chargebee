import { PaymentVoucher } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class PaymentVoucherResource extends ChargebeeResource {
  public readonly create = super
    .request("payment_voucher", "create")
    .returns({ payment_voucher: PaymentVoucher });
  public readonly retrieve = super
    .request("payment_voucher", "retrieve")
    .returns({ payment_voucher: PaymentVoucher });
  public readonly paymentVouchersForInvoice = super
    .listRequest("payment_voucher", "payment_vouchers_for_invoice")
    .returns({ payment_voucher: PaymentVoucher });
  public readonly paymentVouchersForCustomer = super
    .listRequest("payment_voucher", "payment_vouchers_for_customer")
    .returns({ payment_voucher: PaymentVoucher });
}
