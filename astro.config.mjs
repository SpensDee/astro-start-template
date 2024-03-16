import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://onepartners.io/",
  scopedStyleStrategy: "class",
  integrations: [sitemap(), astroI18next()],
});
