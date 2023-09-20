import { ChargebeeResource } from "./abstract-resource";
export class EstimateResource extends ChargebeeResource {
  public readonly createSubscription = super.request(
    "estimate",
    "create_subscription",
    { estimate: { optional: false } },
  );
  public readonly createSubItemEstimate = super.request(
    "estimate",
    "create_sub_item_estimate",
    { estimate: { optional: false } },
  );
  public readonly createSubForCustomerEstimate = super.request(
    "estimate",
    "create_sub_for_customer_estimate",
    { estimate: { optional: false } },
  );
  public readonly createSubItemForCustomerEstimate = super.request(
    "estimate",
    "create_sub_item_for_customer_estimate",
    { estimate: { optional: false } },
  );
  public readonly updateSubscription = super.request(
    "estimate",
    "update_subscription",
    { estimate: { optional: false } },
  );
  public readonly updateSubscriptionForItems = super.request(
    "estimate",
    "update_subscription_for_items",
    { estimate: { optional: false } },
  );
  public readonly renewalEstimate = super.request(
    "estimate",
    "renewal_estimate",
    { estimate: { optional: false } },
  );
  public readonly advanceInvoiceEstimate = super.request(
    "estimate",
    "advance_invoice_estimate",
    { estimate: { optional: false } },
  );
  public readonly regenerateInvoiceEstimate = super.request(
    "estimate",
    "regenerate_invoice_estimate",
    { estimate: { optional: false } },
  );
  public readonly upcomingInvoicesEstimate = super.request(
    "estimate",
    "upcoming_invoices_estimate",
    { estimate: { optional: false } },
  );
  public readonly changeTermEnd = super.request("estimate", "change_term_end", {
    estimate: { optional: false },
  });
  public readonly cancelSubscription = super.request(
    "estimate",
    "cancel_subscription",
    { estimate: { optional: false } },
  );
  public readonly cancelSubscriptionForItems = super.request(
    "estimate",
    "cancel_subscription_for_items",
    { estimate: { optional: false } },
  );
  public readonly pauseSubscription = super.request(
    "estimate",
    "pause_subscription",
    { estimate: { optional: false } },
  );
  public readonly resumeSubscription = super.request(
    "estimate",
    "resume_subscription",
    { estimate: { optional: false } },
  );
  public readonly giftSubscription = super.request(
    "estimate",
    "gift_subscription",
    { estimate: { optional: false } },
  );
  public readonly giftSubscriptionForItems = super.request(
    "estimate",
    "gift_subscription_for_items",
    { estimate: { optional: false } },
  );
  public readonly createInvoice = super.request("estimate", "create_invoice", {
    estimate: { optional: false },
  });
  public readonly createInvoiceForItems = super.request(
    "estimate",
    "create_invoice_for_items",
    { estimate: { optional: false } },
  );
}
