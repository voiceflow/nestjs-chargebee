import { retry, handleWhen, ExponentialBackoff } from "cockatiel";
import { isChargebeeErrorWithCode } from "./chargebee-resource.types";

export const chargebeeResourceRetryPolicy = retry(
  handleWhen(isChargebeeErrorWithCode("api_request_limit_exceeded")),
  {
    maxAttempts: 3,
    backoff: new ExponentialBackoff(),
  },
);
