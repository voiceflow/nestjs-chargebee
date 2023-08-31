import { Order } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class OrderResource extends ChargebeeResource {
  public readonly create = super
    .request("order", "create")
    .returns<{ order: Order }>();
  public readonly update = super
    .request("order", "update")
    .returns<{ order: Order }>();
  public readonly importOrder = super
    .request("order", "import_order")
    .returns<{ order: Order }>();
  public readonly assignOrderNumber = super
    .request("order", "assign_order_number")
    .returns<{ order: Order }>();
  public readonly cancel = super
    .request("order", "cancel")
    .returns<{ order: Order }>();
  public readonly createRefundableCreditNote = super
    .request("order", "create_refundable_credit_note")
    .returns<{ order: Order }>();
  public readonly reopen = super
    .request("order", "reopen")
    .returns<{ order: Order }>();
  public readonly retrieve = super
    .request("order", "retrieve")
    .returns<{ order: Order }>();
  public readonly delete = super
    .request("order", "delete")
    .returns<{ order: Order }>();
  public readonly list = super
    .listRequest("order", "list")
    .returns<{ order: Order }>();
  public readonly ordersForInvoice = super
    .listRequest("order", "orders_for_invoice")
    .returns<{ order: Order }>();
  public readonly resend = super
    .request("order", "resend")
    .returns<{ order: Order }>();
}
