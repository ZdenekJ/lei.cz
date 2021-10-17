<template>
  <article>
    <h1 class="text-center">
      Vzkazník
    </h1>
    <Guestbook :slug="'guestbook'" :isGuestbook="true"/>
  </article>
</template>

<script>
import Guestbook from "~/components/Guestbook.vue";

export default {
  head() {
    return {
      htmlAttrs: { lang: "cs" },
      titleTemplate: "Vzkazník | Lei.cz",
    };
  },
};
</script>
