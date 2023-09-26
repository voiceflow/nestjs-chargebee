import { ChargebeeResource } from "../chargebee-resource.class";
export class PaymentVoucherResource extends ChargebeeResource {
  public readonly create = super.request("payment_voucher", "create", {
    payment_voucher: { optional: false },
  });
  public readonly retrieve = super.request("payment_voucher", "retrieve", {
    payment_voucher: { optional: false },
  });
  public readonly paymentVouchersForInvoice = super.listRequest(
    "payment_voucher",
    "payment_vouchers_for_invoice",
    { payment_voucher: { optional: false } },
  );
  public readonly paymentVouchersForCustomer = super.listRequest(
    "payment_voucher",
    "payment_vouchers_for_customer",
    { payment_voucher: { optional: false } },
  );
}
