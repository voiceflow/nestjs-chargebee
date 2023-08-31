import { Injectable } from "@nestjs/common";

import { ChargebeeClientService } from "./chargebee-client.service";
import { ChargebeeResourceWrapper } from "./chargebee-resource-wrapper.class";

@Injectable()
export class ChargebeeService extends ChargebeeResourceWrapper {
  constructor(chargebeeClient: ChargebeeClientService) {
    super(chargebeeClient.client);
  }
}
