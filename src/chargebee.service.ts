import { Inject, Injectable } from "@nestjs/common";

import { ChargebeeModuleOptions } from "./chargebee.interface";
import { CHARGEBEE_MODULE_OPTIONS_TOKEN } from "./chargebee.module-definition";
import { ChargebeeResourceWrapper } from "./chargebee-resource-wrapper.class";

@Injectable()
export class ChargebeeService extends ChargebeeResourceWrapper {
  constructor(
    @Inject(CHARGEBEE_MODULE_OPTIONS_TOKEN)
    options: ChargebeeModuleOptions,
  ) {
    super(options);
  }
}
