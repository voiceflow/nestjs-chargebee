export interface ChargebeeModuleOptions {
  site: string;
  apiKey: string;
  override?: {
    url?: string;
    timeout?: number;
  };
}
