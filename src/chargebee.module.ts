import { Global, Module } from "@nestjs/common";

import { ConfigurableModuleClass } from "./chargebee.module-definition";
import { ChargebeeService } from "./chargebee.service";

@Global()
@Module({
  providers: [ChargebeeService],
  exports: [ChargebeeService],
})
export class ChargebeeModule extends ConfigurableModuleClass {}
