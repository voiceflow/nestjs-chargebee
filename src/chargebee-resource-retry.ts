import { retry, handleWhen, ExponentialBackoff } from "cockatiel";
import { isChargebeeErrorWithCode } from "./chargebee-resource.types";
import { ChargebeeRetryOptions } from "./chargebee.interface";

export const getChargebeeResourceRetryPolicy = (
  options: ChargebeeRetryOptions,
) =>
  retry(
    options === false
      ? handleWhen(() => false)
      : handleWhen(isChargebeeErrorWithCode("api_request_limit_exceeded")),
    {
      maxAttempts:
        typeof options === "object" && "maxAttempts" in options
          ? options.maxAttempts
          : 3,
      backoff: new ExponentialBackoff(),
    },
  );
