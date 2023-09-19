/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Chargebee API
 * OpenAPI spec version: v2 (PC 2.0)
 */
import type { AxiosInstance, AxiosResponse } from "axios";
import type {
  CheckoutChargeItemsAndOneTimeChargesHeaders,
  CheckoutChargeItemsAndOneTimeChargesBody,
  CheckoutChargeItemsAndOneTimeCharges200,
  UpdatePaymentMethodHeaders,
  UpdatePaymentMethodBody,
  UpdatePaymentMethod200,
  ExtendSubscriptionHeaders,
  ExtendSubscriptionBody,
  ExtendSubscription200,
  NotifyAnEventHeaders,
  NotifyAnEventBody,
  NotifyAnEvent200,
  CheckoutGiftSubscriptionForItemsHeaders,
  CheckoutGiftSubscriptionForItemsBody,
  CheckoutGiftSubscriptionForItems200,
  ListHostedPagesParams,
  ListHostedPagesHeaders,
  ListHostedPages200,
  CreateAHostedPageToViewBoletoVouchersHeaders,
  CreateAHostedPageToViewBoletoVouchersBody,
  CreateAHostedPageToViewBoletoVouchers200,
  CollectNowHeaders,
  CollectNowBody,
  CollectNow200,
  AcceptAQuoteHeaders,
  AcceptAQuoteBody,
  AcceptAQuote200,
  CreateCheckoutForANewSubscriptionHeaders,
  CreateCheckoutForANewSubscriptionBody,
  CreateCheckoutForANewSubscription200,
  ClaimAGiftSubscriptionHeaders,
  ClaimAGiftSubscriptionBody,
  ClaimAGiftSubscription200,
  CreateCheckoutToUpdateASubscriptionHeaders,
  CreateCheckoutToUpdateASubscriptionBody,
  CreateCheckoutToUpdateASubscription200,
  CreateAPreCancelHostedPageHeaders,
  CreateAPreCancelHostedPageBody,
  CreateAPreCancelHostedPage200,
  AcknowledgeAHostedPageHeaders,
  AcknowledgeAHostedPage200,
  RetrieveDirectDebitAgreementPdfHeaders,
  RetrieveDirectDebitAgreementPdfBody,
  RetrieveDirectDebitAgreementPdf200,
  RetrieveAHostedPageHeaders,
  RetrieveAHostedPage200,
  ManagePaymentSourcesHeaders,
  ManagePaymentSourcesBody,
  ManagePaymentSources200,
} from "./chargebeeAPI.schemas";

export class ChargebeeHostedPagesResource {
  constructor(private readonly axios: AxiosInstance) {}

  /**
 * Create a Chargebee hosted page to accept payment details from a customer and checkout [charge-items](./items?prod_cat_ver=2) and [one-time charges](./invoices?prod_cat_ver=2#create_invoice_for_items_and_one-time_charges).

The following steps describe how best to use this API:

1. Call this endpoint, providing [item prices](./item_prices?prod_cat_ver=2), [charges](./items?prod_cat_ver=2), [coupons](./coupons?prod_cat_ver=2) and a host of other details such as billing and shipping addresses of the customer, to be prefilled on the checkout page.
2. Send the customer to the Checkout `url` received in the response.
3. Once they complete checkout, the set of charge-items and one-time charges are automatically invoiced against the respective `customer` record in Chargebee, and they are redirected to the `redirect_url` with the `id` and `state` attributes passed as query string parameters.
4. [Retrieve the hosted page](./hosted_pages?prod_cat_ver=2#retrieve_a_hosted_page) at this stage to get the invoice details.

#### Customer resource lookup and creation {#customer_lookup1}

When [customer[id]](/docs/api/hosted_pages#checkout_charge_items_and_one_time_charges_customer_id) is provided for this operation, it is looked up by Chargebee, and if found, the hosted_page is created for it. If not found, a new customer resource is created with the ID provided, and the hosted_page is created.

##### Multiple business entities

If multiple [business entities](/docs/api/advanced-features#mbe) are created for the site, the customer resource lookup and creation happen within the [context](/docs/api/advanced-features#mbe-context) of the business entity [specified](/docs/api/advanced-features#mbe-header-main) in this API call. If no business entity is specified, the customer resource lookup is performed within the [site context](/docs/api/advanced-features#mbe-context) , and if not found, the resource is created for the [default business entity](/docs/api/advanced-features#mbe-default-be) of the site.

 * @summary Checkout charge-items and one-time charges
 */
  public async checkoutChargeItemsAndOneTimeCharges(
    checkoutChargeItemsAndOneTimeChargesBody: CheckoutChargeItemsAndOneTimeChargesBody,
    headers?: CheckoutChargeItemsAndOneTimeChargesHeaders,
  ): Promise<AxiosResponse<CheckoutChargeItemsAndOneTimeCharges200>> {
    return this.axios.post(`/hosted_pages/checkout_one_time_for_items`, {
      headers,
      json: checkoutChargeItemsAndOneTimeChargesBody,
    });
  }

