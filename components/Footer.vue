<template>
  <footer id="site-footer" class="text-center">
    <hr class="hr-text" />
    <span>&copy;2003 - {{ thisYear }} Lei</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    thisYear() {
      let d = new Date();
      return d.getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  text-align: center;
}
</style>
