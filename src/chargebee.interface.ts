export interface ChargebeeModuleOptions {
  site: string;
  apiKey: string;
  retry?: ChargebeeRetryOptions;
}

export type ChargebeeRetryOptions =
  | false
  | {
      maxAttempts?: number;
    };
