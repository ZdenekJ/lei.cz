<template>
  <article>
    <h1 class="text-center">
      Tvorba
    </h1>
    <TagCloud :data="[...povidky, ...basnicky, ...textiky]"></TagCloud>
    <h2 class="creationsSection" v-show="povidky.length > 0">Povídky</h2>
    <CreationListLine
      v-show="povidky.length > 0"
      v-for="(data, index) in limitedArticles(povidky)"
      v-bind:key="povidky + index"
      :data="data"
    ></CreationListLine>
    <p v-show="povidky.length - CREATIONS_LIMIT > 0">
      <NuxtLink to="/povidky/"
        >Starší povídky ({{ povidky.length - CREATIONS_LIMIT }})
      </NuxtLink>
    </p>
    <h2 class="creationsSection" v-show="basnicky.length > 0">
      Básničky <small>Moje pokusy na poli poezie</small>
    </h2>
    <CreationListLine
      v-show="basnicky.length > 0"
      v-for="(data, index) in limitedArticles(basnicky)"
      v-bind:key="basnicky + index"
      :data="data"
    ></CreationListLine>
    <p v-show="basnicky.length - CREATIONS_LIMIT > 0">
      <NuxtLink to="/basnicky/"
        >Starší básničky ({{ basnicky.length - CREATIONS_LIMIT }})
      </NuxtLink>
    </p>
    <h2 class="creationsSection" v-show="textiky.length > 0">
      Textíky <small>Krátké texty, obvykle poněkud praštěné ;)</small>
    </h2>
    <CreationListLine
      v-show="textiky.length > 0"
      v-for="(data, index) in limitedArticles(textiky)"
      v-bind:key="textiky + index"
      :data="data"
    ></CreationListLine>
    <p v-show="textiky.length - CREATIONS_LIMIT > 0">
      <NuxtLink to="/textiky/"
        >Starší textíky ({{ textiky.length - CREATIONS_LIMIT }})
      </NuxtLink>
    </p>
  </article>
</template>

<script>
import CreationListLine from "~/components/CreationListLine.vue";
import TagCloud from "~/components/TagCloud.vue";
import { getAsyncDirectoryData } from "~/helpers/getContent.js";
import { CREATIONS_LIMIT } from "~/helpers/config.js";

export default {
  data() {
    return {
      CREATIONS_LIMIT,
    };
  },
  head() {
    return {
      htmlAttrs: { lang: "cs" },
      titleTemplate: "Tvorba | Lei.cz",
    };
  },
  components: { CreationListLine, TagCloud },
  async asyncData({ $content }) {
    const povidky = await getAsyncDirectoryData({
      $content,
      dir: "povidky",
    });
    const basnicky = await getAsyncDirectoryData({ $content, dir: "basnicky" });
    const textiky = await getAsyncDirectoryData({ $content, dir: "textiky" });
    return {
      povidky,
      basnicky,
      textiky,
    };
  },
  methods: {
    limitedArticles(data) {
      return data.slice(0, CREATIONS_LIMIT);
    },
  },
};
</script>
