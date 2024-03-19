import type * as Resources from "chargebee-typescript/lib/resources";
import type { ResourceModelType } from "./resource-model.type";

export type Subscription = ResourceModelType<Resources.Subscription>;
export type SubscriptionSubscriptionItem =
  ResourceModelType<Resources.SubscriptionSubscriptionItem>;
export type SubscriptionItemTier =
  ResourceModelType<Resources.SubscriptionItemTier>;
export type SubscriptionChargedItem =
  ResourceModelType<Resources.SubscriptionChargedItem>;
export type SubscriptionAddon = ResourceModelType<Resources.SubscriptionAddon>;
export type SubscriptionEventBasedAddon =
  ResourceModelType<Resources.SubscriptionEventBasedAddon>;
export type SubscriptionChargedEventBasedAddon =
  ResourceModelType<Resources.SubscriptionChargedEventBasedAddon>;
export type SubscriptionCoupon =
  ResourceModelType<Resources.SubscriptionCoupon>;
export type SubscriptionShippingAddress =
  ResourceModelType<Resources.SubscriptionShippingAddress>;
export type SubscriptionReferralInfo =
  ResourceModelType<Resources.SubscriptionReferralInfo>;
export type SubscriptionContractTerm =
  ResourceModelType<Resources.SubscriptionContractTerm>;
export type SubscriptionDiscount =
  ResourceModelType<Resources.SubscriptionDiscount>;
export type ContractTerm = ResourceModelType<Resources.ContractTerm>;
export type Discount = ResourceModelType<Resources.Discount>;
export type AdvanceInvoiceSchedule =
  ResourceModelType<Resources.AdvanceInvoiceSchedule>;
export type AdvanceInvoiceScheduleFixedIntervalSchedule =
  ResourceModelType<Resources.AdvanceInvoiceScheduleFixedIntervalSchedule>;
export type AdvanceInvoiceScheduleSpecificDatesSchedule =
  ResourceModelType<Resources.AdvanceInvoiceScheduleSpecificDatesSchedule>;
export type Customer = ResourceModelType<Resources.Customer>;
export type CustomerBillingAddress =
  ResourceModelType<Resources.CustomerBillingAddress>;
export type CustomerReferralUrl =
  ResourceModelType<Resources.CustomerReferralUrl>;
export type CustomerContact = ResourceModelType<Resources.CustomerContact>;
export type CustomerPaymentMethod =
  ResourceModelType<Resources.CustomerPaymentMethod>;
export type CustomerBalance = ResourceModelType<Resources.CustomerBalance>;
export type CustomerEntityIdentifier =
  ResourceModelType<Resources.CustomerEntityIdentifier>;
export type CustomerRelationship =
  ResourceModelType<Resources.CustomerRelationship>;
export type CustomerParentAccountAccess =
  ResourceModelType<Resources.CustomerParentAccountAccess>;
export type CustomerChildAccountAccess =
  ResourceModelType<Resources.CustomerChildAccountAccess>;
export type Hierarchy = ResourceModelType<Resources.Hierarchy>;
export type Contact = ResourceModelType<Resources.Contact>;
export type Token = ResourceModelType<Resources.Token>;
export type PaymentSource = ResourceModelType<Resources.PaymentSource>;
export type PaymentSourceCard = ResourceModelType<Resources.PaymentSourceCard>;
export type PaymentSourceBankAccount =
  ResourceModelType<Resources.PaymentSourceBankAccount>;
export type PaymentSourceCustVoucherSource =
  ResourceModelType<Resources.PaymentSourceCustVoucherSource>;
export type PaymentSourceBillingAddress =
  ResourceModelType<Resources.PaymentSourceBillingAddress>;
export type PaymentSourceAmazonPayment =
  ResourceModelType<Resources.PaymentSourceAmazonPayment>;
