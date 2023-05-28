import { defaultLocale, locales, i18nLocales } from "./constants/i18nLocales";

export default {
  target: "static",
  generate: {
    fallback: false,
  },

  head: {
    title: "",
    htmlAttrs: {
      lang: defaultLocale,
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { hid: "og:title", property: "og:title", content: "" },
      { hid: "og:description", property: "og:description", content: "" },
      { hid: "twitter:title", name: "twitter:title", content: "" },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/assets/images/logo_small.svg",
      },
      { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/assets/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/assets/css/flaticon.css" },
      {
        rel: "stylesheet",
        href: "/assets/plugins/glightbox/glightbox.min.css",
      },
      { rel: "stylesheet", href: "/assets/css/nice-select.css" },
      { rel: "stylesheet", href: "/assets/css/animate.min.css" },
      { rel: "stylesheet", href: "/assets/css/default.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap",
      },
    ],
    script: [
      { src: "/assets/plugins/glightbox/glightbox.min.js", body: true },
      { src: "/assets/plugins/accordion/accordion.min.js", body: true },
    ],
  },

  loading: { color: "#E25303", height: "4px" },

  css: [],

  plugins: [
    { src: "plugins/owl.js", ssr: false },
    { src: "plugins/mixitup.js", ssr: false },
  ],

  image: {
    domains: ["strapi.badblli.dev/uploads"],
  },

  buildModules: [],

  modules: ["@nuxtjs/strapi", "@nuxtjs/apollo", "@nuxtjs/i18n"],

  i18n: {
    defaultLocale,
    vueI18nLoader: true,
    vueI18n: i18nLocales,
    locales,
    fallbackLocale: defaultLocale,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://strapi.badblli.dev/graphql",
      },
    },
  },

  build: {
    watch: ["~/constants/*.js"],
    extend(config, ctx) {},
  },
};
