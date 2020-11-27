<template>
  <div>
    <SliderComponent :text="sliderText" :home="sliderHome" />
    <div class="center">

      <section id="content">
        <h2 class="subheader">Test Page</h2>
        <h3>ID: {{ id }}</h3>
        <h3>{{ name }}</h3>
        <button @click="updateName()">Update Name</button>
        <button @click="redirectToBlog()">Redirect to blog</button>
      </section>

      <SidebarComponent />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from '../reuse/SidebarComponent.vue';
import SliderComponent from '../reuse/SliderComponent.vue';

export default {
  name: "PageComponent",
  components: {
    SidebarComponent,
    SliderComponent
  },
  created() {
    console.log("Page created");
  },
  mounted() {
    this.id = this.$route.params.id;
    console.log("Page Mounted");
  },
  updated() {
    console.log("Page updated");
  },
  destroyed() {
    console.log("Page destroyed");
  },
  data() {
    return {
      id: null,
      name: "test",
      flag: 1,
      sliderText: "Test Page One",
      sliderHome: false
    };
  },
  methods: {
    updateName() {
      this.name = "Test Ok " + this.flag++;
    },
    redirectToBlog() {
      this.$router.push({ name: "blog", params: {} });
    },
  },
};
</script>

<style>
</style>