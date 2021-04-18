<template>
  <article>
    <h1 class="text-center">{{ article.title }}</h1>
    <div class="text-center">
      <nuxt-content :document="article" />
    </div>
    <footer>
      <hr class="hr-text" />
      <h5>{{ article.date }}</h5>
      <h6>{{ article.author }}</h6>
      <ShareSocialSites :data="{ title:article.title, path: this.$route.path }"></ShareSocialSites>
    </footer>
  </article>
</template>

<script>
import { getAsyncOneFileData } from "~/helpers/getContent.js";
import ShareSocialSites from "~/components/ShareSocialSites.vue";

export default {
  head() {
    return {
      htmlAttrs: { lang: "cs" },
      titleTemplate: `${this.article.title} | Lei.cz`,
    };
  },
  components: { ShareSocialSites },
  async asyncData({ $content, params }) {
    return await getAsyncOneFileData({ $content, params, dir: "basnicky" });
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
