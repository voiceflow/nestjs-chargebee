import { PaymentSource } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class PaymentSourceResource extends ChargebeeResource {
  public readonly createUsingTempToken = super
    .request("payment_source", "create_using_temp_token")
    .returns<{ payment_source: PaymentSource }>();
  public readonly createUsingPermanentToken = super
    .request("payment_source", "create_using_permanent_token")
    .returns<{ payment_source: PaymentSource }>();
  public readonly createUsingToken = super
    .request("payment_source", "create_using_token")
    .returns<{ payment_source: PaymentSource }>();
  public readonly createUsingPaymentIntent = super
    .request("payment_source", "create_using_payment_intent")
    .returns<{ payment_source: PaymentSource }>();
  public readonly createVoucherPaymentSource = super
    .request("payment_source", "create_voucher_payment_source")
    .returns<{ payment_source: PaymentSource }>();
  public readonly createCard = super
    .request("payment_source", "create_card")
    .returns<{ payment_source: PaymentSource }>();
  public readonly createBankAccount = super
    .request("payment_source", "create_bank_account")
    .returns<{ payment_source: PaymentSource }>();
  public readonly updateCard = super
    .request("payment_source", "update_card")
    .returns<{ payment_source: PaymentSource }>();
  public readonly updateBankAccount = super
    .request("payment_source", "update_bank_account")
    .returns<{ payment_source: PaymentSource }>();
  public readonly verifyBankAccount = super
    .request("payment_source", "verify_bank_account")
    .returns<{ payment_source: PaymentSource }>();
  public readonly retrieve = super
    .request("payment_source", "retrieve")
    .returns<{ payment_source: PaymentSource }>();
  public readonly list = super
    .listRequest("payment_source", "list")
    .returns<{ payment_source: PaymentSource }>();
  public readonly switchGatewayAccount = super
    .request("payment_source", "switch_gateway_account")
    .returns<{ payment_source: PaymentSource }>();
  public readonly exportPaymentSource = super
    .request("payment_source", "export_payment_source")
    .returns<{ payment_source: PaymentSource }>();
  public readonly delete = super
    .request("payment_source", "delete")
    .returns<{ payment_source: PaymentSource }>();
  public readonly deleteLocal = super
    .request("payment_source", "delete_local")
    .returns<{ payment_source: PaymentSource }>();
}