export type PaymentSourceUpi = ResourceModelType<Resources.PaymentSourceUpi>;
export type PaymentSourcePaypal =
  ResourceModelType<Resources.PaymentSourcePaypal>;
export type PaymentSourceVenmo =
  ResourceModelType<Resources.PaymentSourceVenmo>;
export type PaymentSourceMandate =
  ResourceModelType<Resources.PaymentSourceMandate>;
export type ThirdPartyPaymentMethod =
  ResourceModelType<Resources.ThirdPartyPaymentMethod>;
export type VirtualBankAccount =
  ResourceModelType<Resources.VirtualBankAccount>;
export type Card = ResourceModelType<Resources.Card>;
export type PromotionalCredit = ResourceModelType<Resources.PromotionalCredit>;
export type Invoice = ResourceModelType<Resources.Invoice>;
export type InvoiceLineItem = ResourceModelType<Resources.InvoiceLineItem>;
export type InvoiceDiscount = ResourceModelType<Resources.InvoiceDiscount>;
export type InvoiceLineItemDiscount =
  ResourceModelType<Resources.InvoiceLineItemDiscount>;
export type InvoiceTax = ResourceModelType<Resources.InvoiceTax>;
export type InvoiceLineItemTax =
  ResourceModelType<Resources.InvoiceLineItemTax>;
export type InvoiceLineItemTier =
  ResourceModelType<Resources.InvoiceLineItemTier>;
export type InvoiceLinkedPayment =
  ResourceModelType<Resources.InvoiceLinkedPayment>;
export type InvoiceDunningAttempt =
  ResourceModelType<Resources.InvoiceDunningAttempt>;
export type InvoiceAppliedCredit =
  ResourceModelType<Resources.InvoiceAppliedCredit>;
export type InvoiceAdjustmentCreditNote =
  ResourceModelType<Resources.InvoiceAdjustmentCreditNote>;
export type InvoiceIssuedCreditNote =
  ResourceModelType<Resources.InvoiceIssuedCreditNote>;
export type InvoiceLinkedOrder =
  ResourceModelType<Resources.InvoiceLinkedOrder>;
export type InvoiceNote = ResourceModelType<Resources.InvoiceNote>;
export type InvoiceShippingAddress =
  ResourceModelType<Resources.InvoiceShippingAddress>;
export type InvoiceStatementDescriptor =
  ResourceModelType<Resources.InvoiceStatementDescriptor>;
export type InvoiceBillingAddress =
  ResourceModelType<Resources.InvoiceBillingAddress>;
export type InvoiceEinvoice = ResourceModelType<Resources.InvoiceEinvoice>;
export type PaymentReferenceNumber =
  ResourceModelType<Resources.PaymentReferenceNumber>;
export type TaxWithheld = ResourceModelType<Resources.TaxWithheld>;
export type CreditNote = ResourceModelType<Resources.CreditNote>;
export type CreditNoteEinvoice =
  ResourceModelType<Resources.CreditNoteEinvoice>;
export type CreditNoteLineItem =
  ResourceModelType<Resources.CreditNoteLineItem>;
export type CreditNoteDiscount =
  ResourceModelType<Resources.CreditNoteDiscount>;
export type CreditNoteLineItemDiscount =
  ResourceModelType<Resources.CreditNoteLineItemDiscount>;
export type CreditNoteLineItemTier =
  ResourceModelType<Resources.CreditNoteLineItemTier>;
export type CreditNoteTax = ResourceModelType<Resources.CreditNoteTax>;
export type CreditNoteLineItemTax =
  ResourceModelType<Resources.CreditNoteLineItemTax>;
export type CreditNoteLinkedRefund =
  ResourceModelType<Resources.CreditNoteLinkedRefund>;
export type CreditNoteAllocation =
  ResourceModelType<Resources.CreditNoteAllocation>;
export type CreditNoteShippingAddress =
  ResourceModelType<Resources.CreditNoteShippingAddress>;
