<template>
  <article>
    <Creation :article="article" :centerArticle="true"/>
  </article>
</template>

<script>
import { getAsyncOneFileData } from "~/helpers/getContent.js";
import Creation from "@/components/Creation";

export default {
  components: { Creation },
  async asyncData({ $content, params }) {
    return await getAsyncOneFileData({ $content, params, dir: "basnicky" });
  },
};
</script>

<style lang="scss">
</style>
