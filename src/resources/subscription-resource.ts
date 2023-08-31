import { Subscription } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class SubscriptionResource extends ChargebeeResource {
  public readonly create = super
    .request("subscription", "create")
    .returns({ subscription: Subscription });
  public readonly createForCustomer = super
    .request("subscription", "create_for_customer")
    .returns({ subscription: Subscription });
  public readonly createWithItems = super
    .request("subscription", "create_with_items")
    .returns({ subscription: Subscription });
  public readonly list = super
    .listRequest("subscription", "list")
    .returns({ subscription: Subscription });
  public readonly subscriptionsForCustomer = super
    .listRequest("subscription", "subscriptions_for_customer")
    .returns({ subscription: Subscription });
  public readonly contractTermsForSubscription = super
    .listRequest("subscription", "contract_terms_for_subscription")
    .returns({ subscription: Subscription });
  public readonly listDiscounts = super
    .listRequest("subscription", "list_discounts")
    .returns({ subscription: Subscription });
  public readonly retrieve = super
    .request("subscription", "retrieve")
    .returns({ subscription: Subscription });
  public readonly retrieveWithScheduledChanges = super
    .request("subscription", "retrieve_with_scheduled_changes")
    .returns({ subscription: Subscription });
  public readonly removeScheduledChanges = super
    .request("subscription", "remove_scheduled_changes")
    .returns({ subscription: Subscription });
  public readonly removeScheduledCancellation = super
    .request("subscription", "remove_scheduled_cancellation")
    .returns({ subscription: Subscription });
  public readonly removeCoupons = super
    .request("subscription", "remove_coupons")
    .returns({ subscription: Subscription });
  public readonly update = super
    .request("subscription", "update")
    .returns({ subscription: Subscription });
  public readonly updateForItems = super
    .request("subscription", "update_for_items")
    .returns({ subscription: Subscription });
  public readonly changeTermEnd = super
    .request("subscription", "change_term_end")
    .returns({ subscription: Subscription });
  public readonly reactivate = super
    .request("subscription", "reactivate")
    .returns({ subscription: Subscription });
  public readonly addChargeAtTermEnd = super
    .request("subscription", "add_charge_at_term_end")
    .returns({ subscription: Subscription });
  public readonly chargeAddonAtTermEnd = super
    .request("subscription", "charge_addon_at_term_end")
    .returns({ subscription: Subscription });
  public readonly chargeFutureRenewals = super
    .request("subscription", "charge_future_renewals")
    .returns({ subscription: Subscription });
  public readonly editAdvanceInvoiceSchedule = super
    .request("subscription", "edit_advance_invoice_schedule")
    .returns({ subscription: Subscription });
  public readonly retrieveAdvanceInvoiceSchedule = super
    .request("subscription", "retrieve_advance_invoice_schedule")
    .returns({ subscription: Subscription });
  public readonly removeAdvanceInvoiceSchedule = super
    .request("subscription", "remove_advance_invoice_schedule")
    .returns({ subscription: Subscription });
  public readonly regenerateInvoice = super
    .request("subscription", "regenerate_invoice")
    .returns({ subscription: Subscription });
  public readonly importSubscription = super
    .request("subscription", "import_subscription")
    .returns({ subscription: Subscription });
  public readonly importForCustomer = super
    .request("subscription", "import_for_customer")
    .returns({ subscription: Subscription });
  public readonly importContractTerm = super
    .request("subscription", "import_contract_term")
    .returns({ subscription: Subscription });
  public readonly importUnbilledCharges = super
    .request("subscription", "import_unbilled_charges")
    .returns({ subscription: Subscription });
  public readonly importForItems = super
    .request("subscription", "import_for_items")
    .returns({ subscription: Subscription });
  public readonly overrideBillingProfile = super
    .request("subscription", "override_billing_profile")
    .returns({ subscription: Subscription });
  public readonly delete = super
    .request("subscription", "delete")
    .returns({ subscription: Subscription });
  public readonly pause = super
    .request("subscription", "pause")
    .returns({ subscription: Subscription });
  public readonly cancel = super
    .request("subscription", "cancel")
    .returns({ subscription: Subscription });
  public readonly cancelForItems = super
    .request("subscription", "cancel_for_items")
    .returns({ subscription: Subscription });
  public readonly resume = super
    .request("subscription", "resume")
    .returns({ subscription: Subscription });
  public readonly removeScheduledPause = super
    .request("subscription", "remove_scheduled_pause")
    .returns({ subscription: Subscription });
  public readonly removeScheduledResumption = super
    .request("subscription", "remove_scheduled_resumption")
    .returns({ subscription: Subscription });
}
