<template>
  <article>
    <h1 class="text-center">
      Blog
    </h1>
    <CreationListLine
      v-for="(data, index) in blog"
      v-bind:key="index"
      :data="data"
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
      titleTemplate: "Blog | Lei.cz",
    };
  },
  components: { CreationListLine },
  async asyncData({ $content }) {
    const blog = await getAsyncDirectoryData({
      $content,
      dir: "blog",
      limit: 0,
    });
    return {
      blog,
    };
  },
};
</script>
