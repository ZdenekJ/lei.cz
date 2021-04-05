<template>
  <article>
    <nuxt-content :document="article" />
    <hr class="hr-text" />
    <h5>{{ article.date }}</h5>
    <h6>{{ article.author }}</h6>
  </article>
</template>

<script>
import { getAsyncOneFileData } from "~/helpers/getContent.js";
export default {
  head() {
    return {
      htmlAttrs: { lang: "cs" },
      titleTemplate: `${this.article.title} | Lei.cz`,
    };
  },
  async asyncData({ $content, params }) {
    return await getAsyncOneFileData({ $content, params, dir: "textiky" });
  },
};
</script>

<style lang="scss">
.nuxt-content {
  h1 {
    text-align: center;
  }
}
</style>
