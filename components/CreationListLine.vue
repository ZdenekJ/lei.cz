<template>
  <div class="post">
    <div class="row">
      <div class="col-xs-12">
        <h3>
          <NuxtLink :to="this.data.path">{{ data.title }}</NuxtLink>
        </h3>
      </div>
    </div>

    <div class="row" v-show="data.description">
      <div class="col-xs-12">
        <p>{{ data.description }}</p>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        <p>
          <span class="fa fa-calendar" title="Napsáno dne"></span>
          {{ data.date }}
          <span v-show="data.tags">
            <span class="fa fa-tags" title="Seznam tagů"></span>
            <span
              class="tags"
              v-for="(item, index) in data.tags"
              v-bind:key="index"
              ><NuxtLink :to="'/tagy/' + item"
            ><span class="label label-default">{{ item }}</span></NuxtLink>
              </span
            >
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreationListLine",
  props: ["data"],
};
</script>

<style lang="scss">
.tags + .tags {
  margin-left: 0.4em;
}
</style>
