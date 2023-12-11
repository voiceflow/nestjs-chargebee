import { Inject, Injectable, Optional } from "@nestjs/common";
import { ChargeBee } from "chargebee-typescript";

import { ChargebeeModuleOptions } from "./chargebee.interface";
import { CHARGEBEE_MODULE_OPTIONS_TOKEN } from "./chargebee.module-definition";
import { ChargebeeResourceWrapper } from "./chargebee-resource-wrapper.class";

@Injectable()
export class ChargebeeService extends ChargebeeResourceWrapper {
  constructor(
    @Inject(CHARGEBEE_MODULE_OPTIONS_TOKEN)
    options: ChargebeeModuleOptions,
    @Optional()
    client = configureChargebee(options),
  ) {
    super(client);
  }
}

function configureChargebee(options: ChargebeeModuleOptions) {
  const client = new ChargeBee();
  client.configure({
    site: options.override?.url ? "" : options.site,
    api_key: options.apiKey,
    ...(options.override?.url ? extractURLOptions(options.override.url) : {}),
    ...(options.override?.timeout ? { timeout: options.override.timeout } : {}),
  });
  return client;
}

function extractURLOptions(urlStr: string) {
  const url = new URL(urlStr);

  return {
    hostSuffix: url.host,
    apiPath: url.pathname,
    protocol: url.protocol.replace(":", ""),
    port: url.port,
  };
}
