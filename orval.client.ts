/* eslint-disable no-nested-ternary */
import type {
  ClientGeneratorsBuilder,
  GeneratorImport,
  GeneratorVerbOptions,
} from "@orval/core";
import { toObjectString, camel } from "@orval/core";

const buildOptions = ({ queryParams, headers, body }: GeneratorVerbOptions) => {
  const queryOption = queryParams ? "params" : ([] as string[]);
  const headersOption = headers ? "headers" : ([] as string[]);
  const bodyOption = body.formData
    ? `body: formData`
    : body.implementation
    ? `json: ${body.implementation}`
    : ([] as string[]);
  const options = [queryOption, headersOption, bodyOption].flat().join(",\n");

  return options ? `{\n${options}\n}` : "";
};

const buildImports = ({
  queryParams,
  headers,
  body,
  response,
}: GeneratorVerbOptions): GeneratorImport[] => [
  ...(queryParams ? [{ name: queryParams.schema.name }] : []),
  ...(headers ? [{ name: headers.schema.name }] : []),
  ...body.schemas.map((schema) => ({ name: schema.name })),
  ...response.schemas.map((schema) => ({ name: schema.name })),
];

export const FetchClientBuilder: ClientGeneratorsBuilder = {
  client: (verbOptions, { route }) => {
    const { operationId, verb, props, response, body } = verbOptions;

    const methodName = camel(operationId);
    const parameters = toObjectString(props, "implementation");
    const options = buildOptions(verbOptions);
    const returnType = response.definition.success ?? "unknown";
    const isVoid = returnType === "void";

    return {
      implementation: `public async ${methodName}(${parameters}): Promise<AxiosResponse<${returnType}>> {
  ${body.formData ?? ""}
  ${
    isVoid ? "await" : "return"
  } this.axios.${verb.toLowerCase()}(\`${route}\`, ${options});
}
\n`,
      imports: buildImports(verbOptions),
    };
  },
  title: (title) => `Chargebee${title}`,
  header: ({ title }) => `export class ${title} {
  constructor(private readonly axios: AxiosInstance) {}
\n`,
  footer: () => "}\n",
  dependencies: () => [
    {
      dependency: "axios",
      exports: [{ name: "AxiosInstance" }, { name: "AxiosResponse" }],
    },
  ],
};
