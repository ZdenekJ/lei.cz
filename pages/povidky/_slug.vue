<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: { lang: "cs" },
      titleTemplate: `${this.article.title} | Lei.cz`,
    };
  },

  async asyncData({ $content, params }) {
    const article = await $content("povidky", params.slug).fetch();
    console.log(article);
    return {
      article,
    };
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
