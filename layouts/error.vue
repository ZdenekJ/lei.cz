<template>
  <div id="main">
    <h1 class="text-center">Nenalezeno :(</h1>

    <p>Tak tohle jsem ještě nenapsal. <a href="/">Zkuste něco jiného ;)</a></p>

    <p><small>error 404</small></p>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error' // you can set a custom layout for the error page
}
</script>
