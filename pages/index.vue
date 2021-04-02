<template>
  <article>
    <h1 class="text-center">
      Novinky
    </h1>
    <div class="news row" v-for="{ id, date, text } in news.body" :key="id">
      <h3 class="col-sm-3 text-right">{{ date }}</h3>
      <p class="col-sm-9">{{ text }}</p>
    </div>
  </article>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: { lang: "cs" },
    };
  },
  async asyncData({ $content }) {
    function formatDate(dateString) {
      const d = new Date(dateString);
      const month = "" + (d.getMonth() + 1);
      const day = "" + d.getDate();
      const year = d.getFullYear();
      return `${day}. ${month}. ${year}`;
    }
    const news = await $content("news")
      .sortBy("id")
      .fetch();
    news.body
      .reverse()
      .forEach((el, index, arr) => (arr[index].date = formatDate(el.date)));
    return {
      news,
    };
  },
};
</script>
