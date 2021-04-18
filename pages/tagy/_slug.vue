<template>
  <article>
    <h1 class="text-center">Tag: <small>{{ slug }}</small></h1>
    <div v-show="povidky.length > 0">
      <h3>Povídky</h3>
      <CreationListLine
          v-for="(data, index) in povidky"
          v-bind:key="index"
          :data="data"
      ></CreationListLine>
    </div>
    <div v-show="basnicky.length > 0">
      <h3>Básničky</h3>
      <CreationListLine
          v-for="(data, index) in basnicky"
          v-bind:key="index"
          :data="data"
      ></CreationListLine>
    </div>
    <div v-show="textiky.length > 0">
      <h3>Textíky</h3>
      <CreationListLine
          v-for="(data, index) in textiky"
          v-bind:key="index"
          :data="data"
      ></CreationListLine>
    </div>
    <div v-show="blog.length > 0">
      <h3>Blog</h3>
      <CreationListLine
          v-for="(data, index) in blog"
          v-bind:key="index"
          :data="data"
      ></CreationListLine>
    </div>
  </article>
</template>

<script>
import {getAsyncByTagData} from "~/helpers/getContent.js";
import CreationListLine from "~/components/CreationListLine.vue";
import TagCloud from "~/components/TagCloud";

export default {
  head() {
    return {
      htmlAttrs: {lang: "cs"},
      titleTemplate: `Tagy | Lei.cz`,
    };
  },
  components: {CreationListLine},
  async asyncData({$content, params}) {
    const slug = params.slug;
    const data = await getAsyncByTagData({$content, params});
    return {slug, ...data}
  },
};
</script>
