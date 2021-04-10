<template>
  <header id="site-header" class="row">
    <div class="col-xs-3 col-sm-4">
    <router-link to="/" title="Lei.cz" id="site-logo"
      ><img
        class="logo"
        src="~/assets/images/lilie.png"
        alt="Zakrvácená lilie"
      />
    </router-link>
    </div>
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

</style>
