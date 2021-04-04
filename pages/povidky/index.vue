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
      titleTemplate: "Povídky | Lei.cz",
    };
  },
  async asyncData({ $content }) {
    const povidky = await $content("povidky")
      .sortBy("title")
      .fetch();
    console.log(povidky);
    return {
      povidky,
    };
  },
};
</script>
