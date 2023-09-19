/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Chargebee API
 * OpenAPI spec version: v2 (PC 2.0)
 */
import type { AxiosInstance, AxiosResponse } from "axios";
import type {
  RetrieveAQuoteHeaders,
  RetrieveAQuote200,
  EditCreateSubscriptionQuoteForItemsHeaders,
  EditCreateSubscriptionQuoteForItemsBody,
  EditCreateSubscriptionQuoteForItems200,
  UpdateQuoteStatusHeaders,
  UpdateQuoteStatusBody,
  UpdateQuoteStatus200,
  CreateAQuoteForUpdateSubscriptionItemsHeaders,
  CreateAQuoteForUpdateSubscriptionItemsBody,
  CreateAQuoteForUpdateSubscriptionItems200,
  ListQuoteLineGroupsParams,
  ListQuoteLineGroupsHeaders,
  ListQuoteLineGroups200,
  ExtendExpiryDateHeaders,
  ExtendExpiryDateBody,
  ExtendExpiryDate200,
  EditQuoteForChargeItemsAndChargesHeaders,
  EditQuoteForChargeItemsAndChargesBody,
  EditQuoteForChargeItemsAndCharges200,
  EditUpdateSubscriptionQuoteForItemsHeaders,
  EditUpdateSubscriptionQuoteForItemsBody,
  EditUpdateSubscriptionQuoteForItems200,
  ListQuotesParams,
  ListQuotesHeaders,
  ListQuotes200,
  RetrieveQuoteAsPdfHeaders,
  RetrieveQuoteAsPdfBody,
  RetrieveQuoteAsPdf200,
  ConvertAQuoteHeaders,
  ConvertAQuoteBody,
  ConvertAQuote200,
  CreateAQuoteForChargeAndChargeItemsHeaders,
  CreateAQuoteForChargeAndChargeItemsBody,
  CreateAQuoteForChargeAndChargeItems200,
  DeleteAQuoteHeaders,
  DeleteAQuoteBody,
  DeleteAQuote200,
} from "./chargebeeAPI.schemas";

export class ChargebeeQuotesResource {
  constructor(private readonly axios: AxiosInstance) {}

  /**
 * Retrieves the quotes identified by the 'number' specified in the url.

 * @summary Retrieve a quote
 */
  public async retrieveAQuote(
    quoteId: string,
    headers?: RetrieveAQuoteHeaders,
  ): Promise<AxiosResponse<RetrieveAQuote200>> {
    return this.axios.get(`/quotes/${quoteId}`, {
      headers,
    });
  }

  /**
 * Changes the quote produced for creating a new subscription items

 * @summary Edit create subscription quote for items
 */
  public async editCreateSubscriptionQuoteForItems(
    quoteId: string,
    editCreateSubscriptionQuoteForItemsBody: EditCreateSubscriptionQuoteForItemsBody,
    headers?: EditCreateSubscriptionQuoteForItemsHeaders,
  ): Promise<AxiosResponse<EditCreateSubscriptionQuoteForItems200>> {
    return this.axios.post(
      `/quotes/${quoteId}/edit_create_subscription_quote_for_items`,
      {
        headers,
        json: editCreateSubscriptionQuoteForItemsBody,
      },
    );
  }

  /**
 * Updates the status of the quote. Status can be updated to Accepted, Declined, and Closed.

 * @summary Update quote status
 */
  public async updateQuoteStatus(
    quoteId: string,
    updateQuoteStatusBody: UpdateQuoteStatusBody,
    headers?: UpdateQuoteStatusHeaders,
  ): Promise<AxiosResponse<UpdateQuoteStatus200>> {
    return this.axios.post(`/quotes/${quoteId}/update_status`, {
      headers,
      json: updateQuoteStatusBody,
    });
  }

  /**
 * Create a quote for updating subscription line items.

 * @summary Create a quote for update subscription items
 */
  public async createAQuoteForUpdateSubscriptionItems(
    createAQuoteForUpdateSubscriptionItemsBody: CreateAQuoteForUpdateSubscriptionItemsBody,
    headers?: CreateAQuoteForUpdateSubscriptionItemsHeaders,
  ): Promise<AxiosResponse<CreateAQuoteForUpdateSubscriptionItems200>> {
    return this.axios.post(`/quotes/update_subscription_quote_for_items`, {
      headers,
      json: createAQuoteForUpdateSubscriptionItemsBody,
    });
  }

