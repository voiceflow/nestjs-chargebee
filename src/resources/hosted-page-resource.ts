import { HostedPage } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class HostedPageResource extends ChargebeeResource {
  public readonly checkoutNew = super
    .request("hosted_page", "checkout_new")
    .returns({ hosted_page: HostedPage });
  public readonly checkoutOneTime = super
    .request("hosted_page", "checkout_one_time")
    .returns({ hosted_page: HostedPage });
  public readonly checkoutOneTimeForItems = super
    .request("hosted_page", "checkout_one_time_for_items")
    .returns({ hosted_page: HostedPage });
  public readonly checkoutNewForItems = super
    .request("hosted_page", "checkout_new_for_items")
    .returns({ hosted_page: HostedPage });
  public readonly checkoutExisting = super
    .request("hosted_page", "checkout_existing")
    .returns({ hosted_page: HostedPage });
  public readonly checkoutExistingForItems = super
    .request("hosted_page", "checkout_existing_for_items")
    .returns({ hosted_page: HostedPage });
  public readonly updateCard = super
    .request("hosted_page", "update_card")
    .returns({ hosted_page: HostedPage });
  public readonly updatePaymentMethod = super
    .request("hosted_page", "update_payment_method")
    .returns({ hosted_page: HostedPage });
  public readonly managePaymentSources = super
    .request("hosted_page", "manage_payment_sources")
    .returns({ hosted_page: HostedPage });
  public readonly collectNow = super
    .request("hosted_page", "collect_now")
    .returns({ hosted_page: HostedPage });
  public readonly acceptQuote = super
    .request("hosted_page", "accept_quote")
    .returns({ hosted_page: HostedPage });
  public readonly extendSubscription = super
    .request("hosted_page", "extend_subscription")
    .returns({ hosted_page: HostedPage });
  public readonly checkoutGift = super
    .request("hosted_page", "checkout_gift")
    .returns({ hosted_page: HostedPage });
  public readonly checkoutGiftForItems = super
    .request("hosted_page", "checkout_gift_for_items")
    .returns({ hosted_page: HostedPage });
  public readonly claimGift = super
    .request("hosted_page", "claim_gift")
    .returns({ hosted_page: HostedPage });
  public readonly retrieveAgreementPdf = super
    .request("hosted_page", "retrieve_agreement_pdf")
    .returns({ hosted_page: HostedPage });
  public readonly acknowledge = super
    .request("hosted_page", "acknowledge")
    .returns({ hosted_page: HostedPage });
  public readonly retrieve = super
    .request("hosted_page", "retrieve")
    .returns({ hosted_page: HostedPage });
  public readonly list = super.listRequest("hosted_page", "list");
  public readonly preCancel = super
    .request("hosted_page", "pre_cancel")
    .returns({ hosted_page: HostedPage });
  public readonly events = super
    .request("hosted_page", "events")
    .returns({ hosted_page: HostedPage });
  public readonly viewVoucher = super
    .request("hosted_page", "view_voucher")
    .returns({ hosted_page: HostedPage });
}
