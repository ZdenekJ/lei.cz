<template>
  <article>
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
    <br v-show="article.tags" />
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
    return await getAsyncOneFileData({ $content, params, dir: "blog" });
  },
};
</script>
