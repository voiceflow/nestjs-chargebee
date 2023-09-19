import { Inject, Injectable, Optional } from "@nestjs/common";
import Axios, { type AxiosInstance } from "axios";

import { ChargebeeModuleOptions } from "./chargebee.interface";
import { CHARGEBEE_MODULE_OPTIONS_TOKEN } from "./chargebee.module-definition";
import { ChargebeeResourceClass } from "./chargebee-resource.class";

@Injectable()
export class ChargebeeService extends ChargebeeResourceClass {
  constructor(
    @Inject(CHARGEBEE_MODULE_OPTIONS_TOKEN)
    readonly options: ChargebeeModuleOptions,
    @Optional()
    readonly axios: AxiosInstance = Axios.create({
      baseURL: `https://${options.site}.chargebee.com/api/v2`,
      headers: {
        Authorization: `Basic ${Buffer.from(options.apiKey + ":").toString(
          "base64",
        )})}`,
      },
    }),
  ) {
    super(axios);
  }
}
