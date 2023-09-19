/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Chargebee API
 * OpenAPI spec version: v2 (PC 2.0)
 */
import type { AxiosInstance, AxiosResponse } from "axios";
import type {
  CreateAPurchaseHeaders,
  CreateAPurchaseBody,
  CreateAPurchase200,
  EstimatesForPurchaseHeaders,
  EstimatesForPurchaseBody,
  EstimatesForPurchase200,
} from "./chargebeeAPI.schemas";

export class ChargebeePurchasesResource {
  constructor(private readonly axios: AxiosInstance) {}

  /**
 * Creates a `purchase` resource. A purchase can contain one or more of the following:

* subscriptions (a [subscription](subscriptions) resource consists of item prices such that at least one of the item prices belongs to an [item](items) of `type` `plan`.)
* group of one-time charges (aka [charge item prices](item_prices#types))

When you call this API, the invoices for the subscription(s) and one-time charge(s) are created immediately and not left [unbilled](subscriptions?prod_cat_ver=2#create_subscription_for_items_invoice_immediately).  
**Note**

Providing `shipping_addresses[]` is required when the [Orders feature](https://www.chargebee.com/docs/2.0/orders.html#configuration_step-1-configure-site-wide-settings) has been enabled.

### Specifying `purchase_item` groups {#groups}


When creating a purchase, you must specify the *group* or `index` to which each item price belongs. You can do this by setting the `purchase_items[index]` for each item price. Item prices with the same `purchase_items[index]` belong to the same group.


The grouping of item prices allows you to specify the `discounts[]` applicable for each group and indicate which item prices should be added to any subscriptions you want to create. Groups can be one of two types:

* Subscription groups
* One-time charge groups

The following subsections describe the types of groups in detail.  
**Note**

You can specify up to 10 groups,

* with a recommended subscription group of 5. To increase this limit to a maximum of 8, contact [Chargebee Support](https://support.chargebee.com/support/home).
* with a maximum of 10 one-time charge groups by default.

The total limit for group items for a single purchase is 60.

#### Subscription groups {#subscription}

To create a subscription, specify a *subscription group* . A subscription [group](#groups) is a group of item prices that contains exactly one item price of `type` `plan`. To create multiple subscriptions, provide multiple subscription groups.  
**Note**

A subscription group can have up to 20 non-plan item prices. To increase this limit to a maximum of 60, contact [Chargebee Support](https://support.chargebee.com/support/home).  

#### Custom Fields {#custom-fields}

Purchase API supports custom fields of Subscriptions, use the following format to specify custom fields in Purchase API: **`subscription_info[custom_field]`**.

#### One-time charge groups {#one-time}

A one-time charge [group](#groups) is a group of charge item prices (i.e. item prices belonging to items of `type` `charge`). Charge item prices can be added to subscription groups as well. The charges within and across each one-time group must be unique.  
**Note**

* A one-time charge group can have up to 20 item prices. To increase this limit to a maximum of 60, contact [Chargebee Support](https://support.chargebee.com/support/home).
* A charge item price can only be added to a single one-time charge group. However, it can be part of multiple [subscription groups](#subscription).

### Applying discounts {#discounts}

Discounts, both [manual discounts](discounts) and <coupons>, can be applied to groups by specifying the `discounts[]` array. The following table describes the method of application based on whether `discounts[index][i]` is provided:

|                      |                                                                                                                                                                **`discounts[index][i]` is provided**                                                                                                                                                                 |                                                                                     **`discounts[index][i]` is not provided**                                                                                      |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Coupons**          | * The coupon is applied exclusively to the invoice for group `i`. * The coupon is applied exclusively to the invoice created immediately upon invoking this API. * If group `i` is a [subscription group](#subscription), then the coupon is applied to invoices for subscription renewals based on coupon attributes such as `duration_type` and `max_redemptions`. | * The coupon is applied to all the invoices immediately generated upon invoking this API. * The coupon is not applied to subsequent invoices, such as those generated upon subscription renewal.                   |
| **Manual discounts** | * The manual discount is applied exclusively to the invoice for group `i`. * The manual discount is applied exclusively to the invoice created immediately upon invoking this API. * The manual discount is not applied to subsequent invoices, such as those generated upon subscription renewal.                                                                   | * The manual discount is applied to all the invoices immediately generated upon invoking this API. * The manual discount is not applied to subsequent invoices, such as those generated upon subscription renewal. |


 * @summary Create a purchase
 */
  public async createAPurchase(
    createAPurchaseBody: CreateAPurchaseBody,
    headers?: CreateAPurchaseHeaders,
  ): Promise<AxiosResponse<CreateAPurchase200>> {
    return this.axios.post(`/purchases`, {
      headers,
      json: createAPurchaseBody,
    });
  }

  /**
 * Returns an estimate for creating a `purchase` resource. The operation works exactly like [Create a purchase](purchases#create_a_purchase), except that only an [estimate](estimates) resource is returned without an actual `purchase` resource being created.

 * @summary Estimates for purchase
 */
  public async estimatesForPurchase(
    estimatesForPurchaseBody: EstimatesForPurchaseBody,
    headers?: EstimatesForPurchaseHeaders,
  ): Promise<AxiosResponse<EstimatesForPurchase200>> {
    return this.axios.post(`/purchases/estimate`, {
      headers,
      json: estimatesForPurchaseBody,
    });
  }
}