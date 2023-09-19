/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Chargebee API
 * OpenAPI spec version: v2 (PC 2.0)
 */
import type { AxiosInstance, AxiosResponse } from "axios";
import type {
  EstimateForCreatingACustomerAndSubscriptionHeaders,
  EstimateForCreatingACustomerAndSubscriptionBody,
  EstimateForCreatingACustomerAndSubscription200,
  CreateInvoiceForItemsEstimateHeaders,
  CreateInvoiceForItemsEstimateBody,
  CreateInvoiceForItemsEstimate200,
  GiftSubscriptionEstimateForItemsHeaders,
  GiftSubscriptionEstimateForItemsBody,
  GiftSubscriptionEstimateForItems200,
  EstimateForUpdatingASubscriptionHeaders,
  EstimateForUpdatingASubscriptionBody,
  EstimateForUpdatingASubscription200,
} from "./chargebeeAPI.schemas";

export class ChargebeeEstimatesResource {
  constructor(private readonly axios: AxiosInstance) {}

  /**
 * Generates an estimate for creating a subscription when the customer does not exist in Chargebee. This estimate API can be called when the customer has not yet signed up and you want to preview how a new subscription would look like for them.

**Note:** Estimate operations do not make any changes in Chargebee; hence this API does not create an actual `customer` or `subscription` record.  
**See also**

* [Estimate a purchase](https://apidocs.chargebee.com/docs/api/purchases#estimates_for_purchase): an operation that estimates a `purchase` representing multiple subscriptions bought together by a customer.

The response contains one or more of the following objects:

* `subscription_estimate`: The subscription details like the status of the subscription (such as `in_trial` or `active`), next billing date, and so on.
* `invoice_estimate`:The details of the immediate invoice, if there is one. If the subscription is created in `trial`/`future` states, `invoice_estimate` is unavailable as no immediate invoice is generated.
* `next_invoice_estimate`:This is returned when an immediate invoice is not generated. It contains the details of the invoice that will be generated on the next billing date of the subscription.
* `unbilled_charge_estimates`: This contains the details of charges that have not been invoiced. This is returned only if the `invoice_immediately` parameter is set to `false`.




 * @summary Estimate for creating a customer and subscription
 */
  public async estimateForCreatingACustomerAndSubscription(
    estimateForCreatingACustomerAndSubscriptionBody: EstimateForCreatingACustomerAndSubscriptionBody,
    headers?: EstimateForCreatingACustomerAndSubscriptionHeaders,
  ): Promise<AxiosResponse<EstimateForCreatingACustomerAndSubscription200>> {
    return this.axios.post(`/estimates/create_subscription_for_items`, {
      headers,
      json: estimateForCreatingACustomerAndSubscriptionBody,
    });
  }

  /**
 * This endpoint creates an invoice estimate for non-recurring items.

 * @summary Create invoice for items estimate
 */
  public async createInvoiceForItemsEstimate(
    createInvoiceForItemsEstimateBody: CreateInvoiceForItemsEstimateBody,
    headers?: CreateInvoiceForItemsEstimateHeaders,
  ): Promise<AxiosResponse<CreateInvoiceForItemsEstimate200>> {
    return this.axios.post(`/estimates/create_invoice_for_items`, {
      headers,
      json: createInvoiceForItemsEstimateBody,
    });
  }

  /**
 * This endpoint generates an estimate for a subscription that is intended to be a gift. The estimate provides details about the gift sender, gift recipient, address details of the recipient, and the type and details of subscription items included in the gift.

 * @summary Gift subscription estimate for items
 */
  public async giftSubscriptionEstimateForItems(
    giftSubscriptionEstimateForItemsBody: GiftSubscriptionEstimateForItemsBody,
    headers?: GiftSubscriptionEstimateForItemsHeaders,
  ): Promise<AxiosResponse<GiftSubscriptionEstimateForItems200>> {
    return this.axios.post(`/estimates/gift_subscription_for_items`, {
      headers,
      json: giftSubscriptionEstimateForItemsBody,
    });
  }

  /**
 * Returns an estimate for updating a subscription.

In the response,

* [subscription_estimate](/docs/api/estimates#subscription_estimate_attributes): The details of the changed subscription such as `status`, next billing date, and so on.
* [invoice_estimate](/docs/api/estimates#invoice_estimate_attributes):The details of the immediate invoice, if it is generated. An immediate invoice is not generated when:
  * `end_of_term` parameter is true
  * `prorate` parameter is `false`
  * No changes are made to the plan item prices or addon item prices in `subscription_items`.
  * For changes such as [quantity downgrades](https://www.chargebee.com/docs/proration.html#proration-mechanism_plan-quantity-downgrade-paid-invoice).
* [next_invoice_estimate](/docs/api/estimates#next_invoice_estimate_attributes):The details of the invoice to be generated later (if any) on the occasion that no immediate invoice has been generated.
* [credit_note_estimates](/docs/api/estimates#credit_note_estimate_attributes):The list of credit notes (if any) generated during this operation.
* [unbilled_charge_estimates](/docs/api/estimates#unbilled_charge_estimate_attributes): The details of charges that have not been invoiced. This is returned only if the `invoice_immediately` parameter is set to `false`.

 * @summary Estimate for updating a subscription
 */
  public async estimateForUpdatingASubscription(
    estimateForUpdatingASubscriptionBody: EstimateForUpdatingASubscriptionBody,
    headers?: EstimateForUpdatingASubscriptionHeaders,
  ): Promise<AxiosResponse<EstimateForUpdatingASubscription200>> {
    return this.axios.post(`/estimates/update_subscription_for_items`, {
      headers,
      json: estimateForUpdatingASubscriptionBody,
    });
  }
}
