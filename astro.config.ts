import Tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config'

export default defineConfig({
	integrations: [
		Tailwind(),
	]
});