export type CreditNoteBillingAddress =
  ResourceModelType<Resources.CreditNoteBillingAddress>;
export type UnbilledCharge = ResourceModelType<Resources.UnbilledCharge>;
export type UnbilledChargeTier =
  ResourceModelType<Resources.UnbilledChargeTier>;
export type Order = ResourceModelType<Resources.Order>;
export type OrderOrderLineItem =
  ResourceModelType<Resources.OrderOrderLineItem>;
export type OrderShippingAddress =
  ResourceModelType<Resources.OrderShippingAddress>;
export type OrderBillingAddress =
  ResourceModelType<Resources.OrderBillingAddress>;
export type OrderLineItemTax = ResourceModelType<Resources.OrderLineItemTax>;
export type OrderLineItemDiscount =
  ResourceModelType<Resources.OrderLineItemDiscount>;
export type OrderLinkedCreditNote =
  ResourceModelType<Resources.OrderLinkedCreditNote>;
export type OrderResentOrder = ResourceModelType<Resources.OrderResentOrder>;
export type Gift = ResourceModelType<Resources.Gift>;
export type GiftGifter = ResourceModelType<Resources.GiftGifter>;
export type GiftGiftReceiver = ResourceModelType<Resources.GiftGiftReceiver>;
export type GiftGiftTimeline = ResourceModelType<Resources.GiftGiftTimeline>;
export type Transaction = ResourceModelType<Resources.Transaction>;
export type TransactionLinkedInvoice =
  ResourceModelType<Resources.TransactionLinkedInvoice>;
export type TransactionLinkedCreditNote =
  ResourceModelType<Resources.TransactionLinkedCreditNote>;
export type TransactionLinkedRefund =
  ResourceModelType<Resources.TransactionLinkedRefund>;
export type TransactionLinkedPayment =
  ResourceModelType<Resources.TransactionLinkedPayment>;
export type HostedPage = ResourceModelType<Resources.HostedPage>;
export type Estimate = ResourceModelType<Resources.Estimate>;
export type SubscriptionEstimate =
  ResourceModelType<Resources.SubscriptionEstimate>;
export type SubscriptionEstimateShippingAddress =
  ResourceModelType<Resources.SubscriptionEstimateShippingAddress>;
export type SubscriptionEstimateContractTerm =
  ResourceModelType<Resources.SubscriptionEstimateContractTerm>;
export type InvoiceEstimate = ResourceModelType<Resources.InvoiceEstimate>;
export type InvoiceEstimateLineItem =
  ResourceModelType<Resources.InvoiceEstimateLineItem>;
export type InvoiceEstimateDiscount =
  ResourceModelType<Resources.InvoiceEstimateDiscount>;
export type InvoiceEstimateTax =
  ResourceModelType<Resources.InvoiceEstimateTax>;
export type InvoiceEstimateLineItemTax =
  ResourceModelType<Resources.InvoiceEstimateLineItemTax>;
export type InvoiceEstimateLineItemTier =
  ResourceModelType<Resources.InvoiceEstimateLineItemTier>;
export type InvoiceEstimateLineItemDiscount =
  ResourceModelType<Resources.InvoiceEstimateLineItemDiscount>;
export type CreditNoteEstimate =
  ResourceModelType<Resources.CreditNoteEstimate>;
export type CreditNoteEstimateLineItem =
  ResourceModelType<Resources.CreditNoteEstimateLineItem>;
export type CreditNoteEstimateDiscount =
  ResourceModelType<Resources.CreditNoteEstimateDiscount>;
export type CreditNoteEstimateTax =
  ResourceModelType<Resources.CreditNoteEstimateTax>;
export type CreditNoteEstimateLineItemTax =
  ResourceModelType<Resources.CreditNoteEstimateLineItemTax>;
export type CreditNoteEstimateLineItemDiscount =
  ResourceModelType<Resources.CreditNoteEstimateLineItemDiscount>;