  /**
 * This API retrieves all the quote line groups and lineitems for a quote.

 * @summary List quote line groups
 */
  public async listQuoteLineGroups(
    quoteId: string,
    params?: ListQuoteLineGroupsParams,
    headers?: ListQuoteLineGroupsHeaders,
  ): Promise<AxiosResponse<ListQuoteLineGroups200>> {
    return this.axios.get(`/quotes/${quoteId}/quote_line_groups`, {
      params,
      headers,
    });
  }

  /**
 * Can be used to extend the expiry date of a quote.

 * @summary Extend expiry date
 */
  public async extendExpiryDate(
    quoteId: string,
    extendExpiryDateBody: ExtendExpiryDateBody,
    headers?: ExtendExpiryDateHeaders,
  ): Promise<AxiosResponse<ExtendExpiryDate200>> {
    return this.axios.post(`/quotes/${quoteId}/extend_expiry_date`, {
      headers,
      json: extendExpiryDateBody,
    });
  }

  /**
 * Changes the quote produced for adding one-time charges and charge items.

 * @summary Edit quote for charge items and charges
 */
  public async editQuoteForChargeItemsAndCharges(
    quoteId: string,
    editQuoteForChargeItemsAndChargesBody: EditQuoteForChargeItemsAndChargesBody,
    headers?: EditQuoteForChargeItemsAndChargesHeaders,
  ): Promise<AxiosResponse<EditQuoteForChargeItemsAndCharges200>> {
    return this.axios.post(
      `/quotes/${quoteId}/edit_for_charge_items_and_charges`,
      {
        headers,
        json: editQuoteForChargeItemsAndChargesBody,
      },
    );
  }

  /**
 * Changes the quote produced for updating the subscription items.

 * @summary Edit update subscription quote for items
 */
  public async editUpdateSubscriptionQuoteForItems(
    quoteId: string,
    editUpdateSubscriptionQuoteForItemsBody: EditUpdateSubscriptionQuoteForItemsBody,
    headers?: EditUpdateSubscriptionQuoteForItemsHeaders,
  ): Promise<AxiosResponse<EditUpdateSubscriptionQuoteForItems200>> {
    return this.axios.post(
      `/quotes/${quoteId}/edit_update_subscription_quote_for_items`,
      {
        headers,
        json: editUpdateSubscriptionQuoteForItemsBody,
      },
    );
  }

  /**
 * List all quotes.

 * @summary List quotes
 */
  public async listQuotes(
    params?: ListQuotesParams,
    headers?: ListQuotesHeaders,
  ): Promise<AxiosResponse<ListQuotes200>> {
    return this.axios.get(`/quotes`, {
      params,
      headers,
    });
  }

  /**
 * Retrieves the quote as a PDF. The returned URL is secure, allows download and expires in 60 minutes.

 * @summary Retrieve Quote as PDF
 */
  public async retrieveQuoteAsPdf(
    quoteId: string,
    retrieveQuoteAsPdfBody: RetrieveQuoteAsPdfBody,
    headers?: RetrieveQuoteAsPdfHeaders,
  ): Promise<AxiosResponse<RetrieveQuoteAsPdf200>> {
    return this.axios.post(`/quotes/${quoteId}/pdf`, {
      headers,
      json: retrieveQuoteAsPdfBody,
    });
  }

  /**
 * This API is to convert a quote to an invoice.

 * @summary Convert a quote
 */
  public async convertAQuote(
    quoteId: string,
    convertAQuoteBody: ConvertAQuoteBody,
    headers?: ConvertAQuoteHeaders,
  ): Promise<AxiosResponse<ConvertAQuote200>> {
    return this.axios.post(`/quotes/${quoteId}/convert`, {
      headers,
      json: convertAQuoteBody,
    });
  }

  /**
 * Creates a quote using charge-items and one-time charges.

 * @summary Create a quote for charge and charge items
 */
  public async createAQuoteForChargeAndChargeItems(
    createAQuoteForChargeAndChargeItemsBody: CreateAQuoteForChargeAndChargeItemsBody,
    headers?: CreateAQuoteForChargeAndChargeItemsHeaders,
  ): Promise<AxiosResponse<CreateAQuoteForChargeAndChargeItems200>> {
    return this.axios.post(`/quotes/create_for_charge_items_and_charges`, {
      headers,
      json: createAQuoteForChargeAndChargeItemsBody,
    });
  }

  /**
 * Delete a quote using this API.

 * @summary Delete a quote
 */
  public async deleteAQuote(
    quoteId: string,
    deleteAQuoteBody: DeleteAQuoteBody,
    headers?: DeleteAQuoteHeaders,
  ): Promise<AxiosResponse<DeleteAQuote200>> {
    return this.axios.post(`/quotes/${quoteId}/delete`, {
      headers,
      json: deleteAQuoteBody,
    });
  }
}
