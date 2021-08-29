<template>
  <div>
    Pagination

    <p @click="chnagePage(activePage - 1)" v-if="activePage > 1">
      Předchozí stránka
    </p>
    <p v-else>
      Předchozí stránka
    </p>
    <p v-for="page in pagesCount" v-bind:key="page" @click="chnagePage(page)">
      {{ page }}
    </p>
    <p @click="chnagePage(activePage + 1)" v-if="activePage < pagesCount">
      Další stránka
    </p>
    <p v-else>Další stránka</p>
    <span>{{ activePage }}</span>
    <span>{{ pagesCount }}</span>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      posts: [],
    };
  },
  props: {
    activePage: {
      type: Number,
      required: true,
    },
    pagesCount: {
      type: Number,
      default: true,
    },
  },

  methods: {
    chnagePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>

<style lang="scss"></style>
