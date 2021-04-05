<template>
  <article>
    <h1 class="text-center">
      Tvorba
    </h1>
    <div v-show="povidky.length > 0"><h3>Povídky</h3></div>
    <CreationListLine
      v-for="(data, index) in limitedArticles(povidky)"
      v-bind:key="index"
      :data="data"
    ></CreationListLine>
    <p v-show="povidky.length - CREATIONS_LIMIT > 0">
      <NuxtLink to="/povidky/"
        >Starší povídky ({{ povidky.length - CREATIONS_LIMIT }})</NuxtLink
      >
    </p>
    <div v-show="basnicky.length > 0">
      <h3>Básničky <small>Moje pokusy na poli poezie</small></h3>
      <CreationListLine
        v-for="(data, index) in limitedArticles(basnicky)"
        v-bind:key="index"
        :data="data"
      ></CreationListLine>
      <p v-show="basnicky.length - CREATIONS_LIMIT > 0">
        <NuxtLink to="/basnicky/"
          >Starší básničky ({{ basnicky.length - CREATIONS_LIMIT }})</NuxtLink
        >
      </p>
    </div>
    <div v-show="textiky.length > 0">
      <h3>Textíky <small>Krátké texty, obvykle poněkud praštěné ;)</small></h3>
      <CreationListLine
        v-for="(data, index) in limitedArticles(textiky)"
        v-bind:key="index"
        :data="data"
      ></CreationListLine>
      <p v-show="textiky.length - CREATIONS_LIMIT > 0">
        <NuxtLink to="/textiky/"
          >Starší textíky ({{ textiky.length - CREATIONS_LIMIT }})</NuxtLink
        >
      </p>
    </div>
  </article>
</template>

<script>
import CreationListLine from "~/components/CreationListLine.vue";
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
  components: { CreationListLine },
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
