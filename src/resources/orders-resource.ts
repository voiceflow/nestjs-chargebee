/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Chargebee API
 * OpenAPI spec version: v2 (PC 2.0)
 */
import type { AxiosInstance, AxiosResponse } from "axios";
import type {
  ListOrdersParams,
  ListOrdersHeaders,
  ListOrders200,
  CreateAnOrderHeaders,
  CreateAnOrderBody,
  CreateAnOrder200,
  ImportAnOrderHeaders,
  ImportAnOrderBody,
  ImportAnOrder200,
  AssignOrderNumberHeaders,
  AssignOrderNumber200,
  ResendAnOrderHeaders,
  ResendAnOrderBody,
  ResendAnOrder200,
  ReopenACancelledOrderHeaders,
  ReopenACancelledOrderBody,
  ReopenACancelledOrder200,
  CancelAnOrderHeaders,
  CancelAnOrderBody,
  CancelAnOrder200,
  RetrieveAnOrderHeaders,
  RetrieveAnOrder200,
  UpdateAnOrderHeaders,
  UpdateAnOrderBody,
  UpdateAnOrder200,
  DeleteAnImportedOrderHeaders,
  DeleteAnImportedOrder200,
  CreateARefundableCreditNoteHeaders,
  CreateARefundableCreditNoteBody,
  CreateARefundableCreditNote200,
} from "./chargebeeAPI.schemas";

export class ChargebeeOrdersResource {
  constructor(private readonly axios: AxiosInstance) {}

  /**
 * This API is used to retrieve a list of all the available orders.

 * @summary List orders
 */
  public async listOrders(
    params?: ListOrdersParams,
    headers?: ListOrdersHeaders,
  ): Promise<AxiosResponse<ListOrders200>> {
    return this.axios.get(`/orders`, {
      params,
      headers,
    });
  }

  /**
 * #### Deprecated

Chargebee no longer supports this endpoint, see [here](https://www.chargebee.com/docs/1.0/manual_orders_deprecate.html) for more information. Contact [Support](https://chargebee.freshdesk.com/support/home/) for additional assistance or if you have concerns about this update.

 * @summary Create an order
 */
  public async createAnOrder(
    createAnOrderBody: CreateAnOrderBody,
    headers?: CreateAnOrderHeaders,
  ): Promise<AxiosResponse<CreateAnOrder200>> {
    return this.axios.post(`/orders`, {
      headers,
      json: createAnOrderBody,
    });
  }

  /**
 * Import an order for an invoice with one or more line items. The import order bulk operation is to be applied on an imported invoice.

 * @summary Import an order
 */
  public async importAnOrder(
    importAnOrderBody: ImportAnOrderBody,
    headers?: ImportAnOrderHeaders,
  ): Promise<AxiosResponse<ImportAnOrder200>> {
    return this.axios.post(`/orders/import_order`, {
      headers,
      json: importAnOrderBody,
    });
  }

  /**
 * Assigns order number to the order based on the settings, if not already assigned

 * @summary Assign order number
 */
  public async assignOrderNumber(
    orderId: string,
    headers?: AssignOrderNumberHeaders,
  ): Promise<AxiosResponse<AssignOrderNumber200>> {
    return this.axios.post(`/orders/${orderId}/assign_order_number`, {
      headers,
    });
  }

  /**
 * Resend an existing order. This will help in resending an existing order in full or partial. Upto 5 resend operations are allowed per . When resent fully, the original order is canceled.

 * @summary Resend an order
 */
  public async resendAnOrder(
    orderId: string,
    resendAnOrderBody: ResendAnOrderBody,
    headers?: ResendAnOrderHeaders,
  ): Promise<AxiosResponse<ResendAnOrder200>> {
    return this.axios.post(`/orders/${orderId}/resend`, {
      headers,
      json: resendAnOrderBody,
    });
  }

  /**
 * This API is used to re-open a cancelled order

 * @summary Reopen a cancelled order
 */
  public async reopenACancelledOrder(
    orderId: string,
    reopenACancelledOrderBody: ReopenACancelledOrderBody,
    headers?: ReopenACancelledOrderHeaders,
  ): Promise<AxiosResponse<ReopenACancelledOrder200>> {
    return this.axios.post(`/orders/${orderId}/reopen`, {
      headers,
      json: reopenACancelledOrderBody,
    });
  }

  /**
 * Cancel order and create a refundable credit note for the order

 * @summary Cancel an order
 */
  public async cancelAnOrder(
    orderId: string,
    cancelAnOrderBody: CancelAnOrderBody,
    headers?: CancelAnOrderHeaders,
  ): Promise<AxiosResponse<CancelAnOrder200>> {
    return this.axios.post(`/orders/${orderId}/cancel`, {
      headers,
      json: cancelAnOrderBody,
    });
  }

  /**
 * Retrieves an order corresponding to the order id passed.

 * @summary Retrieve an order
 */
  public async retrieveAnOrder(
    orderId: string,
    headers?: RetrieveAnOrderHeaders,
  ): Promise<AxiosResponse<RetrieveAnOrder200>> {
    return this.axios.get(`/orders/${orderId}`, {
      headers,
    });
  }

  /**
 * Updates an order. If the status of an order is changed while updating the order, the status_update_at attribute is set with the current time.

 * @summary Update an order
 */
  public async updateAnOrder(
    orderId: string,
    updateAnOrderBody: UpdateAnOrderBody,
    headers?: UpdateAnOrderHeaders,
  ): Promise<AxiosResponse<UpdateAnOrder200>> {
    return this.axios.post(`/orders/${orderId}`, {
      headers,
      json: updateAnOrderBody,
    });
  }

  /**
 * Deletes only [Imported Order](#import_an_order) .Delete does not happen if the order was refunded. It goes through if order refund was initiated and is in "refund_due" state.

 * @summary Delete an imported order
 */
  public async deleteAnImportedOrder(
    orderId: string,
    headers?: DeleteAnImportedOrderHeaders,
  ): Promise<AxiosResponse<DeleteAnImportedOrder200>> {
    return this.axios.post(`/orders/${orderId}/delete`, {
      headers,
    });
  }

  /**
 * This API is used to create a refundable credit note for the order

 * @summary Create a refundable credit note
 */
  public async createARefundableCreditNote(
    orderId: string,
    createARefundableCreditNoteBody: CreateARefundableCreditNoteBody,
    headers?: CreateARefundableCreditNoteHeaders,
  ): Promise<AxiosResponse<CreateARefundableCreditNote200>> {
    return this.axios.post(`/orders/${orderId}/create_refundable_credit_note`, {
      headers,
      json: createARefundableCreditNoteBody,
    });
  }
}