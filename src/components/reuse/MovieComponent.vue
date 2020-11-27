<template>
  <article class="article-item" id="article-template">
    <div class="image-wrap">
      <img :src="img" :alt="title" :title="title" />
    </div>

    <h2>{{ title }}</h2>
    <span
      class="date"
      :class="{
        yeargreen: year >= 2015,
        yearred: year < 2015,
      }"
    >
      Year: {{ year }}
    </span>
    <span class="date"> Score: {{ score }} </span>
    <a href="#">Leer más</a>
    <input type="button" value="Favourite" v-on:click="chooseFavourite( title )" >

    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: "MovieComponent",
  props: ["img", "title", "year", "score"],
  methods: {
    chooseFavourite( movieTitle ){
      return this.$emit('favourite', movieTitle);
    }
  }
};
</script>

<style>
</style>