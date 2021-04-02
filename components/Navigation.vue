<template>
  <nav>
    <ul class="nav nav-tabs nav-justified main-menu">
      <router-link to="/" class="home" active-class="active" tag="li" exact
        ><a title="Co je nového">Novinky</a></router-link
      >
      <router-link
        to="/tvorba/"
        class="creations"
        active-class="active"
        tag="li"
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
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: "Headland One", Arial, sans-serif;
  letter-spacing: 0.1rem;
}
li {
  position: relative;
  display: flex;
  height: 3rem;
  margin-bottom: 0.25rem;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0.3em;
    display: block;
    width: 1em;
    height: 100%;
    z-index: -1;
    opacity: 1;
    transition: all 0.2s ease;
  }

  &.active,
  &:hover {
    &::before {
      width: 100%;
    }

    a {
      color: #eee;
    }
  }
}
.home::before {
  background-color: var(--menu-home-color);
}
.creations::before {
  background-color: var(--menu-creations-color);
}
.guestbook::before {
  background-color: var(--menu-guestbook-color);
}
.blog::before {
  background-color: var(--menu-blog-color);
}
a {
  text-decoration: none;
}
.active {
  font-weight: bold;
}
</style>
