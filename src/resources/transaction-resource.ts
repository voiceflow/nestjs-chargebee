import { ChargebeeResource } from "../chargebee-resource.class";
export class TransactionResource extends ChargebeeResource {
  public readonly createAuthorization = super.request(
    "transaction",
    "create_authorization",
    { transaction: { optional: false } },
  );
  public readonly voidTransaction = super.request(
    "transaction",
    "void_transaction",
    { transaction: { optional: false } },
  );
  public readonly recordRefund = super.request("transaction", "record_refund", {
    transaction: { optional: false },
  });
  public readonly refund = super.request("transaction", "refund", {
    transaction: { optional: false },
  });
  public readonly list = super.listRequest("transaction", "list", {
    transaction: { optional: false },
  });
  public readonly transactionsForCustomer = super.listRequest(
    "transaction",
    "transactions_for_customer",
    { transaction: { optional: false } },
  );
  public readonly transactionsForSubscription = super.listRequest(
    "transaction",
    "transactions_for_subscription",
    { transaction: { optional: false } },
  );
  public readonly paymentsForInvoice = super.listRequest(
    "transaction",
    "payments_for_invoice",
    { transaction: { optional: false } },
  );
  public readonly retrieve = super.request("transaction", "retrieve", {
    transaction: { optional: false },
  });
  public readonly deleteOfflineTransaction = super.request(
    "transaction",
    "delete_offline_transaction",
    { transaction: { optional: false } },
  );
}
