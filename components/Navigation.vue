<template>
  <nav>
    <ul class="nav nav-tabs nav-justified main-menu">
      <router-link to="/" class="home" active-class="active" tag="li" exact
        ><a title="Co je nového">Novinky</a></router-link
      >
      <router-link
        to="/tvorba/"
        tag="li"
        v-bind:class="isCreationsRoute ? 'creations active' : 'creations'"
        ><a title="Moje tvorba - povídky, básničky a pod.">Tvorba</a>
      </router-link>
      <router-link
        to="/vzkaznik/"
        class="guestbook"
        active-class="active"
        tag="li"
        ><a title="Napište mi ;)">Vzkazník</a></router-link
      >
      <router-link to="/blog/" class="blog" active-class="active" tag="li"
        ><a title="Prostě blog">Blog</a>
      </router-link>
    </ul>
    <ul class="nav nav-pills sub-menu" v-show="isCreationsRoute">
      <router-link
        to="/povidky/"
        class="creations"
        active-class="creations--active"
        tag="li"
        ><a title="Povídky">Povídky</a>
      </router-link>
      <router-link
        to="/basnicky/"
        class="creations"
        active-class="creations--active"
        tag="li"
        ><a title="Moje pokusy na poli poezie">Básničky</a>
      </router-link>
      <router-link
        to="/textiky/"
        class="creations"
        active-class="creations--active"
        tag="li"
        ><a title="Krátké texty, obvykle poněkud praštěné ;)">Textíky</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
import { CREATIONS_PATHS } from "~/helpers/config.js";
export default {
  name: "Navigation",

  computed: {
    isCreationsRoute() {
      // console.log(CREATIONS_PATHS);
      // console.log("Route name:  " + this.$route.name);
      if (CREATIONS_PATHS.includes(this.$route.name)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sub-menu {
  .creations:hover a,
  .creations--active a {
    background: rgba(144, 82, 0, 0.2);
  }
}
</style>
