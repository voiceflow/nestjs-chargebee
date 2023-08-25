import { Global, Module } from "@nestjs/common";

import { ConfigurableModuleClass } from "./chargebee.module-definition";
import { ChargebeeClientService } from "./chargebee-client.service";
import { ChargebeeService } from "./chargebee.service";

@Global()
@Module({
  providers: [ChargebeeClientService, ChargebeeService],
  exports: [ChargebeeService],
})
export class ChargebeeModule extends ConfigurableModuleClass {}
