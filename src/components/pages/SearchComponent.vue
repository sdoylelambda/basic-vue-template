<template>
  <div>
    <SliderComponent :text="sliderText + searchTerm" :home="sliderHome" />
    <div class="center">
      <section id="content">
        <h2 class="subheader">Search</h2>

        <div id="articles" v-if="articles && articles.length > 0">
          <div v-for="article in articles" :key="article._id">
            <ArticleMinComponent :article="article" />
          </div>
        </div>
        <div v-else-if="articles && articles.length < 1">
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
import SidebarComponent from "../reuse/SidebarComponent.vue";
import SliderComponent from '../reuse/SliderComponent.vue';
import ArticleMinComponent from "../reuse/ArticleMinComponent.vue";

export default {
  name: "BlogComponent",
  components: {
    SidebarComponent,
    ArticleMinComponent,
    SliderComponent,
  },
  mounted() {
    this.articleService = new ArticleService();
    this.searchTerm = this.$route.params.searchTerm;
    this.getSearchArticles(this.searchTerm);
  },
  data() {
    return {
      articleService: null,
      articles: null,
      searchTerm: null,
      sliderText: "Search: ",
      sliderHome: false,
    };
  },
  methods: {
    getSearchArticles(searchTerm) {
      this.articleService
        .getSearchArticles(searchTerm)
        .then((response) => {
          if (response.data.status === "success") {
            this.articles = response.data.articles;
          }
        })
        .catch((error) => {
          console.log(error);
          this.articles = [];
        });
    },
  },
};
</script>

<style>
</style>