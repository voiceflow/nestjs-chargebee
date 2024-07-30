import type { ChargeBee } from "chargebee-typescript";
import type { ChargebeeModuleOptions } from "./chargebee.interface";

export function configureChargebee(
  client: ChargeBee,
  options: ChargebeeModuleOptions,
) {
  client.configure({
    site: options.override?.url ? "" : options.site,
    api_key: options.apiKey,
    ...(options.override?.url ? extractURLOptions(options.override.url) : {}),
    ...(options.override?.timeout ? { timeout: options.override.timeout } : {}),
  });
  return client;
}

export function extractURLOptions(urlStr: string) {
  const url = new URL(urlStr);

  return {
    hostSuffix: url.hostname,
    apiPath: url.pathname,
    protocol: url.protocol.replace(":", ""),
    port: url.port,
  };
}
