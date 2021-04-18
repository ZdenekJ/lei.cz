<template>
  <div class="row"><!--social bar-->
    <div class="col-sm-3 text-center social-share">
      <a :href="twitterHref" class="twitter-share-button"
         :data-url="canonicalUrl"
         :data-text="data.title" data-via="Lei_cz">Tweet</a>
    </div>
    <div class="col-sm-3 text-center social-share">
      <div class="g-plusone" data-action="share" data-size="standard"
           :data-href="canonicalUrl" data-annotation="bubble"></div>
    </div>
    <div class="col-sm-6 text-center social-share">
      <div class="fb-like" :data-href="canonicalUrl" data-layout="button_count"
           data-action="like" data-show-faces="false" data-share="true"></div>
    </div>
  </div>
</template>

<script>
import {BASE_URL} from "~/helpers/config.js";

export default {
  name: "ShareSocialSites",
  props: ["data"],
  computed: {
    canonicalUrl() {
      return BASE_URL + this.data.path + "/";
    },
    escapedCanonicalUrl() {
      return encodeURI(this.canonicalUrl);
    },
    twitterHref() {
      return "https://twitter.com/intent/tweet?text=Přečteno! Zkuste to taky: " + this.data.title + "&url=" + this.escapedCanonicalUrl + "&via=Lei_cz";
    },
    twitterText() {
      return "Přečteno! Zkuste to taky: " + this.data.title;
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