  /**
 * **Note:** If you're using [In-App Checkout](https://www.chargebee.com/docs/2.0/checkout.html), use [Manage Payment Sources API](/docs/api/hosted_pages#manage_payment_sources) to request your customers to update their payment method details or change their payment method.

Using this API, you can request your customers to update their payment method details or change their payment method. This is used in scenarios like customers updating their payment methods before the end of trial or customers switching among payment methods.

When this API is invoked, it returns a hosted page URL. When the customers are directed to this URL, they will be able to change/update their payment methods.

Depending on the payment methods (Card, PayPal Express Checkout, Amazon Payments) that you offer your customers, they will find options to switch among the various methods of payment.
**Note:**

* If the card\[gateway\] parameter is passed, and the customer chooses Card as a payment method, then the card details are stored in the gateway which is passed. However, if the card\[gateway\] parameter is passed and the customer chooses PayPal Express Checkout/Amazon Payments as a payment method, the gateway passed will be ignored.
* The option of embedding into an iframe is not supported for PayPal Express Checkout and Amazon Payments as customers are redirected to the respective website pages. Hence if you have PayPal Express Checkout/Amazon Payments configured and pass the parameter embed=true, this will result in an unsuccessful API request. Also, if you have all the three payment methods (Card, Paypal Express Checkout and Amazon Payments) configured and pass the parameter embed=true, the returned hosted page URL will show only Card Payment as a payment method.

 * @summary Update payment method
 */
  public async updatePaymentMethod(
    updatePaymentMethodBody: UpdatePaymentMethodBody,
    headers?: UpdatePaymentMethodHeaders,
  ): Promise<AxiosResponse<UpdatePaymentMethod200>> {
    return this.axios.post(`/hosted_pages/update_payment_method`, {
      headers,
      json: updatePaymentMethodBody,
    });
  }

  /**
 * This API generates a hosted page URL to extend the billing cycle of a subscription.

 * @summary Extend Subscription
 */
  public async extendSubscription(
    extendSubscriptionBody: ExtendSubscriptionBody,
    headers?: ExtendSubscriptionHeaders,
  ): Promise<AxiosResponse<ExtendSubscription200>> {
    return this.axios.post(`/hosted_pages/extend_subscription`, {
      headers,
      json: extendSubscriptionBody,
    });
  }

  /**
 * Use this API to notify Chargebee about important events that occur on your web pages, such as subscription cancellations. An event contains data about affected resources and additional details such as when the change occurred.

 * @summary Notify an event
 */
  public async notifyAnEvent(
    notifyAnEventBody: NotifyAnEventBody,
    headers?: NotifyAnEventHeaders,
  ): Promise<AxiosResponse<NotifyAnEvent200>> {
    return this.axios.post(`/hosted_pages/events`, {
      headers,
      json: notifyAnEventBody,
    });
  }

  /**
 * Creates a hosted page for a customer (called the gifter) to gift a subscription to another customer (called the receiver).

#### Gifter customer resource lookup and creation {#gifter_lookup}

When [gifter[customer_id]](/docs/api/hosted_pages#checkout_gift_subscription_for_items_gifter_customer_id) is provided, it is looked up in Chargebee when the gifter completes the hosted page checkout. If not found, a new customer resource is created with this ID.

##### Multiple business entities

If multiple [business entities](/docs/api/advanced-features?prod_cat_ver=2#mbe) are created for the site, the lookup and creation of the gifter customer resource happen within the [context](/docs/api/advanced-features#mbe-context) of the business entity specified in this API call. If no business entity is [specified](/docs/api/advanced-features#mbe-header-main), the customer resource lookup is performed within the [site context](/docs/api/advanced-features#mbe-context), and if not found, the resource is created for the [default business entity](/docs/api/advanced-features#mbe-default-be) of the site.

#### Gift receiver customer resource lookup and creation {#receiver_lookup}

Once the gifter checks out using the hosted page returned by this endpoint, Chargebee checks if a customer resource with the receiver's email address exists. The first such customer record is considered the receiver's customer resource. A new customer resource is created for the receiver if none are found.

##### Multiple business entities

If multiple [business entities](/docs/api/advanced-features?prod_cat_ver=2#mbe) are created for the site, the lookup and creation of the gift receiver's customer resource happen within the [context](/docs/api/advanced-features#mbe-context) of the business entity of the gifter

 * @summary Checkout Gift subscription for Items
 */
  public async checkoutGiftSubscriptionForItems(
    checkoutGiftSubscriptionForItemsBody: CheckoutGiftSubscriptionForItemsBody,
    headers?: CheckoutGiftSubscriptionForItemsHeaders,
  ): Promise<AxiosResponse<CheckoutGiftSubscriptionForItems200>> {
    return this.axios.post(`/hosted_pages/checkout_gift_for_items`, {
      headers,
      json: checkoutGiftSubscriptionForItemsBody,
    });
  }