export type CreditNoteEstimateLineItemTier =
  ResourceModelType<Resources.CreditNoteEstimateLineItemTier>;
export type Quote = ResourceModelType<Resources.Quote>;
export type QuoteLineItem = ResourceModelType<Resources.QuoteLineItem>;
export type QuoteDiscount = ResourceModelType<Resources.QuoteDiscount>;
export type QuoteLineItemDiscount =
  ResourceModelType<Resources.QuoteLineItemDiscount>;
export type QuoteTax = ResourceModelType<Resources.QuoteTax>;
export type QuoteLineItemTax = ResourceModelType<Resources.QuoteLineItemTax>;
export type QuoteLineItemTier = ResourceModelType<Resources.QuoteLineItemTier>;
export type QuoteShippingAddress =
  ResourceModelType<Resources.QuoteShippingAddress>;
export type QuoteBillingAddress =
  ResourceModelType<Resources.QuoteBillingAddress>;
export type QuotedSubscription =
  ResourceModelType<Resources.QuotedSubscription>;
export type QuotedSubscriptionAddon =
  ResourceModelType<Resources.QuotedSubscriptionAddon>;
export type QuotedSubscriptionEventBasedAddon =
  ResourceModelType<Resources.QuotedSubscriptionEventBasedAddon>;
export type QuotedSubscriptionCoupon =
  ResourceModelType<Resources.QuotedSubscriptionCoupon>;
export type QuotedSubscriptionSubscriptionItem =
  ResourceModelType<Resources.QuotedSubscriptionSubscriptionItem>;
export type QuotedSubscriptionItemTier =
  ResourceModelType<Resources.QuotedSubscriptionItemTier>;
export type QuotedSubscriptionQuotedContractTerm =
  ResourceModelType<Resources.QuotedSubscriptionQuotedContractTerm>;
export type QuotedCharge = ResourceModelType<Resources.QuotedCharge>;
export type QuotedChargeCharge =
  ResourceModelType<Resources.QuotedChargeCharge>;
export type QuotedChargeAddon = ResourceModelType<Resources.QuotedChargeAddon>;
export type QuotedChargeInvoiceItem =
  ResourceModelType<Resources.QuotedChargeInvoiceItem>;
export type QuotedChargeItemTier =
  ResourceModelType<Resources.QuotedChargeItemTier>;
export type QuotedChargeCoupon =
  ResourceModelType<Resources.QuotedChargeCoupon>;
export type QuoteLineGroup = ResourceModelType<Resources.QuoteLineGroup>;
export type QuoteLineGroupLineItem =
  ResourceModelType<Resources.QuoteLineGroupLineItem>;
export type QuoteLineGroupDiscount =
  ResourceModelType<Resources.QuoteLineGroupDiscount>;
export type QuoteLineGroupLineItemDiscount =
  ResourceModelType<Resources.QuoteLineGroupLineItemDiscount>;
export type QuoteLineGroupTax = ResourceModelType<Resources.QuoteLineGroupTax>;
export type QuoteLineGroupLineItemTax =
  ResourceModelType<Resources.QuoteLineGroupLineItemTax>;
export type Plan = ResourceModelType<Resources.Plan>;
export type PlanTier = ResourceModelType<Resources.PlanTier>;
export type PlanApplicableAddon =
  ResourceModelType<Resources.PlanApplicableAddon>;
export type PlanAttachedAddon = ResourceModelType<Resources.PlanAttachedAddon>;
export type PlanEventBasedAddon =
  ResourceModelType<Resources.PlanEventBasedAddon>;
export type Addon = ResourceModelType<Resources.Addon>;
export type AddonTier = ResourceModelType<Resources.AddonTier>;
export type Coupon = ResourceModelType<Resources.Coupon>;
export type CouponItemConstraint =
  ResourceModelType<Resources.CouponItemConstraint>;
