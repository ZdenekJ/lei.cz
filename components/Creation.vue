<template>
  <div>
    <SocialHeader
        :title="article.title"
        :description="article.description"
    />
    <h1 class="text-center">{{ article.title }}</h1>
    <div class="row" v-show="article.tags">
      <div class="col-xs-12">
        <span class="fa fa-tags" title="Seznam tagů"></span>
        <span
            class="tags"
            v-for="(item, index) in article.tags"
            v-bind:key="index"
        ><a nohref
        ><span class="label label-default">{{ item }}</span></a
        ></span
        >
      </div>
    </div>
    <br v-show="article.tags"/>
    <div v-if="centerArticle" class="text-center">
      <nuxt-content :document="article"/>
    </div>
    <div v-else>
      <nuxt-content :document="article"/>
    </div>
    <footer>
      <hr class="hr-text"/>
      <h5>{{ article.date }}</h5>
      <h6>{{ article.author }}</h6>
      <ShareSocialSites
          :data="{ title:article.title, path: this.$route.path }"></ShareSocialSites>
    </footer>
  </div>
</template>

<script>
import SocialHeader from "~/components/SocialHeader.vue";
import ShareSocialSites from "@/components/ShareSocialSites";

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
  components: {ShareSocialSites, SocialHeader},
};
</script>

<style lang="scss">

.nuxt-content{
  h1{
    text-align: center;
  }
}
</style>
