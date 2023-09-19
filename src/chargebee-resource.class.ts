import { AxiosInstance } from "axios";
import { ChargebeeSubscriptionsResource } from "./resources/subscriptions-resource";
import { ChargebeeCustomersResource } from "./resources/customers-resource";
import { ChargebeeTokensResource } from "./resources/tokens-resource";
import { ChargebeePaymentSourcesResource } from "./resources/payment-sources-resource";
import { ChargebeeVirtualBankAccountsResource } from "./resources/virtual-bank-accounts-resource";
import { ChargebeeCardsResource } from "./resources/cards-resource";
import { ChargebeePromotionalCreditsResource } from "./resources/promotional-credits-resource";
import { ChargebeeInvoicesResource } from "./resources/invoices-resource";
import { ChargebeeCreditNotesResource } from "./resources/credit-notes-resource";
import { ChargebeeUnbilledChargesResource } from "./resources/unbilled-charges-resource";
import { ChargebeeOrdersResource } from "./resources/orders-resource";
import { ChargebeeGiftsResource } from "./resources/gifts-resource";
import { ChargebeeTransactionsResource } from "./resources/transactions-resource";
import { ChargebeeHostedPagesResource } from "./resources/hosted-pages-resource";
import { ChargebeeEstimatesResource } from "./resources/estimates-resource";
import { ChargebeeQuotesResource } from "./resources/quotes-resource";
import { ChargebeeCouponsResource } from "./resources/coupons-resource";
import { ChargebeeCouponSetsResource } from "./resources/coupon-sets-resource";
import { ChargebeeCouponCodesResource } from "./resources/coupon-codes-resource";
import { ChargebeeAddressesResource } from "./resources/addresses-resource";
import { ChargebeeUsagesResource } from "./resources/usages-resource";
import { ChargebeeEventsResource } from "./resources/events-resource";
import { ChargebeeCommentsResource } from "./resources/comments-resource";
import { ChargebeePortalSessionsResource } from "./resources/portal-sessions-resource";
import { ChargebeeSiteMigrationDetailsResource } from "./resources/site-migration-details-resource";
import { ChargebeeResourceMigrationsResource } from "./resources/resource-migrations-resource";
import { ChargebeeTimeMachinesResource } from "./resources/time-machines-resource";
import { ChargebeeExportsResource } from "./resources/exports-resource";
import { ChargebeeFullExportsResource } from "./resources/full-exports-resource";
import { ChargebeePaymentIntentsResource } from "./resources/payment-intents-resource";
import { ChargebeeCustomFieldConfigsResource } from "./resources/custom-field-configs-resource";
import { ChargebeeItemFamiliesResource } from "./resources/item-families-resource";
import { ChargebeeProductsResource } from "./resources/products-resource";
import { ChargebeeVariantsResource } from "./resources/variants-resource";
import { ChargebeeItemsResource } from "./resources/items-resource";
import { ChargebeeItemPricesResource } from "./resources/item-prices-resource";
import { ChargebeeAttachedItemsResource } from "./resources/attached-items-resource";
import { ChargebeeDifferentialPricesResource } from "./resources/differential-prices-resource";
import { ChargebeeRsDataExportResourcesResource } from "./resources/rs-data-export-resources-resource";
import { ChargebeeFeaturesResource } from "./resources/features-resource";
import { ChargebeeInAppSubscriptionsResource } from "./resources/in-app-subscriptions-resource";
import { ChargebeeNonSubscriptionsResource } from "./resources/non-subscriptions-resource";
import { ChargebeePurchasesResource } from "./resources/purchases-resource";
import { ChargebeePaymentVouchersResource } from "./resources/payment-vouchers-resource";
import { ChargebeeCsvTaxRulesResource } from "./resources/csv-tax-rules-resource";

export class ChargebeeResourceClass {
  constructor(protected readonly axios: AxiosInstance) {}

  public readonly subscriptions = new ChargebeeSubscriptionsResource(
    this.axios,
  );
  public readonly customers = new ChargebeeCustomersResource(this.axios);
  public readonly tokens = new ChargebeeTokensResource(this.axios);
  public readonly paymentSources = new ChargebeePaymentSourcesResource(
    this.axios,
  );
  public readonly virtualBankAccounts =
    new ChargebeeVirtualBankAccountsResource(this.axios);
  public readonly cards = new ChargebeeCardsResource(this.axios);
  public readonly promotionalCredits = new ChargebeePromotionalCreditsResource(
    this.axios,
  );
  public readonly invoices = new ChargebeeInvoicesResource(this.axios);
  public readonly creditNotes = new ChargebeeCreditNotesResource(this.axios);
  public readonly unbilledCharges = new ChargebeeUnbilledChargesResource(
    this.axios,
  );
  public readonly orders = new ChargebeeOrdersResource(this.axios);
  public readonly gifts = new ChargebeeGiftsResource(this.axios);
  public readonly transactions = new ChargebeeTransactionsResource(this.axios);
  public readonly hostedPages = new ChargebeeHostedPagesResource(this.axios);
  public readonly estimates = new ChargebeeEstimatesResource(this.axios);
  public readonly quotes = new ChargebeeQuotesResource(this.axios);
  public readonly coupons = new ChargebeeCouponsResource(this.axios);
  public readonly couponSets = new ChargebeeCouponSetsResource(this.axios);
  public readonly couponCodes = new ChargebeeCouponCodesResource(this.axios);
  public readonly addresses = new ChargebeeAddressesResource(this.axios);
  public readonly usages = new ChargebeeUsagesResource(this.axios);
  public readonly events = new ChargebeeEventsResource(this.axios);
  public readonly comments = new ChargebeeCommentsResource(this.axios);
  public readonly portalSessions = new ChargebeePortalSessionsResource(
    this.axios,
  );
  public readonly siteMigrationDetails =
    new ChargebeeSiteMigrationDetailsResource(this.axios);
  public readonly resourceMigrations = new ChargebeeResourceMigrationsResource(
    this.axios,
  );
  public readonly timeMachines = new ChargebeeTimeMachinesResource(this.axios);
  public readonly exports = new ChargebeeExportsResource(this.axios);
  public readonly fullExports = new ChargebeeFullExportsResource(this.axios);
  public readonly paymentIntents = new ChargebeePaymentIntentsResource(
    this.axios,
  );
  public readonly customFieldConfigs = new ChargebeeCustomFieldConfigsResource(
    this.axios,
  );
  public readonly itemFamilies = new ChargebeeItemFamiliesResource(this.axios);
  public readonly products = new ChargebeeProductsResource(this.axios);
  public readonly variants = new ChargebeeVariantsResource(this.axios);
  public readonly items = new ChargebeeItemsResource(this.axios);
  public readonly itemPrices = new ChargebeeItemPricesResource(this.axios);
  public readonly attachedItems = new ChargebeeAttachedItemsResource(
    this.axios,
  );
  public readonly differentialPrices = new ChargebeeDifferentialPricesResource(
    this.axios,
  );
  public readonly rsDataExportResources =
    new ChargebeeRsDataExportResourcesResource(this.axios);
  public readonly features = new ChargebeeFeaturesResource(this.axios);
  public readonly inAppSubscriptions = new ChargebeeInAppSubscriptionsResource(
    this.axios,
  );
  public readonly nonSubscriptions = new ChargebeeNonSubscriptionsResource(
    this.axios,
  );
  public readonly purchases = new ChargebeePurchasesResource(this.axios);
  public readonly paymentVouchers = new ChargebeePaymentVouchersResource(
    this.axios,
  );
  public readonly csvTaxRules = new ChargebeeCsvTaxRulesResource(this.axios);
}
