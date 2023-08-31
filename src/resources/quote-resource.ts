import { Quote } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class QuoteResource extends ChargebeeResource {
  public readonly retrieve = super
    .request("quote", "retrieve")
    .returns<{ quote: Quote }>();
  public readonly createSubForCustomerQuote = super
    .request("quote", "create_sub_for_customer_quote")
    .returns<{ quote: Quote }>();
  public readonly editCreateSubForCustomerQuote = super
    .request("quote", "edit_create_sub_for_customer_quote")
    .returns<{ quote: Quote }>();
  public readonly updateSubscriptionQuote = super
    .request("quote", "update_subscription_quote")
    .returns<{ quote: Quote }>();
  public readonly editUpdateSubscriptionQuote = super
    .request("quote", "edit_update_subscription_quote")
    .returns<{ quote: Quote }>();
  public readonly createForOnetimeCharges = super
    .request("quote", "create_for_onetime_charges")
    .returns<{ quote: Quote }>();
  public readonly editOneTimeQuote = super
    .request("quote", "edit_one_time_quote")
    .returns<{ quote: Quote }>();
  public readonly createSubItemsForCustomerQuote = super
    .request("quote", "create_sub_items_for_customer_quote")
    .returns<{ quote: Quote }>();
  public readonly editCreateSubCustomerQuoteForItems = super
    .request("quote", "edit_create_sub_customer_quote_for_items")
    .returns<{ quote: Quote }>();
  public readonly updateSubscriptionQuoteForItems = super
    .request("quote", "update_subscription_quote_for_items")
    .returns<{ quote: Quote }>();
  public readonly editUpdateSubscriptionQuoteForItems = super
    .request("quote", "edit_update_subscription_quote_for_items")
    .returns<{ quote: Quote }>();
  public readonly createForChargeItemsAndCharges = super
    .request("quote", "create_for_charge_items_and_charges")
    .returns<{ quote: Quote }>();
  public readonly editForChargeItemsAndCharges = super
    .request("quote", "edit_for_charge_items_and_charges")
    .returns<{ quote: Quote }>();
  public readonly list = super
    .listRequest("quote", "list")
    .returns<{ quote: Quote }>();
  public readonly quoteLineGroupsForQuote = super
    .listRequest("quote", "quote_line_groups_for_quote")
    .returns<{ quote: Quote }>();
  public readonly convert = super
    .request("quote", "convert")
    .returns<{ quote: Quote }>();
  public readonly updateStatus = super
    .request("quote", "update_status")
    .returns<{ quote: Quote }>();
  public readonly extendExpiryDate = super
    .request("quote", "extend_expiry_date")
    .returns<{ quote: Quote }>();
  public readonly delete = super
    .request("quote", "delete")
    .returns<{ quote: Quote }>();
  public readonly pdf = super
    .request("quote", "pdf")
    .returns<{ quote: Quote }>();
}
