<template>
  <div>
    <h2 v-if="!isGuestbook">Komentáře:</h2>
    <p><small>Přidávání komentářů ještě není, ale bude ;)</small></p>
    <div class="post" v-if="posts.length < 1">
      <h4>Jejda, zatím nikdo nic nekomentoval</h4>
    </div>
    <div class="post" v-else v-for="post in posts" :key="post.text">
      <h4>
        <span v-if="post.is_author === 1" class="fa fa-user"></span
        >{{ post.nick }} <small>- {{ dateTimeFormat(post.date) }}</small>
      </h4>
      <p v-html="textFormat(post.text)"></p>
    </div>
  </div>
</template>

<script>
import { dateTimeFormat } from "@/helpers/dateTimeFormater.js";

export default {
  name: "Guestbook",
  data() {
    return {
      posts: [],
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

  async fetch() {
    const url =
      "http://" +
      process.env.apiHost +
      ":" +
      process.env.apiPort +
      "/" +
      this.slug;

    const json = await this.$axios.$get(url);

    let data = this.posts;
    data.push(...json.posts);
  },
  methods: {
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
