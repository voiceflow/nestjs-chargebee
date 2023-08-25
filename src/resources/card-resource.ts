import {
  Card,
  Customer,
  ThirdPartyPaymentMethod,
} from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "../chargebee-resource.class";

export class CardResource extends ChargebeeResource {
  public readonly retrieve = super
    .request("card", "retrieve")
    .returns<{ card: Card }>();
  public readonly updateCardForCustomer = super
    .request("card", "update_card_for_customer")
    .returns<{ card: Card; customer: Customer }>();
  public readonly switchGatewayForCustomer = super
    .request("card", "switch_gateway_for_customer")
    .returns<{ card: Card; customer: Customer }>();
  public readonly copyCardForCustomer = super
    .request("card", "copy_card_for_customer")
    .returns<{ third_party_payment_method: ThirdPartyPaymentMethod }>();
  public readonly deleteCardForCustomer = super
    .request("card", "delete_card_for_customer")
    .returns<{ customer: Customer }>();
}
