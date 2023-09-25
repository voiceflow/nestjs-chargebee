import { ChargebeeResource } from "../chargebee-resource.class";
export class QuoteResource extends ChargebeeResource {
  public readonly retrieve = super.request("quote", "retrieve", {
    quote: { optional: false },
  });
  public readonly createSubForCustomerQuote = super.request(
    "quote",
    "create_sub_for_customer_quote",
    { quote: { optional: false } },
  );
  public readonly editCreateSubForCustomerQuote = super.request(
    "quote",
    "edit_create_sub_for_customer_quote",
    { quote: { optional: false } },
  );
  public readonly updateSubscriptionQuote = super.request(
    "quote",
    "update_subscription_quote",
    { quote: { optional: false } },
  );
  public readonly editUpdateSubscriptionQuote = super.request(
    "quote",
    "edit_update_subscription_quote",
    { quote: { optional: false } },
  );
  public readonly createForOnetimeCharges = super.request(
    "quote",
    "create_for_onetime_charges",
    { quote: { optional: false } },
  );
  public readonly editOneTimeQuote = super.request(
    "quote",
    "edit_one_time_quote",
    { quote: { optional: false } },
  );
  public readonly createSubItemsForCustomerQuote = super.request(
    "quote",
    "create_sub_items_for_customer_quote",
    { quote: { optional: false } },
  );
  public readonly editCreateSubCustomerQuoteForItems = super.request(
    "quote",
    "edit_create_sub_customer_quote_for_items",
    { quote: { optional: false } },
  );
  public readonly updateSubscriptionQuoteForItems = super.request(
    "quote",
    "update_subscription_quote_for_items",
    { quote: { optional: false } },
  );
  public readonly editUpdateSubscriptionQuoteForItems = super.request(
    "quote",
    "edit_update_subscription_quote_for_items",
    { quote: { optional: false } },
  );
  public readonly createForChargeItemsAndCharges = super.request(
    "quote",
    "create_for_charge_items_and_charges",
    { quote: { optional: false } },
  );
  public readonly editForChargeItemsAndCharges = super.request(
    "quote",
    "edit_for_charge_items_and_charges",
    { quote: { optional: false } },
  );
  public readonly list = super.listRequest("quote", "list", {
    quote: { optional: false },
  });
  public readonly quoteLineGroupsForQuote = super.listRequest(
    "quote",
    "quote_line_groups_for_quote",
    { quote: { optional: false } },
  );
  public readonly convert = super.request("quote", "convert", {
    quote: { optional: false },
  });
  public readonly updateStatus = super.request("quote", "update_status", {
    quote: { optional: false },
  });
  public readonly extendExpiryDate = super.request(
    "quote",
    "extend_expiry_date",
    { quote: { optional: false } },
  );
  public readonly delete = super.request("quote", "delete", {
    quote: { optional: false },
  });
  public readonly pdf = super.request("quote", "pdf", {
    quote: { optional: false },
  });
}
