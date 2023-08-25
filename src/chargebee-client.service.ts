import { Inject, Injectable, Optional } from "@nestjs/common";
import { ChargeBee } from "chargebee-typescript";

import { ChargebeeModuleOptions } from "./chargebee.interface";
import { CHARGEBEE_MODULE_OPTIONS_TOKEN } from "./chargebee.module-definition";

@Injectable()
export class ChargebeeClientService {
  constructor(
    @Inject(CHARGEBEE_MODULE_OPTIONS_TOKEN)
    options: ChargebeeModuleOptions,
    @Optional()
    private _client = new ChargeBee(),
  ) {
    this._client.configure({
      site: options.site,
      api_key: options.apiKey,
    });
  }

  public get client(): ChargeBee {
    return this._client;
  }
}
