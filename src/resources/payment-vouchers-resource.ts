/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Chargebee API
 * OpenAPI spec version: v2 (PC 2.0)
 */
import type { AxiosInstance, AxiosResponse } from "axios";
import type {
  RetrieveVoucherDataHeaders,
  RetrieveVoucherData200,
  CreateAVoucherForTheCustomerToInitiatePaymentHeaders,
  CreateAVoucherForTheCustomerToInitiatePaymentBody,
  CreateAVoucherForTheCustomerToInitiatePayment200,
} from "./chargebeeAPI.schemas";

export class ChargebeePaymentVouchersResource {
  constructor(private readonly axios: AxiosInstance) {}

  /**
 * Retrieves a voucher using the unique `payment_voucher_id`.

 * @summary Retrieve voucher data
 */
  public async retrieveVoucherData(
    paymentVoucherId: string,
    headers?: RetrieveVoucherDataHeaders,
  ): Promise<AxiosResponse<RetrieveVoucherData200>> {
    return this.axios.get(`/payment_vouchers/${paymentVoucherId}`, {
      headers,
    });
  }

  /**
 * Creates a voucher type payment source. If you create this voucher type payment source using customer details, like tax ID, you can then generate a voucher with that payment source.

 * @summary Create a voucher for the customer to initiate payment
 */
  public async createAVoucherForTheCustomerToInitiatePayment(
    createAVoucherForTheCustomerToInitiatePaymentBody: CreateAVoucherForTheCustomerToInitiatePaymentBody,
    headers?: CreateAVoucherForTheCustomerToInitiatePaymentHeaders,
  ): Promise<AxiosResponse<CreateAVoucherForTheCustomerToInitiatePayment200>> {
    return this.axios.post(`/payment_vouchers`, {
      headers,
      json: createAVoucherForTheCustomerToInitiatePaymentBody,
    });
  }
}
