<template>
  <article>
    <h1 class="text-center">
      Textíky
    </h1>
    <CreationListLine
      v-for="(item, index) in data"
      v-bind:key="index"
      :data="item"
    ></CreationListLine>
  </article>
</template>

<script>
import CreationListLine from "~/components/CreationListLine.vue";
import { getAsyncDirectoryData } from "~/helpers/getContent.js";

export default {
  head() {
    return {
      htmlAttrs: { lang: "cs" },
      titleTemplate: "Textíky | Lei.cz",
    };
  },
  components: { CreationListLine },
  async asyncData({ $content }) {
    const data = await getAsyncDirectoryData({
      $content,
      dir: "textiky",
      limit: 0,
    });
    return {
      data,
    };
  },
};
</script>
