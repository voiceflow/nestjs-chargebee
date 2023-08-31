import { Download, Export } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "./abstract-resource";
export class ExportResource extends ChargebeeResource {
  public readonly waitForExportCompletion = super
    .processWait("export", "wait_for_export_completion")
    .returns({ download: Download });
  public readonly retrieve = super
    .request("export", "retrieve")
    .returns({ export: Export });
  public readonly revenueRecognition = super
    .request("export", "revenue_recognition")
    .returns({ export: Export });
  public readonly deferredRevenue = super
    .request("export", "deferred_revenue")
    .returns({ export: Export });
  public readonly plans = super
    .request("export", "plans")
    .returns({ export: Export });
  public readonly addons = super
    .request("export", "addons")
    .returns({ export: Export });
  public readonly coupons = super
    .request("export", "coupons")
    .returns({ export: Export });
  public readonly customers = super
    .request("export", "customers")
    .returns({ export: Export });
  public readonly subscriptions = super
    .request("export", "subscriptions")
    .returns({ export: Export });
  public readonly invoices = super
    .request("export", "invoices")
    .returns({ export: Export });
  public readonly creditNotes = super
    .request("export", "credit_notes")
    .returns({ export: Export });
  public readonly transactions = super
    .request("export", "transactions")
    .returns({ export: Export });
  public readonly orders = super
    .request("export", "orders")
    .returns({ export: Export });
  public readonly itemFamilies = super
    .request("export", "item_families")
    .returns({ export: Export });
  public readonly items = super
    .request("export", "items")
    .returns({ export: Export });
  public readonly itemPrices = super
    .request("export", "item_prices")
    .returns({ export: Export });
  public readonly attachedItems = super
    .request("export", "attached_items")
    .returns({ export: Export });
  public readonly differentialPrices = super
    .request("export", "differential_prices")
    .returns({ export: Export });
}
