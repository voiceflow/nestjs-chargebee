import {
  Card,
  Contact,
  Customer,
  PaymentSource,
} from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class CustomerResource extends ChargebeeResource {
  public readonly create = super
    .request("customer", "create")
    .returns({ customer: Customer });
  public readonly list = super
    .listRequest("customer", "list")
    .returns({ customer: Customer });
  public readonly retrieve = super
    .request("customer", "retrieve")
    .returns({ customer: Customer });
  public readonly update = super
    .request("customer", "update")
    .returns({ customer: Customer });
  public readonly updatePaymentMethod = super
    .request("customer", "update_payment_method")
    .returns({ customer: Customer, card: Card });
  public readonly updateBillingInfo = super
    .request("customer", "update_billing_info")
    .returns({ customer: Customer });
  public readonly contactsForCustomer = super
    .listRequest("customer", "contacts_for_customer")
    .returns({ contact: Contact });
  public readonly assignPaymentRole = super
    .request("customer", "assign_payment_role")
    .returns({ customer: Customer, payment_source: PaymentSource });
  public readonly addContact = super
    .request("customer", "add_contact")
    .returns({ customer: Customer });
  public readonly updateContact = super
    .request("customer", "update_contact")
    .returns({ customer: Customer });
  public readonly deleteContact = super
    .request("customer", "delete_contact")
    .returns({ customer: Customer });
  public readonly addPromotionalCredits = super
    .request("customer", "add_promotional_credits")
    .returns({ customer: Customer });
  public readonly deductPromotionalCredits = super
    .request("customer", "deduct_promotional_credits")
    .returns({ customer: Customer });
  public readonly setPromotionalCredits = super
    .request("customer", "set_promotional_credits")
    .returns({ customer: Customer });
  public readonly recordExcessPayment = super
    .request("customer", "record_excess_payment")
    .returns({ customer: Customer });
  public readonly collectPayment = super
    .request("customer", "collect_payment")
    .returns({ customer: Customer });
  public readonly delete = super
    .request("customer", "delete")
    .returns({ customer: Customer });
  public readonly move = super
    .request("customer", "move")
    .returns({ customer: Customer });
  public readonly changeBillingDate = super
    .request("customer", "change_billing_date")
    .returns({ customer: Customer });
  public readonly merge = super
    .request("customer", "merge")
    .returns({ customer: Customer });
  public readonly clearPersonalData = super
    .request("customer", "clear_personal_data")
    .returns({ customer: Customer });
  public readonly relationships = super
    .request("customer", "relationships")
    .returns({ customer: Customer });
  public readonly deleteRelationship = super
    .request("customer", "delete_relationship")
    .returns({ customer: Customer });
  public readonly hierarchy = super
    .request("customer", "hierarchy")
    .returns({ customer: Customer });
  public readonly updateHierarchySettings = super
    .request("customer", "update_hierarchy_settings")
    .returns({ customer: Customer });
}
