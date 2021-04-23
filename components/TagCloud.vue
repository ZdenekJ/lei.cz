<template>
  <div class="tag_cloud" v-show="dataWithTags && dataWithTags.length > 0">
    <h5><div>Tagy</div></h5>
    <div class="allTags">
      <span v-for="item in tagCloud" class="tag" :class="item.cssClass"><NuxtLink :to="'/tagy/' + item.tag"><span>{{ item.tag}}</span></NuxtLink> </span>
    </div>
  </div>
</template>

<script>

export default {
  name: "TagCloud",
  props: ["data"],
  data() {
    return {
      dataWithTags: null,
      tagCloud: null
    };
  },
  methods: {
    maxOccurrenceCounter(data) {
      const occurrenceMap = new Map();
      data.forEach(el => {
        el.tags.forEach(tag => {
          if (occurrenceMap.has(tag))
          {
            occurrenceMap.set(tag, occurrenceMap.get(tag) + 1);
          }
          else
          {
            occurrenceMap.set(tag, 1);
          }
        })
      });
      return occurrenceMap;
    }
  },
  computed: {},
  mounted() {
    this.dataWithTags = this.data.filter(el => el.tags !== undefined);
    const occurrences = this.maxOccurrenceCounter(this.dataWithTags);

    let maxOccurrence = 0;
    occurrences.forEach(value =>
        value > maxOccurrence ? maxOccurrence = value : ''
    );
    const tagsMap = new Map();
    const tags = [];
    occurrences.forEach((value, key) => tags.push(key));
    tags.sort();
    const tagCloud = [];
    tags.forEach((el) => {
          const value = occurrences.get(el);
          let cssClass = 'tag--small';
          if (value === maxOccurrence) cssClass = 'tag--biggest'
          else if (value >= (maxOccurrence * 2 / 3)) cssClass = 'tag--big'
          else if (value >= (maxOccurrence / 3)) cssClass = 'tag--medium';

          tagCloud.push({tag : el, cssClass : cssClass })
        }
    );
    this.tagCloud = tagCloud;
  }
};
</script>

<style lang="scss" scoped></style>
