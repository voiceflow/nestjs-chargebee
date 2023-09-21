import { ChargebeeResource } from "./abstract-resource";
export class SubscriptionResource extends ChargebeeResource {
  public readonly create = super.request(
    "subscription",
    "create",

    {
      subscription: { optional: false },
      customer: { optional: false },
      card: { optional: true },
      invoice: { optional: true },
      unbilled_charges: { optional: true },
    },
  );
  public readonly createForCustomer = super.request(
    "subscription",
    "create_for_customer",
    {
      subscription: { optional: false },
      customer: { optional: false },
      card: { optional: true },
      invoice: { optional: true },
      unbilled_charges: { optional: true },
    },
  );
  public readonly createWithItems = super.request(
    "subscription",
    "create_with_items",
    {
      subscription: { optional: false },
      customer: { optional: false },
      card: { optional: true },
      invoice: { optional: true },
      unbilled_charges: { optional: true },
    },
  );
  public readonly list = super.listRequest("subscription", "list", {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
  });
  public readonly subscriptionsForCustomer = super.listRequest(
    "subscription",
    "subscriptions_for_customer",
    { subscription: { optional: false } },
  );
  public readonly contractTermsForSubscription = super.listRequest(
    "subscription",
    "contract_terms_for_subscription",
    { contract_term: { optional: false } },
  );
  public readonly listDiscounts = super.listRequest(
    "subscription",
    "list_discounts",
    { discount: { optional: false } },
  );
  public readonly retrieve = super.request("subscription", "retrieve", {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
  });
  public readonly retrieveWithScheduledChanges = super.request(
    "subscription",
    "retrieve_with_scheduled_changes",
    {
      subscription: { optional: false },
      customer: { optional: false },
      card: { optional: true },
    },
  );
  public readonly removeScheduledChanges = super.request(
    "subscription",
    "remove_scheduled_changes",
    {
      subscription: { optional: false },
      customer: { optional: false },
      card: { optional: true },
      credit_notes: { optional: true },
    },
  );
  public readonly removeScheduledCancellation = super.request(
    "subscription",
    "remove_scheduled_cancellation",
    {
      subscription: { optional: false },
      customer: { optional: false },
      card: { optional: true },
    },
  );
  public readonly removeCoupons = super.request(
    "subscription",
    "remove_coupons",
    {
      subscription: { optional: false },
      customer: { optional: false },
      card: { optional: true },
    },
  );
  public readonly update = super.request("subscription", "update", {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
    invoice: { optional: true },
    unbilled_charges: { optional: true },
    credit_notes: { optional: true },
  });
  public readonly updateForItems = super.request(
    "subscription",
    "update_for_items",
    {
      subscription: { optional: false },
      customer: { optional: false },
      card: { optional: true },
      invoice: { optional: true },
      unbilled_charges: { optional: true },
      credit_notes: { optional: true },
    },
  );
  public readonly changeTermEnd = super.request(
    "subscription",
    "change_term_end",
    {
      subscription: { optional: false },
      customer: { optional: false },
      card: { optional: true },
      invoice: { optional: true },
      unbilled_charges: { optional: true },
      credit_notes: { optional: true },
    },
  );
  public readonly reactivate = super.request("subscription", "reactivate", {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
    invoice: { optional: true },
    unbilled_charges: { optional: true },
  });
  public readonly addChargeAtTermEnd = super.request(
    "subscription",
    "add_charge_at_term_end",
    { estimate: { optional: false } },
  );
  public readonly chargeAddonAtTermEnd = super.request(
    "subscription",
    "charge_addon_at_term_end",
    { estimate: { optional: false } },
  );
  public readonly chargeFutureRenewals = super.request(
    "subscription",
    "charge_future_renewals",
    {
      subscription: { optional: false },
      customer: { optional: false },
      card: { optional: true },
      invoice: { optional: true },
      advance_invoice_schedules: { optional: true },
    },
  );
  public readonly editAdvanceInvoiceSchedule = super.request(
    "subscription",
    "edit_advance_invoice_schedule",
    { advance_invoice_schedules: { optional: false } },
  );
  public readonly retrieveAdvanceInvoiceSchedule = super.request(
    "subscription",
    "retrieve_advance_invoice_schedule",
    { advance_invoice_schedules: { optional: false } },
  );
  public readonly removeAdvanceInvoiceSchedule = super.request(
    "subscription",
    "remove_advance_invoice_schedule",
    {
      subscription: { optional: false },
      advance_invoice_schedules: { optional: true },
    },
  );
  public readonly regenerateInvoice = super.request(
    "subscription",
    "regenerate_invoice",
    { invoice: { optional: true }, unbilled_charges: { optional: true } },
  );
  public readonly importSubscription = super.request(
    "subscription",
    "import_subscription",
    { subscription: { optional: false } },
  );
  public readonly importForCustomer = super.request(
    "subscription",
    "import_for_customer",
    { subscription: { optional: false } },
  );
  public readonly importContractTerm = super.request(
    "subscription",
    "import_contract_term",
    { contract_term: { optional: false } },
  );
  public readonly importUnbilledCharges = super.request(
    "subscription",
    "import_unbilled_charges",
    { unbilled_charges: { optional: false } },
  );
  public readonly importForItems = super.request(
    "subscription",
    "import_for_items",
    {
      subscription: { optional: false },
      customer: { optional: false },
      card: { optional: true },
      invoice: { optional: true },
    },
  );
  public readonly overrideBillingProfile = super.request(
    "subscription",
    "override_billing_profile",
    { subscription: { optional: false }, payment_source: { optional: true } },
  );
  public readonly delete = super.request("subscription", "delete", {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
  });
  public readonly pause = super.request("subscription", "pause", {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
    invoice: { optional: true },
    unbilled_charges: { optional: true },
    credit_notes: { optional: true },
  });
  public readonly cancel = super.request("subscription", "cancel", {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
    invoice: { optional: true },
    unbilled_charges: { optional: true },
    credit_notes: { optional: true },
  });
  public readonly cancelForItems = super.request(
    "subscription",
    "cancel_for_items",
    {
      subscription: { optional: false },
      customer: { optional: false },
      card: { optional: true },
    },
  );
  public readonly resume = super.request("subscription", "resume", {
    subscription: { optional: false },
    customer: { optional: false },
    card: { optional: true },
    invoice: { optional: true },
    unbilled_charges: { optional: true },
    credit_notes: { optional: true },
  });
  public readonly removeScheduledPause = super.request(
    "subscription",
    "remove_scheduled_pause",
    {
      subscription: { optional: false },
      customer: { optional: false },
      card: { optional: true },
    },
  );
  public readonly removeScheduledResumption = super.request(
    "subscription",
    "remove_scheduled_resumption",
    {
      subscription: { optional: false },
      customer: { optional: false },
      card: { optional: true },
    },
  );
}
