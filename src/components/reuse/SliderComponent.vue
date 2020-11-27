<template>
  <div id="slider" :class="{
    'slider-big': home,
    'slider-small': !home
  }">
    <h1>{{ text }}</h1>
    <router-link :to="{ name: 'blog', params: {} }" class="btn-white" v-if="home">Ir al blog</router-link>
  </div>
</template>

<script>
export default {
  name: "SliderComponent",
  props: ["text", "home"]
};
</script>

<style>
</style>