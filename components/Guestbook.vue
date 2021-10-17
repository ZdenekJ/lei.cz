<template>
  <div>
    <h2 v-if="!isGuestbook">Komentáře:</h2>
    <p><small>Přidávání komentářů ještě není, ale bude ;)</small></p>
    <div class="post" v-if="posts.length < 1">
      <h4>Jejda, zatím nikdo nic nekomentoval</h4>
    </div>
    <div v-else>
      <Pagination
        :active-page="activePage"
        :pages-count="pagesCount"
        @changePage="activePage = $event"
      />
      <div class="post" v-for="post in posts" :key="post.text">
        <h4>
          <span v-if="post.is_author === 1" class="fa fa-user"></span
          >{{ post.nick }} <small>- {{ dateTimeFormat(post.date) }}</small>
        </h4>
        <p v-html="textFormat(post.text)"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { dateTimeFormat } from "@/helpers/dateTimeFormater.js";
import { Pagination } from "~/components/Pagination.vue";

export default {
  name: "Guestbook",
  data() {
    return {
      posts: [],
      activePage: 1,
      pagesCount: 10,
    };
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
    isGuestbook: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    activePage: "$fetch",
  },
  async fetch() {
    const url =
      "http://" +
      process.env.apiHost +
      ":" +
      process.env.apiPort +
      "/" +
      this.slug +
      "/" +
      (this.activePage - 1);

    const json = await this.$axios.$get(url);

    // API indexuje od 0, ale pro sanzsi praci se strankovanim je v aplikaci indexace od 1
    this.activePage = json.page + 1;
    this.pagesCount = json.pagesCount;
    this.posts = [...json.posts];
  },
  methods: {
    async getDataFromApi() {
      const url =
        "http://" +
        process.env.apiHost +
        ":" +
        process.env.apiPort +
        "/" +
        this.slug +
        "/" +
        this.activePage;

      const json = await this.$axios.$get(url);

      this.activePage = json.page;
      this.pagesCount = json.pagesCount;
      this.posts = [...json.posts];
    },
    dateTimeFormat(date) {
      return dateTimeFormat(date);
    },
    textFormat(str) {
      let text = str.replace(/(?:\r\n|\r|\n)/g, "<br>");
      return text;
    },
  },
};
</script>

<style lang="scss"></style>
