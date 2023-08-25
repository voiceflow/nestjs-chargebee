import { Injectable } from "@nestjs/common";

import { ChargebeeClientService } from "./chargebee-client.service";
import { ChargebeeClient } from "./resources/mod";

@Injectable()
export class ChargebeeService extends ChargebeeClient {
  constructor(chargebeeClient: ChargebeeClientService) {
    super(chargebeeClient.client);
  }
}
