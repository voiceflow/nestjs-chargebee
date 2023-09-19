/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Chargebee API
 * OpenAPI spec version: v2 (PC 2.0)
 */
import type { AxiosInstance, AxiosResponse } from "axios";
import type {
  DeleteAnUnbilledChargeHeaders,
  DeleteAnUnbilledCharge200,
  CreateAnEstimateForUnbilledChargesHeaders,
  CreateAnEstimateForUnbilledChargesBody,
  CreateAnEstimateForUnbilledCharges200,
  CreateAnInvoiceForUnbilledChargesHeaders,
  CreateAnInvoiceForUnbilledChargesBody,
  CreateAnInvoiceForUnbilledCharges200,
  ListUnbilledChargesParams,
  ListUnbilledChargesHeaders,
  ListUnbilledCharges200,
  CreateUnbilledChargesForItemSubscriptionHeaders,
  CreateUnbilledChargesForItemSubscriptionBody,
  CreateUnbilledChargesForItemSubscription200,
} from "./chargebeeAPI.schemas";

export class ChargebeeUnbilledChargesResource {
  constructor(private readonly axios: AxiosInstance) {}

  /**
 * Use this API to delete an unbilled charge by specifying the id of the charge.

 * @summary Delete an unbilled charge
 */
  public async deleteAnUnbilledCharge(
    unbilledChargeId: string,
    headers?: DeleteAnUnbilledChargeHeaders,
  ): Promise<AxiosResponse<DeleteAnUnbilledCharge200>> {
    return this.axios.post(`/unbilled_charges/${unbilledChargeId}/delete`, {
      headers,
    });
  }

  /**
 * This is similar to the "Create an invoice for unbilled charges" API but no invoice will be created, only an estimate for this operation is created.

In the estimate response,

* **estimate.invoice_estimates** is an array of **estimate.invoice_estimate**. This has the details of the invoices that will be generated now.

**Note:**

* This API when invoked does not perform the actual operation. It just generates an estimate.
* Both *subscription_id* and *customer_id* parameters should not be given at the same time.




 * @summary Create an estimate for unbilled charges
 */
  public async createAnEstimateForUnbilledCharges(
    createAnEstimateForUnbilledChargesBody: CreateAnEstimateForUnbilledChargesBody,
    headers?: CreateAnEstimateForUnbilledChargesHeaders,
  ): Promise<AxiosResponse<CreateAnEstimateForUnbilledCharges200>> {
    return this.axios.post(`/unbilled_charges/invoice_now_estimate`, {
      headers,
      json: createAnEstimateForUnbilledChargesBody,
    });
  }

  /**
 * Use this API to bill the [unbilled charges](https://www.chargebee.com/docs/unbilled-charges.html). Available Credits and Excess Payments will automatically be applied while creating the invoice.

If the *Auto Collection* is turned on for the particular customer, the invoice will be created in payment_due state and the payment collection will be scheduled immediately.

During invoice creation, the PO number for the line items will be filled from the subscription's current PO number, if available.

If no recurring item is present in the created invoice, the invoice will be marked as recurring=false.

If consolidated invoicing is enabled and the parameter 'customer_id' is passed, multiple invoices can be created based on the following factors.

* Currency
* PO number if 'Group by PO number' is enabled
* Shipping address
* Auto Collection
* Payment method

 * @summary Create an invoice for unbilled charges
 */
  public async createAnInvoiceForUnbilledCharges(
    createAnInvoiceForUnbilledChargesBody: CreateAnInvoiceForUnbilledChargesBody,
    headers?: CreateAnInvoiceForUnbilledChargesHeaders,
  ): Promise<AxiosResponse<CreateAnInvoiceForUnbilledCharges200>> {
    return this.axios.post(`/unbilled_charges/invoice_unbilled_charges`, {
      headers,
      json: createAnInvoiceForUnbilledChargesBody,
    });
  }

  /**
 * This endpoint lists all the unbilled charges.

 * @summary List unbilled charges
 */
  public async listUnbilledCharges(
    params?: ListUnbilledChargesParams,
    headers?: ListUnbilledChargesHeaders,
  ): Promise<AxiosResponse<ListUnbilledCharges200>> {
    return this.axios.get(`/unbilled_charges`, {
      params,
      headers,
    });
  }

  /**
 * This endpoint creates unbilled charges for a subscription.

 * @summary Create unbilled charges for item subscription
 */
  public async createUnbilledChargesForItemSubscription(
    createUnbilledChargesForItemSubscriptionBody: CreateUnbilledChargesForItemSubscriptionBody,
    headers?: CreateUnbilledChargesForItemSubscriptionHeaders,
  ): Promise<AxiosResponse<CreateUnbilledChargesForItemSubscription200>> {
    return this.axios.post(`/unbilled_charges`, {
      headers,
      json: createUnbilledChargesForItemSubscriptionBody,
    });
  }
}