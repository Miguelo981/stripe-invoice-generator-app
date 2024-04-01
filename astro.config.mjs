import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import deno from '@astrojs/deno';

// https://astro.build/config
export default defineConfig({
  site: 'http://invoices.miguelo.dev',
  integrations: [tailwind()],
  adapter: deno()
});