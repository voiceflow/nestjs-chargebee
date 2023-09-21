import { ChargebeeResource } from "./abstract-resource";
export class PaymentSourceResource extends ChargebeeResource {
  public readonly createUsingTempToken = super.request(
    "payment_source",
    "create_using_temp_token",
    { payment_source: { optional: false }, customer: { optional: false } },
  );
  public readonly createUsingPermanentToken = super.request(
    "payment_source",
    "create_using_permanent_token",
    { payment_source: { optional: false }, customer: { optional: false } },
  );
  public readonly createUsingToken = super.request(
    "payment_source",
    "create_using_token",
    { payment_source: { optional: false }, customer: { optional: false } },
  );
  public readonly createUsingPaymentIntent = super.request(
    "payment_source",
    "create_using_payment_intent",
    { payment_source: { optional: false }, customer: { optional: false } },
  );
  public readonly createVoucherPaymentSource = super.request(
    "payment_source",
    "create_voucher_payment_source",
    { payment_source: { optional: false }, customer: { optional: false } },
  );
  public readonly createCard = super.request("payment_source", "create_card", {
    payment_source: { optional: false },
    customer: { optional: false },
  });
  public readonly createBankAccount = super.request(
    "payment_source",
    "create_bank_account",
    { payment_source: { optional: false }, customer: { optional: false } },
  );
  public readonly updateCard = super.request("payment_source", "update_card", {
    payment_source: { optional: false },
    customer: { optional: false },
  });
  public readonly updateBankAccount = super.request(
    "payment_source",
    "update_bank_account",
    { payment_source: { optional: false }, customer: { optional: false } },
  );
  public readonly verifyBankAccount = super.request(
    "payment_source",
    "verify_bank_account",
    { payment_source: { optional: false } },
  );
  public readonly retrieve = super.request("payment_source", "retrieve", {
    payment_source: { optional: false },
  });
  public readonly list = super.listRequest("payment_source", "list", {
    payment_source: { optional: false },
  });
  public readonly switchGatewayAccount = super.request(
    "payment_source",
    "switch_gateway_account",
    { payment_source: { optional: false }, customer: { optional: false } },
  );
  public readonly exportPaymentSource = super.request(
    "payment_source",
    "export_payment_source",
    { third_party_payment_method: { optional: false } },
  );
  public readonly delete = super.request("payment_source", "delete", {
    payment_source: { optional: false },
    customer: { optional: false },
  });
  public readonly deleteLocal = super.request(
    "payment_source",
    "delete_local",
    { payment_source: { optional: false }, customer: { optional: false } },
  );
}
