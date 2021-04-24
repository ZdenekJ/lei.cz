<template>
  <footer class="text-center">
    <hr class="hr-text" />
    <span>&copy;2003 - {{ thisYear }} Lei</span>
    <script type="text/javascript">
             let stylesheet = document.createElement('link');
             stylesheet.href = '//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css';
             stylesheet.rel = 'stylesheet';
             stylesheet.type = 'text/css';
             document.getElementsByTagName('head')[0].appendChild(stylesheet);
       </script>
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

</style>