  /**
 * This API retrieves the list of hosted page resources.

 * @summary List hosted pages
 */
  public async listHostedPages(
    params?: ListHostedPagesParams,
    headers?: ListHostedPagesHeaders,
  ): Promise<AxiosResponse<ListHostedPages200>> {
    return this.axios.get(`/hosted_pages`, {
      params,
      headers,
    });
  }

  /**
 * Creates a `hosted_page` resource of type, `view_voucher`. When your end customers choose the Boleto payment method, you can generate a voucher for their pending invoice. Using this API, you can create a voucher_detail hosted page for your customers and email them a link to this hosted page. Your customers can review the voucher details on the page by clicking the link in the email.

 * @summary Create a hosted page to view Boleto vouchers
 */
  public async createAHostedPageToViewBoletoVouchers(
    createAHostedPageToViewBoletoVouchersBody: CreateAHostedPageToViewBoletoVouchersBody,
    headers?: CreateAHostedPageToViewBoletoVouchersHeaders,
  ): Promise<AxiosResponse<CreateAHostedPageToViewBoletoVouchers200>> {
    return this.axios.post(`/hosted_pages/view_voucher`, {
      headers,
      json: createAHostedPageToViewBoletoVouchersBody,
    });
  }

  /**
 * This API generates a hosted page URL to collect due payments for the customer.

 * @summary Collect Now
 */
  public async collectNow(
    collectNowBody: CollectNowBody,
    headers?: CollectNowHeaders,
  ): Promise<AxiosResponse<CollectNow200>> {
    return this.axios.post(`/hosted_pages/collect_now`, {
      headers,
      json: collectNowBody,
    });
  }

  /**
 * This API generates a hosted page URL for the customer to accept a quote. If the hosted page URL has expired, a new URL will be generated automatically.

 * @summary Accept a quote
 */
  public async acceptAQuote(
    acceptAQuoteBody: AcceptAQuoteBody,
    headers?: AcceptAQuoteHeaders,
  ): Promise<AxiosResponse<AcceptAQuote200>> {
    return this.axios.post(`/hosted_pages/accept_quote`, {
      headers,
      json: acceptAQuoteBody,
    });
  }

  /**
 * Create a Chargebee hosted page to accept payment details from a customer and checkout a new subscription.

The following steps describe how best to use this API:

1. Call this endpoint, providing [item prices](./item_prices?prod_cat_ver=2), [coupons](./coupons?prod_cat_ver=2) and a host of other details such as billing and shipping addresses to be prefilled for the customer on the checkout page.
2. Send the customer to the Checkout `url` received in the response.
3. Once they complete checkout, a new subscription is automatically created and the customer is redirected to the `redirect_url` with the `id` and `state` attributes passed as query string parameters.  
   Although the customer will be redirected to the `redirect_url` after successful checkout, we do not recommend relying on it for completing critical post-checkout actions. This is because redirection may not happen due to unforeseen reasons. Chargebee recommends listening to appropriate webhooks such as [subscription_created](./events#subscription_created) or [invoice_generated](./events#invoice_generated) to verify a successful checkout.
4. [Retrieve the hosted page](./hosted_pages?prod_cat_ver=2#retrieve_a_hosted_page) at this stage to get the subscription and invoice details.



#### Customer resource lookup and creation {#customer_lookup2}

When the [customer[id]](/docs/api/hosted_pages#create_checkout_for_a_new_subscription_customer_id) parameter is provided and if a customer resource with the ID is found to be already created in Chargebee, the subscription is created under that customer resource. If not found, then a new customer resource is created with the ID provided and the subscription is created under it.

##### Multiple business entities

If multiple [business entities](/docs/api/advanced-features?prod_cat_ver=2#mbe) are created for the site, the customer resource lookup and creation happen within the [context](/docs/api/advanced-features#mbe-context) of the business entity [specified](/docs/api/advanced-features#mbe-header-main) in this API call. If no business entity is specified, the customer resource lookup is performed within the [site context](/docs/api/advanced-features#mbe-context), and if not found, the resource is created for the [default business entity](/docs/api/advanced-features#mbe-default-be) of the site.

 * @summary Create checkout for a new subscription
 */
  public async createCheckoutForANewSubscription(
    createCheckoutForANewSubscriptionBody: CreateCheckoutForANewSubscriptionBody,
    headers?: CreateCheckoutForANewSubscriptionHeaders,
  ): Promise<AxiosResponse<CreateCheckoutForANewSubscription200>> {
    return this.axios.post(`/hosted_pages/checkout_new_for_items`, {
      headers,
      json: createCheckoutForANewSubscriptionBody,
    });
  }

