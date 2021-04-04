<template>
  <div class="post">
    <div class="row">
      <div class="col-xs-12">
        <h3>
          <a :href="data.path">{{ data.title }}</a>
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
