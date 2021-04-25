<template>
  <div class="post">
    <h3>
      <NuxtLink :to="this.data.path">{{ data.title }}</NuxtLink>
    </h3>
    <p class="post__description" v-show="data.description">
      {{ data.description }}
    </p>
    <p class="post__info">
      <span class="fa fa-calendar" title="Napsáno dne"></span>
      {{ data.date }}
      <span class="tags" v-show="data.tags">
        <span class="fa fa-tags" title="Seznam tagů"></span>
          <NuxtLink class="label"
                    v-for="(item, index) in data.tags"
                    v-bind:key="index" :to="'/tagy/' + item"
          ><span>{{ item }}</span></NuxtLink>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "CreationListLine",
  props: ["data"],
};
</script>

<style lang="scss">

</style>
