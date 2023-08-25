import type { ChargeBee } from "chargebee-typescript";
import { ItemResource } from "./item-resource";
import { AddonResource } from "./addon-resource";
import { AddressResource } from "./address-resource";
import { AttachedItemResource } from "./attached_item-resource";
import { CardResource } from "./card-resource";
import { CommentResource } from "./comment-resource";
import { CouponResource } from "./coupon-resource";
import { CouponCodeResource } from "./coupon_code-resource";
import { CouponSetResource } from "./coupon_set-resource";
import { CreditNoteResource } from "./credit_note-resource";
import { CustomerResource } from "./customer-resource";
import { DifferentialPriceResource } from "./differential_price-resource";
import { EntitlementOverrideResource } from "./entitlement_override-resource";
import { EstimateResource } from "./estimate-resource";
import { ExportResource } from "./export-resource";
import { FeatureResource } from "./feature-resource";
import { GiftResource } from "./gift-resource";
import { HostedPageResource } from "./hosted_page-resource";
import { InAppSubscriptionResource } from "./in_app_subscription-resource";
import { InvoiceResource } from "./invoice-resource";
import { ItemEntitlementResource } from "./item_entitlement-resource";
import { ItemFamilyResource } from "./item_family-resource";
import { ItemPriceResource } from "./item_price-resource";
import { NonSubscriptionResource } from "./non_subscription-resource";
import { OrderResource } from "./order-resource";
import { PaymentIntentResource } from "./payment_intent-resource";
import { PaymentSourceResource } from "./payment_source-resource";
import { PaymentVoucherResource } from "./payment_voucher-resource";
import { PlanResource } from "./plan-resource";
import { PortalSessionResource } from "./portal_session-resource";
import { PromotionalCreditResource } from "./promotional_credit-resource";
import { PurchaseResource } from "./purchase-resource";
import { QuoteResource } from "./quote-resource";
import { ResourceMigrationResource } from "./resource_migration-resource";
import { SiteMigrationDetailResource } from "./site_migration_detail-resource";
import { SubscriptionEntitlementResource } from "./subscription_entitlement-resource";
import { TimeMachineResource } from "./time_machine-resource";
import { TransactionResource } from "./transaction-resource";
import { UnbilledChargeResource } from "./unbilled_charge-resource";
import { UsageResource } from "./usage-resource";
import { VirtualBankAccountResource } from "./virtual_bank_account-resource";
import { SubscriptionResource } from "./subscription-resource";

export class ChargebeeClient {
  constructor(private readonly client: ChargeBee) {}
  subscription = new SubscriptionResource(this.client);
  customer = new CustomerResource(this.client);
  paymentSource = new PaymentSourceResource(this.client);
  virtualBankAccount = new VirtualBankAccountResource(this.client);
  card = new CardResource(this.client);
  promotionalCredit = new PromotionalCreditResource(this.client);
  invoice = new InvoiceResource(this.client);
  creditNote = new CreditNoteResource(this.client);
  unbilledCharge = new UnbilledChargeResource(this.client);
  order = new OrderResource(this.client);
  gift = new GiftResource(this.client);
  transaction = new TransactionResource(this.client);
  hostedPage = new HostedPageResource(this.client);
  estimate = new EstimateResource(this.client);
  quote = new QuoteResource(this.client);
  plan = new PlanResource(this.client);
  addon = new AddonResource(this.client);
  coupon = new CouponResource(this.client);
  couponSet = new CouponSetResource(this.client);
  couponCode = new CouponCodeResource(this.client);
  address = new AddressResource(this.client);
  usage = new UsageResource(this.client);
  comment = new CommentResource(this.client);
  portalSession = new PortalSessionResource(this.client);
  siteMigrationDetail = new SiteMigrationDetailResource(this.client);
  resourceMigration = new ResourceMigrationResource(this.client);
  timeMachine = new TimeMachineResource(this.client);
  export = new ExportResource(this.client);
  paymentIntent = new PaymentIntentResource(this.client);
  itemFamily = new ItemFamilyResource(this.client);
  item = new ItemResource(this.client);
  itemPrice = new ItemPriceResource(this.client);
  attachedItem = new AttachedItemResource(this.client);
  differentialPrice = new DifferentialPriceResource(this.client);
  feature = new FeatureResource(this.client);
  subscriptionEntitlement = new SubscriptionEntitlementResource(this.client);
  itemEntitlement = new ItemEntitlementResource(this.client);
  inAppSubscription = new InAppSubscriptionResource(this.client);
  nonSubscription = new NonSubscriptionResource(this.client);
  entitlementOverride = new EntitlementOverrideResource(this.client);
  purchase = new PurchaseResource(this.client);
  paymentVoucher = new PaymentVoucherResource(this.client);
}
