import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/ui", "@nuxt/icon", "@nuxt/eslint", "@nuxtjs/google-fonts"],
	css: ["~/assets/css/main.css"],
	vite: { plugins: [tailwindcss()] },
	googleFonts: {
		families: {
			Inter: "200..700",
		},
	},
});
