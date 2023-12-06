export interface ChargebeeModuleOptions {
  site: string;
  apiKey: string;
  override: {
    hostSuffix?: string;
    apiPath?: string;
    protocol?: "https" | "http";
    port?: number;
    timeout?: number;
  };
}
