import { ChargebeeResource } from "./abstract-resource";

export class CardResource extends ChargebeeResource {
  public readonly retrieve = super.request("card", "retrieve", {
    card: { optional: false },
  });
  public readonly updateCardForCustomer = super.request(
    "card",
    "update_card_for_customer",
    { card: { optional: false }, customer: { optional: false } },
  );
  public readonly switchGatewayForCustomer = super.request(
    "card",
    "switch_gateway_for_customer",
    { card: { optional: false }, customer: { optional: false } },
  );
  public readonly copyCardForCustomer = super.request(
    "card",
    "copy_card_for_customer",
    { third_party_payment_method: { optional: false } },
  );
  public readonly deleteCardForCustomer = super.request(
    "card",
    "delete_card_for_customer",
    { customer: { optional: false } },
  );
}
