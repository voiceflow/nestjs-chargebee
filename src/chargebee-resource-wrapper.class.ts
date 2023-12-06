import type { ChargeBee } from "chargebee-typescript";

import type { ChargebeeResourceOptions } from "./chargebee-resource.interface";
import { ItemResource } from "./resources/item-resource";
import { AddonResource } from "./resources/addon-resource";
import { AddressResource } from "./resources/address-resource";
import { AttachedItemResource } from "./resources/attached-item-resource";
import { CardResource } from "./resources/card-resource";
import { CommentResource } from "./resources/comment-resource";
import { CouponResource } from "./resources/coupon-resource";
import { CouponCodeResource } from "./resources/coupon-code-resource";
import { CouponSetResource } from "./resources/coupon-set-resource";
import { CreditNoteResource } from "./resources/credit-note-resource";
import { CustomerResource } from "./resources/customer-resource";
import { DifferentialPriceResource } from "./resources/differential-price-resource";
import { EntitlementOverrideResource } from "./resources/entitlement-override-resource";
import { EstimateResource } from "./resources/estimate-resource";
import { ExportResource } from "./resources/export-resource";
import { FeatureResource } from "./resources/feature-resource";
import { GiftResource } from "./resources/gift-resource";
import { HostedPageResource } from "./resources/hosted-page-resource";
import { InAppSubscriptionResource } from "./resources/in-app-subscription-resource";
import { InvoiceResource } from "./resources/invoice-resource";
import { ItemEntitlementResource } from "./resources/item-entitlement-resource";
import { ItemFamilyResource } from "./resources/item-family-resource";
import { ItemPriceResource } from "./resources/item-price-resource";
import { NonSubscriptionResource } from "./resources/non-subscription-resource";
import { OrderResource } from "./resources/order-resource";
import { PaymentIntentResource } from "./resources/payment-intent-resource";
import { PaymentSourceResource } from "./resources/payment-source-resource";
import { PaymentVoucherResource } from "./resources/payment-voucher-resource";
import { PlanResource } from "./resources/plan-resource";
import { PortalSessionResource } from "./resources/portal-session-resource";
import { PromotionalCreditResource } from "./resources/promotional-credit-resource";
import { PurchaseResource } from "./resources/purchase-resource";
import { QuoteResource } from "./resources/quote-resource";
import { ResourceMigrationResource } from "./resources/resource-migration-resource";
import { SiteMigrationDetailResource } from "./resources/site-migration-detail-resource";
import { SubscriptionEntitlementResource } from "./resources/subscription-entitlement-resource";
import { TimeMachineResource } from "./resources/time-machine-resource";
import { TransactionResource } from "./resources/transaction-resource";
import { UnbilledChargeResource } from "./resources/unbilled-charge-resource";
import { UsageResource } from "./resources/usage-resource";
import { VirtualBankAccountResource } from "./resources/virtual-bank-account-resource";
import { SubscriptionResource } from "./resources/subscription-resource";

export class ChargebeeResourceWrapper {
  constructor(
    private readonly client: ChargeBee,
    private readonly options: ChargebeeResourceOptions,
  ) {}

  subscription = new SubscriptionResource(this.client, this.options);
  customer = new CustomerResource(this.client, this.options);
  paymentSource = new PaymentSourceResource(this.client, this.options);
  virtualBankAccount = new VirtualBankAccountResource(
    this.client,
    this.options,
  );
  card = new CardResource(this.client, this.options);
  promotionalCredit = new PromotionalCreditResource(this.client, this.options);
  invoice = new InvoiceResource(this.client, this.options);
  creditNote = new CreditNoteResource(this.client, this.options);
  unbilledCharge = new UnbilledChargeResource(this.client, this.options);
  order = new OrderResource(this.client, this.options);
  gift = new GiftResource(this.client, this.options);
  transaction = new TransactionResource(this.client, this.options);
  hostedPage = new HostedPageResource(this.client, this.options);
  estimate = new EstimateResource(this.client, this.options);
  quote = new QuoteResource(this.client, this.options);
  plan = new PlanResource(this.client, this.options);
  addon = new AddonResource(this.client, this.options);
  coupon = new CouponResource(this.client, this.options);
  couponSet = new CouponSetResource(this.client, this.options);
  couponCode = new CouponCodeResource(this.client, this.options);
  address = new AddressResource(this.client, this.options);
  usage = new UsageResource(this.client, this.options);
  comment = new CommentResource(this.client, this.options);
  portalSession = new PortalSessionResource(this.client, this.options);
  siteMigrationDetail = new SiteMigrationDetailResource(
    this.client,
    this.options,
  );
  resourceMigration = new ResourceMigrationResource(this.client, this.options);
  timeMachine = new TimeMachineResource(this.client, this.options);
  export = new ExportResource(this.client, this.options);
  paymentIntent = new PaymentIntentResource(this.client, this.options);
  itemFamily = new ItemFamilyResource(this.client, this.options);
  item = new ItemResource(this.client, this.options);
  itemPrice = new ItemPriceResource(this.client, this.options);
  attachedItem = new AttachedItemResource(this.client, this.options);
  differentialPrice = new DifferentialPriceResource(this.client, this.options);
  feature = new FeatureResource(this.client, this.options);
  subscriptionEntitlement = new SubscriptionEntitlementResource(
    this.client,
    this.options,
  );
  itemEntitlement = new ItemEntitlementResource(this.client, this.options);
  inAppSubscription = new InAppSubscriptionResource(this.client, this.options);
  nonSubscription = new NonSubscriptionResource(this.client, this.options);
  entitlementOverride = new EntitlementOverrideResource(
    this.client,
    this.options,
  );
  purchase = new PurchaseResource(this.client, this.options);
  paymentVoucher = new PaymentVoucherResource(this.client, this.options);
}
