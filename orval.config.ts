import type { Config } from "@orval/core";
import { camel } from "@orval/core";
import fs from "node:fs";

import { FetchClientBuilder } from "./orval.client";

export default <Config>{
  chargebee: {
    input: "https://openapi.chargebee.com/v2-pcv2/index.json",
    output: {
      mode: "tags",
      workspace: "src/resources/",
      target: "",
      headers: true,
      client: () => FetchClientBuilder,
      override: {
        transformer(verb) {
          verb.tags = [verb.route.split("/")[1] + "-resource"];
          return verb;
        },
      },
    },
    hooks: {
      afterAllFilesWrite: [
        (files: string[]) => {
          const imports: string[] = [];
          const instances: string[] = [];

          const resources = files.filter((file) =>
            file.endsWith("-resource.ts"),
          );

          for (const resource of resources) {
            const content = fs.readFileSync(resource, { encoding: "utf-8" });
            const className = content.match(
              /export class (Chargebee.+Resource) {/,
            )?.[1];
            if (!className) continue;

            const instanceName = resource
              .split("/")
              .at(-1)
              ?.replace("-resource.ts", "");
            if (!instanceName) continue;

            imports.push(
              `import { ${className} } from './resources/${instanceName}-resource';`,
            );
            instances.push(
              `public readonly ${camel(
                instanceName,
              )} = new ${className}(this.axios);`,
            );
          }

          fs.writeFileSync(
            `src/chargebee-resource.class.ts`,
            `import { AxiosInstance } from 'axios';
            ${imports.join("\n")}

            export class ChargebeeResourceClass {
              constructor(
                protected readonly axios: AxiosInstance,
              ) {}

              ${instances.join("\n  ")}
            }
          `,
          );
        },
      ],
    },
  },
};
