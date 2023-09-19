/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Chargebee API
 * OpenAPI spec version: v2 (PC 2.0)
 */
import type { AxiosInstance, AxiosResponse } from "axios";
import type {
  ListCouponCodesParams,
  ListCouponCodesHeaders,
  ListCouponCodes200,
  RetrieveACouponCodeHeaders,
  RetrieveACouponCode200,
  ArchiveACouponCodeHeaders,
  ArchiveACouponCode200,
} from "./chargebeeAPI.schemas";

export class ChargebeeCouponCodesResource {
  constructor(private readonly axios: AxiosInstance) {}

  /**
 * List the available coupon codes.

 * @summary List coupon codes
 */
  public async listCouponCodes(
    params?: ListCouponCodesParams,
    headers?: ListCouponCodesHeaders,
  ): Promise<AxiosResponse<ListCouponCodes200>> {
    return this.axios.get(`/coupon_codes`, {
      params,
      headers,
    });
  }

  /**
 * Retrieves a specific coupon code details.

 * @summary Retrieve a coupon code
 */
  public async retrieveACouponCode(
    couponCodeCode: string,
    headers?: RetrieveACouponCodeHeaders,
  ): Promise<AxiosResponse<RetrieveACouponCode200>> {
    return this.axios.get(`/coupon_codes/${couponCodeCode}`, {
      headers,
    });
  }

  /**
 * Archives a coupon code thereby making it inactive. The archived coupon code cannot be applied to any subscription.

 * @summary Archive a coupon code
 */
  public async archiveACouponCode(
    couponCodeCode: string,
    headers?: ArchiveACouponCodeHeaders,
  ): Promise<AxiosResponse<ArchiveACouponCode200>> {
    return this.axios.post(`/coupon_codes/${couponCodeCode}/archive`, {
      headers,
    });
  }
}
