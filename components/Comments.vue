<template>
  <div class="comments">
    <div id="graphcomment"></div>
    <script type="text/javascript">
      /* - - - CONFIGURATION VARIABLES - - - */
      // make sure the id is yours
      window.gc_params = {
        graphcomment_id: "Lei-cz",
        // if your website has a fixed header, indicate it's height in pixels
        fixed_header_height: 0,
      };

      /* - - - DON'T EDIT BELOW THIS LINE - - - */

      (function() {
        var gc = document.createElement("script");
        gc.type = "text/javascript";
        gc.async = true;
        gc.src = "https://graphcomment.com/js/integration.js?" + Date.now();
        (
          document.getElementsByTagName("head")[0] ||
          document.getElementsByTagName("body")[0]
        ).appendChild(gc);
      })();
    </script>
  </div>
</template>

<script>
export default {
  name: "Comments",
};
</script>

<style lang="scss" scoped></style>
