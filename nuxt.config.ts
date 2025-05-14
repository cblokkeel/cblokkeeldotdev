// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxt/content", "@nuxt/icon"],
	routeRules: {
		"/": { prerender: true },
	},
	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	runtimeConfig: {
		public: {
			posthogPublicKey: "phc_HJ506FuJybkDaYSl76MCbcct9t7yUjT2u7qqgZaJZOK",
			posthogHost: "https://eu.i.posthog.com",
		},
	},
});

