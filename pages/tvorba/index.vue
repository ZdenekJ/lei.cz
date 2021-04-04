<template>
  <article>
    <h1 class="text-center">
      Tvorba
    </h1>
    <div v-show="povidky.length > 0"><h3>Povídky</h3></div>
    <CreationListLine
      v-for="(data, index) in povidky"
      v-bind:key="index"
      :data="data"
    ></CreationListLine>
    <div v-show="basnicky.length > 0">
      <h3>Básničky <small>Moje pokusy na poli poezie</small></h3>
      <CreationListLine
        v-for="(data, index) in basnicky"
        v-bind:key="index"
        :data="data"
      ></CreationListLine>
    </div>
    <div v-show="textiky.length > 0">
      <h3>Textíky <small>Krátké texty, obvykle poněkud praštěné ;)</small></h3>
      <CreationListLine
        v-for="(data, index) in textiky"
        v-bind:key="index"
        :data="data"
      ></CreationListLine>
    </div>
  </article>
</template>

<script>
import CreationListLine from "~/components/CreationListLine.vue";
export default {
  head() {
    return {
      htmlAttrs: { lang: "cs" },
      titleTemplate: "Tvorba | Lei.cz",
    };
  },
  components: { CreationListLine },
  async asyncData({ $content }) {
    const povidky = await $content("povidky")
      .sortBy("date", "desc")
      .limit(5)
      .fetch();
    const basnicky = await $content("basnicky")
      .sortBy("date", "desc")
      .limit(5)
      .fetch();
    const textiky = await $content("textiky")
      .sortBy("date", "desc")
      .limit(5)
      .fetch();

    console.log(povidky, basnicky, textiky);
    return {
      povidky,
      basnicky,
      textiky,
    };
  },
};
</script>
