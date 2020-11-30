<template>
  <div>
    <SliderComponent :text="sliderText" :home="sliderHome" />
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimas Entradas</h2>

        <div id="articles" v-if="lastArticles && lastArticles.length > 0">
          <div v-for="article in lastArticles" :key="article._id">
            <ArticleMinComponent :article="article" />
          </div>
        </div>
        <div v-else-if="lastArticles && lastArticles.length < 1">
          <p>There is no articles</p>
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </section>

      <SidebarComponent />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
// Services
import ArticleService from "../../services/ArticleService";
// Child components
import SliderComponent from "../reuse/SliderComponent.vue";
import SidebarComponent from "../reuse/SidebarComponent.vue";
import ArticleMinComponent from "../reuse/ArticleMinComponent.vue";

export default {
  name: "HomeComponent",
  components: {
    SliderComponent,
    SidebarComponent,
    ArticleMinComponent,
  },
  mounted() {
    this.articleService = new ArticleService();
    this.getLastArticles();
  },
  data() {
    return {
      sliderText: "Welcome to the Vue Test",
      sliderHome: true,
      articleService: null,
      lastArticles: null,
    };
  },
  methods: {
    getLastArticles() {
      this.articleService.getLastArticles().then((response) => {
        if (response.data.status === "success") {
          this.lastArticles = response.data.articles;
        }
      });
    },
  },
};
</script>

<style>
</style>