<template>
  <nav>
    <ul class="nav nav--mainMenu">
      <li class="nav__item" role="presentation">
        <router-link to="/" class="nav__link home" active-class="active"
                     title="Co je nového?" exact
        >Novinky
        </router-link
        >
      </li>
      <li class="nav__item" role="presentation">
        <router-link
            to="/tvorba/"
            class="nav__link"
            v-bind:class="isCreationsRoute ? 'creations active' : 'creations'"
            title="Moje tvorba - povídky, básničky a pod."
        >Tvorba
        </router-link>
      </li>
      <li class="nav__item" role="presentation">
        <router-link
            to="/vzkaznik/"
            class="nav__link guestbook"
            active-class="active" title="Napište mi ;)"
        >Vzkazník
        </router-link
        >
      </li>
      <li class="nav__item" role="presentation">
        <router-link to="/blog/" class="nav__link blog" active-class="active"
                     title="Prostě blog"
        >Blog
        </router-link>
      </li>
    </ul>
    <ul class="nav nav--subMenu" v-show="isCreationsRoute">
      <li role="presentation" class="nav__item">
        <router-link
            to="/povidky/"
            class="nav__link creations"
            active-class="creations--active"
            title="Povídky"
        >Povídky
        </router-link>
      </li>
      <li role="presentation" class="nav__item">
        <router-link
            to="/basnicky/"
            class="nav__link creations"
            active-class="creations--active"
            title="Moje pokusy na poli poezie"
        >Básničky
        </router-link>
      </li>
      <li role="presentation" class="nav__item">
        <router-link
            to="/textiky/"
            class="nav__link creations"
            active-class="creations--active"
            title="Krátké texty, obvykle poněkud praštěné ;)"
        >Textíky
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import {CREATIONS_PATHS} from "~/helpers/config.js";

export default {
  name: "Navigation",
  computed: {
    isCreationsRoute() {
      return CREATIONS_PATHS.includes(this.$route.name.replace("-slug", "")); // vraci true | false
    },
  },
  updated() {
    this.$nextTick(function () {
      document.activeElement.blur();
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
