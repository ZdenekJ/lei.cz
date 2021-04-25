<template>
  <article>
    <h1>
      Novinky
    </h1>
    <div class="news" v-for="{ id, date, text } in news.body" :key="id">
      <h2>{{ date }}</h2>
      <p>{{ text }}</p>
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
