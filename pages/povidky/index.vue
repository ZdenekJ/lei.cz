<template>
  <article>
    <h1 class="text-center">
      Povídky
    </h1>
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
    const povidky = await $content("povidky")
      .sortBy("date", "desc")
      .limit(5)
      .fetch();
    console.log(povidky);
    return {
      povidky,
    };
  },
};
</script>
