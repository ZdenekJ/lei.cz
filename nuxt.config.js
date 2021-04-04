export default {
  target: "static",
  buildModules: ["@nuxtjs/pwa"],
  css: [
    // CSS file in the project
    "~/assets/css/main.css",
  ],
  head: {
    htmlAttrs: {
      lang: "cs-CZ",
    },
    titleTemplate: "Lei.cz",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: "description", name: "description", content: "Meta description" },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href:
          "//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css",
      },
    ],
  },
  pwa: {
    workbox: {
      preCaching: [
        {
          urlPattern: "/*",
        },
      ],
    },
  },
  components: true,
  modules: ["@nuxt/content"],
  hooks: {
    // Transformace MD souboru před parsovanim
    "content:file:beforeParse": (file) => {
      if (file.extension !== ".md") return;
      file.data = file.data.replace(
        /^(„)+/gm,
        '<span class="opening-quote">„</span>'
      );
    },
  },
};
