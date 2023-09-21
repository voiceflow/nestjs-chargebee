import { ChargebeeResource } from "./abstract-resource";
export class CustomerResource extends ChargebeeResource {
  public readonly create = super.request("customer", "create", {
    customer: { optional: false },
    card: { optional: true },
  });
  public readonly list = super.listRequest("customer", "list", {
    customer: { optional: false },
    card: { optional: true },
  });
  public readonly retrieve = super.request("customer", "retrieve", {
    customer: { optional: false },
    card: { optional: true },
  });
  public readonly update = super.request("customer", "update", {
    customer: { optional: false },
    card: { optional: true },
  });
  public readonly updatePaymentMethod = super.request(
    "customer",
    "update_payment_method",
    { customer: { optional: false }, card: { optional: true } },
  );
  public readonly updateBillingInfo = super.request(
    "customer",
    "update_billing_info",
    { customer: { optional: false }, card: { optional: true } },
  );
  public readonly contactsForCustomer = super.listRequest(
    "customer",
    "contacts_for_customer",
    { contact: { optional: false } },
  );
  public readonly assignPaymentRole = super.request(
    "customer",
    "assign_payment_role",
    { customer: { optional: false }, payment_source: { optional: false } },
  );
  public readonly addContact = super.request("customer", "add_contact", {
    customer: { optional: false },
    card: { optional: true },
  });
  public readonly updateContact = super.request("customer", "update_contact", {
    customer: { optional: false },
    card: { optional: true },
  });
  public readonly deleteContact = super.request("customer", "delete_contact", {
    customer: { optional: false },
    card: { optional: true },
  });
  public readonly addPromotionalCredits = super.request(
    "customer",
    "add_promotional_credits",
    { customer: { optional: false }, promotional_credit: { optional: false } },
  );
  public readonly deductPromotionalCredits = super.request(
    "customer",
    "deduct_promotional_credits",
    { customer: { optional: false }, promotional_credit: { optional: false } },
  );
  public readonly setPromotionalCredits = super.request(
    "customer",
    "set_promotional_credits",
    { customer: { optional: false }, promotional_credit: { optional: false } },
  );
  public readonly recordExcessPayment = super.request(
    "customer",
    "record_excess_payment",
    { customer: { optional: false }, transaction: { optional: false } },
  );
  public readonly collectPayment = super.request(
    "customer",
    "collect_payment",
    { customer: { optional: false }, transaction: { optional: false } },
  );
  public readonly delete = super.request("customer", "delete", {
    customer: { optional: false },
    card: { optional: true },
  });
  public readonly move = super.request("customer", "move", {
    resource_migration: { optional: false },
  });
  public readonly changeBillingDate = super.request(
    "customer",
    "change_billing_date",
    { customer: { optional: false } },
  );
  public readonly merge = super.request("customer", "merge", {
    customer: { optional: false },
  });
  public readonly clearPersonalData = super.request(
    "customer",
    "clear_personal_data",
    { customer: { optional: false } },
  );
  public readonly relationships = super.request("customer", "relationships", {
    customer: { optional: false },
  });
  public readonly deleteRelationship = super.request(
    "customer",
    "delete_relationship",
    { customer: { optional: false } },
  );
  public readonly hierarchy = super.request("customer", "hierarchy", {
    hierarchies: { optional: false },
  });
  public readonly updateHierarchySettings = super.request(
    "customer",
    "update_hierarchy_settings",
    { customer: { optional: false } },
  );
}
