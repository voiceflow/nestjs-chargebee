import { ConfigurableModuleBuilder } from "@nestjs/common";

import { ChargebeeModuleOptions } from "./chargebee.interface";

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN: CHARGEBEE_MODULE_OPTIONS_TOKEN,
} = new ConfigurableModuleBuilder<ChargebeeModuleOptions>()
  .setExtras(
    {
      isGlobal: false,
    },
    (definition, extras) => ({
      ...definition,
      global: extras.isGlobal,
    }),
  )
  .build();
