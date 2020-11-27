<template>
  <div>
    <SliderComponent :text="sliderText" :home="sliderHome" />
    <div class="center">
      
      <section id="content">
        <h2 class="subheader">Últimas Entradas</h2>

        <div id="articles" v-if="lastArticles[0] !== undefined">
          <div v-for="article in lastArticles" :key="article._id">
            <ArticleMinComponent :article="article" />
          </div>
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
      lastArticles: [],
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