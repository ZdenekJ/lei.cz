<template>
  <div>
    <SocialHeader
        :title="article.title"
        :description="article.description"
    />
    <h1>{{ article.title }}</h1>
    <span class="tags" v-show="article.tags">
      <span class="fa fa-tags" title="Seznam tagů"></span>
      <span class="label"
          v-for="(item, index) in article.tags"
          v-bind:key="index"
      ><span>{{ item }}</span></span
      >
    </span>
    <br v-show="article.tags"/>
    <div v-if="centerArticle" class="text-center">
      <NuxtContent :document="article"/>
    </div>
    <div v-else>
      <NuxtContent :document="article"/>
    </div>
    <footer>
      <hr/>
      <h5>{{ article.date }}</h5>
      <h6>{{ article.author }}</h6>
    </footer>
  </div>
</template>

<script>
import SocialHeader from "~/components/SocialHeader.vue";

export default {
  name: "Creation",
  props: {
    article: {
      type: Object,
      required: true
    },
    centerArticle: {
      type: Boolean,
      default: false
    }
  },
  head() {
    return {
      htmlAttrs: {lang: "cs"},
      titleTemplate: `${this.article.title} | Lei.cz`,
    };
  },
  components: { SocialHeader },
};
</script>

<style lang="scss">

</style>