export type CouponItemConstraintCriteria =
  ResourceModelType<Resources.CouponItemConstraintCriteria>;
export type CouponCouponConstraint =
  ResourceModelType<Resources.CouponCouponConstraint>;
export type CouponSet = ResourceModelType<Resources.CouponSet>;
export type CouponCode = ResourceModelType<Resources.CouponCode>;
export type Address = ResourceModelType<Resources.Address>;
export type Usage = ResourceModelType<Resources.Usage>;
export type Event = ResourceModelType<Resources.Event>;
export type EventWebhook = ResourceModelType<Resources.EventWebhook>;
export type Comment = ResourceModelType<Resources.Comment>;
export type Download = ResourceModelType<Resources.Download>;
export type PortalSession = ResourceModelType<Resources.PortalSession>;
export type PortalSessionLinkedCustomer =
  ResourceModelType<Resources.PortalSessionLinkedCustomer>;
export type SiteMigrationDetail =
  ResourceModelType<Resources.SiteMigrationDetail>;
export type ResourceMigration = ResourceModelType<Resources.ResourceMigration>;
export type TimeMachine = ResourceModelType<Resources.TimeMachine>;
export type Export = ResourceModelType<Resources.Export>;
export type ExportDownload = ResourceModelType<Resources.ExportDownload>;
export type PaymentIntent = ResourceModelType<Resources.PaymentIntent>;
export type PaymentIntentPaymentAttempt =
  ResourceModelType<Resources.PaymentIntentPaymentAttempt>;
export type ItemFamily = ResourceModelType<Resources.ItemFamily>;
export type Item = ResourceModelType<Resources.Item>;
export type ItemApplicableItem =
  ResourceModelType<Resources.ItemApplicableItem>;
export type ItemPrice = ResourceModelType<Resources.ItemPrice>;
export type ItemPriceTier = ResourceModelType<Resources.ItemPriceTier>;
export type ItemPriceTaxDetail =
  ResourceModelType<Resources.ItemPriceTaxDetail>;
export type ItemPriceAccountingDetail =
  ResourceModelType<Resources.ItemPriceAccountingDetail>;
export type AttachedItem = ResourceModelType<Resources.AttachedItem>;
export type DifferentialPrice = ResourceModelType<Resources.DifferentialPrice>;
export type DifferentialPriceTier =
  ResourceModelType<Resources.DifferentialPriceTier>;
export type DifferentialPriceParentPeriod =
  ResourceModelType<Resources.DifferentialPriceParentPeriod>;
export type Feature = ResourceModelType<Resources.Feature>;
export type FeatureLevel = ResourceModelType<Resources.FeatureLevel>;
export type ImpactedSubscription =
  ResourceModelType<Resources.ImpactedSubscription>;
export type ImpactedSubscriptionDownload =
  ResourceModelType<Resources.ImpactedSubscriptionDownload>;
export type ImpactedItem = ResourceModelType<Resources.ImpactedItem>;
export type ImpactedItemDownload =
  ResourceModelType<Resources.ImpactedItemDownload>;
export type SubscriptionEntitlement =
  ResourceModelType<Resources.SubscriptionEntitlement>;
export type SubscriptionEntitlementComponent =
  ResourceModelType<Resources.SubscriptionEntitlementComponent>;
export type ItemEntitlement = ResourceModelType<Resources.ItemEntitlement>;
export type InAppSubscription = ResourceModelType<Resources.InAppSubscription>;
export type NonSubscription = ResourceModelType<Resources.NonSubscription>;
export type EntitlementOverride =
  ResourceModelType<Resources.EntitlementOverride>;
export type Purchase = ResourceModelType<Resources.Purchase>;
export type PaymentVoucher = ResourceModelType<Resources.PaymentVoucher>;
export type PaymentVoucherLinkedInvoice =
  ResourceModelType<Resources.PaymentVoucherLinkedInvoice>;
