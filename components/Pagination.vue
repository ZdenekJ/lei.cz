<template>
  <div class="pagination">
    <span
      class="pagination__page"
      @click="chnagePage(activePage - 1)"
      v-if="activePage > 1"
      title="Předchozí stránka"
    >
      <i class="fa fa-chevron-left"></i>
    </span>
    <span
      v-else
      title="Předchozí stránka"
      class="pagination__page pagination__page--disabled"
    >
      <i class="fa fa-chevron-left"></i>
    </span>
    <span
      v-for="page in pages"
      v-bind:key="page.index"
      @click="chnagePage(page.pageNumber)"
      class="pagination__page"
      v-bind:class="{ 'pagination__page--active': page.isCurrent === true }"
    >
      {{ page.displayValue }}
    </span>
    <span
      @click="chnagePage(activePage + 1)"
      v-if="activePage < pagesCount"
      class="pagination__page"
    >
      <i class="fa fa-chevron-right" title="Další stránka"></i>
    </span>
    <span v-else class="pagination__page pagination__page--disabled">
      <i class="fa fa-chevron-right" title="Další stránka"></i>
    </span>
  </div>
</template>

<script>
import { PaginationData } from "@/helpers/pagination.js";
export default {
  name: "Pagination",
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    pages: function() {
      return PaginationData({
        currentPage: this.activePage,
        pagesCount: this.pagesCount,
      });
    },
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

<style lang="scss">
.pagination {
  display: flex;
  margin: 0 auto;
  justify-content: center;
}
.pagination__page {
  cursor: pointer;
  display: block;
  text-align: center;
  width: 2.4rem;
  height: 2.4rem;
  line-height: 2.4rem;
  border: 1px solid brown;
}
.pagination__page + .pagination__page {
  border-left: 0;
}
.pagination__page--active {
  font-weight: bold;
  cursor: default;
}
.pagination__page--disabled {
  color: #888;
  cursor: default;
}
</style>