  /**
 * This API generates a hosted page URL to claim a gifted subscription.

 * @summary Claim a Gift subscription
 */
  public async claimAGiftSubscription(
    claimAGiftSubscriptionBody: ClaimAGiftSubscriptionBody,
    headers?: ClaimAGiftSubscriptionHeaders,
  ): Promise<AxiosResponse<ClaimAGiftSubscription200>> {
    return this.axios.post(`/hosted_pages/claim_gift`, {
      headers,
      json: claimAGiftSubscriptionBody,
    });
  }

  /**
 * Create a Chargebee hosted page to accept payment details from a customer and checkout to update the subscription.

The following steps describe how best to use this API:

1. Provide [item prices](./item_prices?prod_cat_ver=2), [coupons](./coupons?prod_cat_ver=2) and a host of other details such as billing and shipping addresses to be prefilled for the customer on the checkout page.
2. Send the customer to the Checkout `url` received in the response. They can now add a payment method or use an existing one, to complete the checkout.
3. The subscription is updated and the customer is redirected to the `redirect_url` with the `id` and `state` attributes passed as query string parameters.  
   Although the customer will be redirected to the `redirect_url` after successful checkout, we do not recommend relying on it for completing critical post-checkout actions. This is because redirection may not happen due to unforeseen reasons. Chargebee recommends listening to appropriate webhooks such as [subscription_created](./events#subscription_created) or [invoice_generated](./events#invoice_generated) to verify a successful checkout.
4. [Retrieve the hosted page](./hosted_pages?prod_cat_ver=2#retrieve_a_hosted_page) at this stage to get the subscription and invoice details.




 * @summary Create checkout to update a subscription
 */
  public async createCheckoutToUpdateASubscription(
    createCheckoutToUpdateASubscriptionBody: CreateCheckoutToUpdateASubscriptionBody,
    headers?: CreateCheckoutToUpdateASubscriptionHeaders,
  ): Promise<AxiosResponse<CreateCheckoutToUpdateASubscription200>> {
    return this.axios.post(`/hosted_pages/checkout_existing_for_items`, {
      headers,
      json: createCheckoutToUpdateASubscriptionBody,
    });
  }

  /**
 * Creates a `hosted_page` resource of `type` `pre_cancel`. Route canceling users to this page to provide them a retention experience and start saving revenue.  
The hosted page is created in accordance with the retention experience [configured in the Chargebee Retention app](https://help.brightback.com/article/239-steps-to-get-brightback-ready-to-launch-for-chargebee-billing-merchants), along with the data provided as input to this endpoint. Call the endpoint before your customer clicks the **Cancel** button, and when they do, route them to the [url](https://apidocs.chargebee.com/docs/api/hosted_pages#hosted_page_url) in the endpoint response.

 * @summary Create a pre-cancel hosted page
 */
  public async createAPreCancelHostedPage(
    createAPreCancelHostedPageBody: CreateAPreCancelHostedPageBody,
    headers?: CreateAPreCancelHostedPageHeaders,
  ): Promise<AxiosResponse<CreateAPreCancelHostedPage200>> {
    return this.axios.post(`/hosted_pages/pre_cancel`, {
      headers,
      json: createAPreCancelHostedPageBody,
    });
  }

  /**
 * When a hosted page is successfully completed by the user and processed by Chargebee, its [`state`](hosted_pages#hosted_page_state) is automatically changed to `succeeded`. Acknowledging a hosted page confirms that you have moved the customer details from Chargebee into your system and are ready to fulfill it. This API is used to acknowledge the hosted page in `succeeded` state and change its state to `acknowledged`.  

**Note:** The hosted page status must be succeeded for this API call to be allowed.

 * @summary Acknowledge a hosted page
 */
  public async acknowledgeAHostedPage(
    hostedPageId: string,
    headers?: AcknowledgeAHostedPageHeaders,
  ): Promise<AxiosResponse<AcknowledgeAHostedPage200>> {
    return this.axios.post(`/hosted_pages/${hostedPageId}/acknowledge`, {
      headers,
    });
  }

