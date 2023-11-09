export interface ChargebeeModuleOptions {
  site: string;
  apiKey: string;
  retry?: false | ChargebeeRetryOptions
}

export interface ChargebeeRetryOptions {
  maxAttempts?: number;
}
