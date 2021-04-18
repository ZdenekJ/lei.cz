<template>
  <article>
    <h1 class="text-center">
      Blog
    </h1>
    <TagCloud :data="data"></TagCloud>
    <CreationListLine
      v-for="(item, index) in data"
      v-bind:key="index"
      :data="item"
    ></CreationListLine>
  </article>
</template>

<script>
import CreationListLine from "~/components/CreationListLine.vue";
import TagCloud from "~/components/TagCloud.vue";
import { getAsyncDirectoryData } from "~/helpers/getContent.js";

export default {
  head() {
    return {
      htmlAttrs: { lang: "cs" },
      titleTemplate: "Blog | Lei.cz",
    };
  },
  components: { CreationListLine, TagCloud },
  async asyncData({ $content }) {
    const data = await getAsyncDirectoryData({
      $content,
      dir: "blog",
      limit: 0,
    });
    return {
      data,
    };
  },
};
</script>
