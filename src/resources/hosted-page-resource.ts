import { ChargebeeResource } from "./abstract-resource";
export class HostedPageResource extends ChargebeeResource {
  public readonly checkoutNew = super.request("hosted_page", "checkout_new", {
    hosted_page: { optional: false },
  });
  public readonly checkoutOneTime = super.request(
    "hosted_page",
    "checkout_one_time",
    { hosted_page: { optional: false } },
  );
  public readonly checkoutOneTimeForItems = super.request(
    "hosted_page",
    "checkout_one_time_for_items",
    { hosted_page: { optional: false } },
  );
  public readonly checkoutNewForItems = super.request(
    "hosted_page",
    "checkout_new_for_items",
    { hosted_page: { optional: false } },
  );
  public readonly checkoutExisting = super.request(
    "hosted_page",
    "checkout_existing",
    { hosted_page: { optional: false } },
  );
  public readonly checkoutExistingForItems = super.request(
    "hosted_page",
    "checkout_existing_for_items",
    { hosted_page: { optional: false } },
  );
  public readonly updateCard = super.request("hosted_page", "update_card", {
    hosted_page: { optional: false },
  });
  public readonly updatePaymentMethod = super.request(
    "hosted_page",
    "update_payment_method",
    { hosted_page: { optional: false } },
  );
  public readonly managePaymentSources = super.request(
    "hosted_page",
    "manage_payment_sources",
    { hosted_page: { optional: false } },
  );
  public readonly collectNow = super.request("hosted_page", "collect_now", {
    hosted_page: { optional: false },
  });
  public readonly acceptQuote = super.request("hosted_page", "accept_quote", {
    hosted_page: { optional: false },
  });
  public readonly extendSubscription = super.request(
    "hosted_page",
    "extend_subscription",
    { hosted_page: { optional: false } },
  );
  public readonly checkoutGift = super.request("hosted_page", "checkout_gift", {
    hosted_page: { optional: false },
  });
  public readonly checkoutGiftForItems = super.request(
    "hosted_page",
    "checkout_gift_for_items",
    { hosted_page: { optional: false } },
  );
  public readonly claimGift = super.request("hosted_page", "claim_gift", {
    hosted_page: { optional: false },
  });
  public readonly retrieveAgreementPdf = super.request(
    "hosted_page",
    "retrieve_agreement_pdf",
    { hosted_page: { optional: false } },
  );
  public readonly acknowledge = super.request("hosted_page", "acknowledge", {
    hosted_page: { optional: false },
  });
  public readonly retrieve = super.request("hosted_page", "retrieve", {
    hosted_page: { optional: false },
  });
  public readonly list = super.listRequest("hosted_page", "list");
  public readonly preCancel = super.request("hosted_page", "pre_cancel", {
    hosted_page: { optional: false },
  });
  public readonly events = super.request("hosted_page", "events", {
    hosted_page: { optional: false },
  });
  public readonly viewVoucher = super.request("hosted_page", "view_voucher", {
    hosted_page: { optional: false },
  });
}
