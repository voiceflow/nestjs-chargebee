import { Estimate } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class EstimateResource extends ChargebeeResource {
  public readonly createSubscription = super
    .request("estimate", "create_subscription")
    .returns<{ estimate: Estimate }>();
  public readonly createSubItemEstimate = super
    .request("estimate", "create_sub_item_estimate")
    .returns<{ estimate: Estimate }>();
  public readonly createSubForCustomerEstimate = super
    .request("estimate", "create_sub_for_customer_estimate")
    .returns<{ estimate: Estimate }>();
  public readonly createSubItemForCustomerEstimate = super
    .request("estimate", "create_sub_item_for_customer_estimate")
    .returns<{ estimate: Estimate }>();
  public readonly updateSubscription = super
    .request("estimate", "update_subscription")
    .returns<{ estimate: Estimate }>();
  public readonly updateSubscriptionForItems = super
    .request("estimate", "update_subscription_for_items")
    .returns<{ estimate: Estimate }>();
  public readonly renewalEstimate = super
    .request("estimate", "renewal_estimate")
    .returns<{ estimate: Estimate }>();
  public readonly advanceInvoiceEstimate = super
    .request("estimate", "advance_invoice_estimate")
    .returns<{ estimate: Estimate }>();
  public readonly regenerateInvoiceEstimate = super
    .request("estimate", "regenerate_invoice_estimate")
    .returns<{ estimate: Estimate }>();
  public readonly upcomingInvoicesEstimate = super
    .request("estimate", "upcoming_invoices_estimate")
    .returns<{ estimate: Estimate }>();
  public readonly changeTermEnd = super
    .request("estimate", "change_term_end")
    .returns<{ estimate: Estimate }>();
  public readonly cancelSubscription = super
    .request("estimate", "cancel_subscription")
    .returns<{ estimate: Estimate }>();
  public readonly cancelSubscriptionForItems = super
    .request("estimate", "cancel_subscription_for_items")
    .returns<{ estimate: Estimate }>();
  public readonly pauseSubscription = super
    .request("estimate", "pause_subscription")
    .returns<{ estimate: Estimate }>();
  public readonly resumeSubscription = super
    .request("estimate", "resume_subscription")
    .returns<{ estimate: Estimate }>();
  public readonly giftSubscription = super
    .request("estimate", "gift_subscription")
    .returns<{ estimate: Estimate }>();
  public readonly giftSubscriptionForItems = super
    .request("estimate", "gift_subscription_for_items")
    .returns<{ estimate: Estimate }>();
  public readonly createInvoice = super
    .request("estimate", "create_invoice")
    .returns<{ estimate: Estimate }>();
  public readonly createInvoiceForItems = super
    .request("estimate", "create_invoice_for_items")
    .returns<{ estimate: Estimate }>();
}
