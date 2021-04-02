<template>
  <header id="site-header" class="row">
    <router-link to="/" title="Lei.cz" class="col-xs-3 col-sm-4"
      ><img
        class="logo"
        src="~/assets/images/lilie.png"
        alt="Zakrvácená lilie"
      />
    </router-link>
    <div class="col-xs-9 col-sm-8">
      <h5 id="site-logo-text" class="motto">
        Život je příběh<br />Příběhy jsou můj život
      </h5>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  margin-bottom: 1rem;

  a {
    display: block;
  }
}
.logo {
  max-width: 4rem;
  margin-right: 1rem;
}
.motto {
  margin: 0;
  font-size: 1.1rem;
  transform: rotate(-10deg);
}
</style>
