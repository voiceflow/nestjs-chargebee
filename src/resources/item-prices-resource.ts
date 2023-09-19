/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Chargebee API
 * OpenAPI spec version: v2 (PC 2.0)
 */
import type { AxiosInstance, AxiosResponse } from "axios";
import type {
  ListApplicableItemsForAPlanItemPriceParams,
  ListApplicableItemsForAPlanItemPriceHeaders,
  ListApplicableItemsForAPlanItemPrice200,
  RetrieveAnItemPriceHeaders,
  RetrieveAnItemPrice200,
  UpdateAnItemPriceHeaders,
  UpdateAnItemPriceBody,
  UpdateAnItemPrice200,
  DeleteAnItemPriceHeaders,
  DeleteAnItemPrice200,
  ListApplicableItemPricesForAPlanItemPriceParams,
  ListApplicableItemPricesForAPlanItemPriceHeaders,
  ListApplicableItemPricesForAPlanItemPrice200,
  ListItemPricesParams,
  ListItemPricesHeaders,
  ListItemPrices200,
  CreateAnItemPriceHeaders,
  CreateAnItemPriceBody,
  CreateAnItemPrice200,
  CreateADifferentialPriceHeaders,
  CreateADifferentialPriceBody,
  CreateADifferentialPrice200,
} from "./chargebeeAPI.schemas";

export class ChargebeeItemPricesResource {
  constructor(private readonly axios: AxiosInstance) {}

  /**
 * Returns the set of all applicable [addon-items](items?prod_cat_ver=2#addon-items) for a specific [plan-item price](item_prices?prod_cat_ver=2#types). This set consists of all addon-items whose item prices can be applied to a subscription having the plan-item price in it. When determining this set, Chargebee considers the [item_applicability](items?prod_cat_ver=2#item_item_applicability) and [applicable_items](items?prod_cat_ver=2#item_applicable_items) defined for the parent item of the plan-item price.

 * @summary List applicable items for a plan-item price
 */
  public async listApplicableItemsForAPlanItemPrice(
    itemPriceId: string,
    params?: ListApplicableItemsForAPlanItemPriceParams,
    headers?: ListApplicableItemsForAPlanItemPriceHeaders,
  ): Promise<AxiosResponse<ListApplicableItemsForAPlanItemPrice200>> {
    return this.axios.get(`/item_prices/${itemPriceId}/applicable_items`, {
      params,
      headers,
    });
  }

  /**
 * This API retrieves a specific item price using the id.

 * @summary Retrieve an item price
 */
  public async retrieveAnItemPrice(
    itemPriceId: string,
    headers?: RetrieveAnItemPriceHeaders,
  ): Promise<AxiosResponse<RetrieveAnItemPrice200>> {
    return this.axios.get(`/item_prices/${itemPriceId}`, {
      headers,
    });
  }

  /**
 * Updates an item price with the changes specified. Unspecified item price attributes are not modified.

 * @summary Update an item price
 */
  public async updateAnItemPrice(
    itemPriceId: string,
    updateAnItemPriceBody: UpdateAnItemPriceBody,
    headers?: UpdateAnItemPriceHeaders,
  ): Promise<AxiosResponse<UpdateAnItemPrice200>> {
    return this.axios.post(`/item_prices/${itemPriceId}`, {
      headers,
      json: updateAnItemPriceBody,
    });
  }

  /**
 * Deletes an item price, marking its `status` as `deleted`. If it is part of a subscription or invoice, the item price `status` is marked `archived` instead. Once deleted, the `id` and `name` of the item price can be reused to create a new item price.

 * @summary Delete an item price
 */
  public async deleteAnItemPrice(
    itemPriceId: string,
    headers?: DeleteAnItemPriceHeaders,
  ): Promise<AxiosResponse<DeleteAnItemPrice200>> {
    return this.axios.post(`/item_prices/${itemPriceId}/delete`, {
      headers,
    });
  }

  /**
 * Returns the set of all applicable [addon-item](item_prices?prod_cat_ver=2#types) prices for a specific plan-item price. This set consists of all the addon-item prices that can be applied to a subscription having the plan-item price. When determining this set, Chargebee considers the following:

* the [item_applicability](items?prod_cat_ver=2#item_item_applicability) and [applicable_items](items?prod_cat_ver=2#item_applicable_items) defined for the parent item of the plan-item price
* the [compatibility](subscriptions?prod_cat_ver=2#compatibility) of the addon-item prices to the plan-item price

**Note**

If an addon-item price has [differential pricing](differential_prices?prod_cat_ver=2) defined against the parent item of the plan-item price, then the pricing information in the addon-item price object returned, reflects the differential pricing.

 * @summary List applicable item prices for a plan-item price
 */
  public async listApplicableItemPricesForAPlanItemPrice(
    itemPriceId: string,
    params?: ListApplicableItemPricesForAPlanItemPriceParams,
    headers?: ListApplicableItemPricesForAPlanItemPriceHeaders,
  ): Promise<AxiosResponse<ListApplicableItemPricesForAPlanItemPrice200>> {
    return this.axios.get(
      `/item_prices/${itemPriceId}/applicable_item_prices`,
      {
        params,
        headers,
      },
    );
  }

  /**
 * Returns a list of item prices satisfying **all** the conditions specified in the filter parameters below. The list is sorted by the date of creation in descending order.

 * @summary List item prices
 */
  public async listItemPrices(
    params?: ListItemPricesParams,
    headers?: ListItemPricesHeaders,
  ): Promise<AxiosResponse<ListItemPrices200>> {
    return this.axios.get(`/item_prices`, {
      params,
      headers,
    });
  }

  /**
 * This API creates an item price (a price point) for an [item](./items?prod_cat_ver=2).

 * @summary Create an item price
 */
  public async createAnItemPrice(
    createAnItemPriceBody: CreateAnItemPriceBody,
    headers?: CreateAnItemPriceHeaders,
  ): Promise<AxiosResponse<CreateAnItemPrice200>> {
    return this.axios.post(`/item_prices`, {
      headers,
      json: createAnItemPriceBody,
    });
  }

  /**
 * Create a differential price for addon item price, addon item price with tiered pricing, or charge item price.

 * @summary Create a differential price
 */
  public async createADifferentialPrice(
    itemPriceId: string,
    createADifferentialPriceBody: CreateADifferentialPriceBody,
    headers?: CreateADifferentialPriceHeaders,
  ): Promise<AxiosResponse<CreateADifferentialPrice200>> {
    return this.axios.post(`/item_prices/${itemPriceId}/differential_prices`, {
      headers,
      json: createADifferentialPriceBody,
    });
  }
}
