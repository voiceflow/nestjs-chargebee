import { Transaction } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "../chargebee-resource.class";
export class TransactionResource extends ChargebeeResource {
  public readonly createAuthorization = super
    .request("transaction", "create_authorization")
    .returns<{ transaction: Transaction }>();
  public readonly voidTransaction = super
    .request("transaction", "void_transaction")
    .returns<{ transaction: Transaction }>();
  public readonly recordRefund = super
    .request("transaction", "record_refund")
    .returns<{ transaction: Transaction }>();
  public readonly refund = super
    .request("transaction", "refund")
    .returns<{ transaction: Transaction }>();
  public readonly list = super
    .listRequest("transaction", "list")
    .returns<{ transaction: Transaction }>();
  public readonly transactionsForCustomer = super
    .listRequest("transaction", "transactions_for_customer")
    .returns<{ transaction: Transaction }>();
  public readonly transactionsForSubscription = super
    .listRequest("transaction", "transactions_for_subscription")
    .returns<{ transaction: Transaction }>();
  public readonly paymentsForInvoice = super
    .listRequest("transaction", "payments_for_invoice")
    .returns<{ transaction: Transaction }>();
  public readonly retrieve = super
    .request("transaction", "retrieve")
    .returns<{ transaction: Transaction }>();
  public readonly deleteOfflineTransaction = super
    .request("transaction", "delete_offline_transaction")
    .returns<{ transaction: Transaction }>();
}
