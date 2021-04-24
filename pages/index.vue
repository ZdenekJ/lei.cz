<template>
  <article>
    <h1 class="text-center">
      Novinky
    </h1>
    <div class="news row" v-for="{ id, date, text } in news.body" :key="id">
      <h2 class="col-sm-4 col-md-3">{{ date }}</h2>
      <p class="col-sm-8 col-md-9">{{ text }}</p>
    </div>
  </article>
</template>

<script>
import { dateFormat } from "~/helpers/dateFormat.js";
export default {
  head() {
    return {
      htmlAttrs: { lang: "cs" },
    };
  },
  async asyncData({ $content }) {
    const news = await $content("news")
      .sortBy("id")
      .fetch();
    news.body
      .reverse()
      .forEach((el, index, arr) => (arr[index].date = dateFormat(el.date)));
    return {
      news,
    };
  },
};
</script>
