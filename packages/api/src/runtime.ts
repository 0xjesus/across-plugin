import { createPluginRuntime, type PluginBinding } from "every-plugin";

import type DataProviderTemplatePlugin from "@across/data-provider";

type AppBindings = {
  "@across/data-provider": PluginBinding<typeof DataProviderTemplatePlugin>;
};

const runtime = createPluginRuntime<AppBindings>({
  registry: {
    "@across/data-provider": {
      remoteUrl: "http://localhost:3014/remoteEntry.js",
    },
  },
  secrets: {
    DATA_PROVIDER_API_KEY: process.env.DATA_PROVIDER_API_KEY!,
  },
});

export const { router: dataProviderRouter } = await runtime.usePlugin("@across/data-provider", {
  variables: {
    baseUrl: process.env.DATA_PROVIDER_BASE_URL || "https://api.example.com",
    timeout: Number(process.env.DATA_PROVIDER_TIMEOUT) || 10000,
  },
  secrets: { apiKey: "{{DATA_PROVIDER_API_KEY}}" },
});
