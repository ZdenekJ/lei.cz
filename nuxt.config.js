export default {
  target: "static",
  buildModules: ["@nuxtjs/pwa"],
  css: [
    // CSS file in the project
    "~/assets/scss/main.scss",
    "~/assets/scss/print.scss",
  ],
  head: {
    htmlAttrs: {
      lang: "cs-CZ",
    },
    title: "Lei.cz",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {hid: "description", name: "description", content: "Meta description"},
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
        // Fonty
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css?family=Headland+One&subset=latin,latin-ext&display=swap'
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css?family=Russo+One&subset=latin,latin-ext&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Headland+One&subset=latin,latin-ext&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Russo+One&subset=latin,latin-ext&display=swap'
      },

      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://lei.cz'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Lei.cz'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Web povídek, básniček a myšlenek jednoho pisálka'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/images/lilie.png'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      {hid: 'og:site_name', property: 'og:site_name', content: 'Lei.cz'},
      {hid: 'og:type', property: 'og:type', content: 'website'},
      {hid: 'fb:app_id', property: 'fb:app_id', content: '997767046955778'},
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://lei.cz'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Lei.cz'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Web povídek, básniček a myšlenek jednoho pisálka'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/images/lilie.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '/images/lilie.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Lei.cz'
      }
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
  generate: {
    fallback: '404.html'
  },
  components: true,
  modules: ["@nuxt/content"],
  hooks: {
    // Transformace MD souboru před parsovanim
    "content:file:beforeParse": (file) => {
      if (file.extension !== ".md") return;
      // Změna uvozovek jen pro povidky a textiky
      if (file.path.includes("povidky") || file.path.includes("textiky"))
      {
        file.data = file.data.replace(
            /^(„)+/gm,
            '<span class="opening-quote">„</span>'
        );
      }
    },
  },
};