  /**
 * This is applicable only for Direct Debit via SEPA, Bacs, Bg Autogiro, BECS (for both Australia and New Zealand) and PAD. For Direct Debit, the customer needs to accept an agreement that allows the merchant to debit their bank account. This agreement PDF allows you to easily display scheme-rules compliant Direct Debit mandates to your customers.

This API retrieves the redirect link to the corresponding agreement for customers. The agreement PDF can be your "Thank You" page or sent by email to customers. Communicating this PDF to your customers is mandatory.

Customer locale is used to generate the PDF in the required language. If a customer language is not supported, the PDF is generated in English. Checkout the [list of languages](https://developer.gocardless.com/api-reference/#mandate-pdfs-create-a-mandate-pdf) supported by GoCardless.

 * @summary Retrieve Direct Debit Agreement PDF
 */
  public async retrieveDirectDebitAgreementPdf(
    retrieveDirectDebitAgreementPdfBody: RetrieveDirectDebitAgreementPdfBody,
    headers?: RetrieveDirectDebitAgreementPdfHeaders,
  ): Promise<AxiosResponse<RetrieveDirectDebitAgreementPdf200>> {
    return this.axios.post(`/hosted_pages/retrieve_agreement_pdf`, {
      headers,
      json: retrieveDirectDebitAgreementPdfBody,
    });
  }

  /**
 * When you retrieve a hosted page whose `status` is `successful`, the `content` attribute has the following objects based on the `type` of the hosted page.

|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **`type` of hosted page** | **`content` attribute constituents**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `checkout_new`            | * `customer`: the object representing the details of the [Customer](/docs/api/customers#customer_attributes) for whom the subscription was created. * `subscription`: the new Subscription object created. * `card`: the [Card](/docs/api/cards#card_attributes) object if the [payment method](/docs/api/customers#customer_payment_method) `type` used was `card`. * `invoice`: the Invoice object, if an invoice was generated.                                                                                                                                                            |
| `checkout_existing`       | * `customer`: the object representing the details of the [Customer](/docs/api/customers#customer_attributes) whose subscription was changed. * `subscription`: the updated Subscription object created. * `card`: the [Card](/docs/api/cards#card_attributes) object if the [payment method](/docs/api/customers#customer_payment_method) `type` used was `card`. * `invoice`: the Invoice object, if an invoice was generated for the subscription change.                                                                                                                                   |
| `update_payment_method`   | * `customer`: the object representing the details of the [Customer](/docs/api/customers#customer_attributes) whose subscription was changed. * `card`: the [Card](/docs/api/cards#card_attributes) object if the new [payment method](/docs/api/customers#customer_payment_method) added was of `type` `card`.                                                                                                                                                                                                                                                                                |
| `pre_cancel`              | `retention`: Use the `bypass` flag in this object to route the cancellation flow to the merchants' portal or the Chargebee Retention. * If `bypass` flag is `true`, you should route the end-customers to your native cancellation flow. * If the `bypass` flag is `false`, you should route the end-customers to the hosted page URL. **Note:** Retention is currently in `beta`. To enable Retention, [Contact Support.](https://support.chargebee.com/support/home)                                                                                                                        |
| `collect_now`             | * `transactions`: this object should contain a list of [transactions](/docs/api/transactions#transaction_attributes) triggered from the `collect_now` hosted page. Each transaction in the list should be represented as an array that includes relevant information about the transaction, such as transaction ID, customer ID, amount, currency, payment method, and any other relevant details. * `customer`: this object should contain the customer record associated with the transaction. The key, `customer_id` is used to link the transaction to the corresponding customer record. |


 * @summary Retrieve a hosted page
 */
  public async retrieveAHostedPage(
    hostedPageId: string,
    headers?: RetrieveAHostedPageHeaders,
  ): Promise<AxiosResponse<RetrieveAHostedPage200>> {
    return this.axios.get(`/hosted_pages/${hostedPageId}`, {
      headers,
    });
  }

  /**
 * This API generates a hosted page URL to add new or update existing payment sources for the customer.

 * @summary Manage Payment Sources
 */
  public async managePaymentSources(
    managePaymentSourcesBody: ManagePaymentSourcesBody,
    headers?: ManagePaymentSourcesHeaders,
  ): Promise<AxiosResponse<ManagePaymentSources200>> {
    return this.axios.post(`/hosted_pages/manage_payment_sources`, {
      headers,
      json: managePaymentSourcesBody,
    });
  }
}