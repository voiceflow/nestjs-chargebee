import { ChargebeeResource } from "./abstract-resource";
export class SubscriptionResource extends ChargebeeResource {
  public readonly create = super.request("subscription", "create", {
    subscription: { optional: false },
  });
  public readonly createForCustomer = super.request(
    "subscription",
    "create_for_customer",
    { subscription: { optional: false } },
  );
  public readonly createWithItems = super.request(
    "subscription",
    "create_with_items",
    { subscription: { optional: false } },
  );
  public readonly list = super.listRequest("subscription", "list", {
    subscription: { optional: false },
  });
  public readonly subscriptionsForCustomer = super.listRequest(
    "subscription",
    "subscriptions_for_customer",
    { subscription: { optional: false } },
  );
  public readonly contractTermsForSubscription = super.listRequest(
    "subscription",
    "contract_terms_for_subscription",
    { subscription: { optional: false } },
  );
  public readonly listDiscounts = super.listRequest(
    "subscription",
    "list_discounts",
    { subscription: { optional: false } },
  );
  public readonly retrieve = super.request("subscription", "retrieve", {
    subscription: { optional: false },
  });
  public readonly retrieveWithScheduledChanges = super.request(
    "subscription",
    "retrieve_with_scheduled_changes",
    { subscription: { optional: false } },
  );
  public readonly removeScheduledChanges = super.request(
    "subscription",
    "remove_scheduled_changes",
    { subscription: { optional: false } },
  );
  public readonly removeScheduledCancellation = super.request(
    "subscription",
    "remove_scheduled_cancellation",
    { subscription: { optional: false } },
  );
  public readonly removeCoupons = super.request(
    "subscription",
    "remove_coupons",
    { subscription: { optional: false } },
  );
  public readonly update = super.request("subscription", "update", {
    subscription: { optional: false },
  });
  public readonly updateForItems = super.request(
    "subscription",
    "update_for_items",
    { subscription: { optional: false } },
  );
  public readonly changeTermEnd = super.request(
    "subscription",
    "change_term_end",
    { subscription: { optional: false } },
  );
  public readonly reactivate = super.request("subscription", "reactivate", {
    subscription: { optional: false },
  });
  public readonly addChargeAtTermEnd = super.request(
    "subscription",
    "add_charge_at_term_end",
    { subscription: { optional: false } },
  );
  public readonly chargeAddonAtTermEnd = super.request(
    "subscription",
    "charge_addon_at_term_end",
    { subscription: { optional: false } },
  );
  public readonly chargeFutureRenewals = super.request(
    "subscription",
    "charge_future_renewals",
    { subscription: { optional: false } },
  );
  public readonly editAdvanceInvoiceSchedule = super.request(
    "subscription",
    "edit_advance_invoice_schedule",
    { subscription: { optional: false } },
  );
  public readonly retrieveAdvanceInvoiceSchedule = super.request(
    "subscription",
    "retrieve_advance_invoice_schedule",
    { subscription: { optional: false } },
  );
  public readonly removeAdvanceInvoiceSchedule = super.request(
    "subscription",
    "remove_advance_invoice_schedule",
    { subscription: { optional: false } },
  );
  public readonly regenerateInvoice = super.request(
    "subscription",
    "regenerate_invoice",
    { subscription: { optional: false } },
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
    { subscription: { optional: false } },
  );
  public readonly importUnbilledCharges = super.request(
    "subscription",
    "import_unbilled_charges",
    { subscription: { optional: false } },
  );
  public readonly importForItems = super.request(
    "subscription",
    "import_for_items",
    { subscription: { optional: false } },
  );
  public readonly overrideBillingProfile = super.request(
    "subscription",
    "override_billing_profile",
    { subscription: { optional: false } },
  );
  public readonly delete = super.request("subscription", "delete", {
    subscription: { optional: false },
  });
  public readonly pause = super.request("subscription", "pause", {
    subscription: { optional: false },
  });
  public readonly cancel = super.request("subscription", "cancel", {
    subscription: { optional: false },
  });
  public readonly cancelForItems = super.request(
    "subscription",
    "cancel_for_items",
    { subscription: { optional: false } },
  );
  public readonly resume = super.request("subscription", "resume", {
    subscription: { optional: false },
  });
  public readonly removeScheduledPause = super.request(
    "subscription",
    "remove_scheduled_pause",
    { subscription: { optional: false } },
  );
  public readonly removeScheduledResumption = super.request(
    "subscription",
    "remove_scheduled_resumption",
    { subscription: { optional: false } },
  );
}
