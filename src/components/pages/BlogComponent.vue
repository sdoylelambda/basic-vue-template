<template>
  <div class="center">
    <section id="content">
      <h2 class="subheader">Blog</h2>

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
</template>

<script>
// Services
import ArticleService from "../../services/ArticleService";

// Child components
import SidebarComponent from "../reuse/SidebarComponent.vue";
import ArticleMinComponent from "../reuse/ArticleMinComponent.vue";

export default {
  name: "BlogComponent",
  components: {
    SidebarComponent,
    ArticleMinComponent,
  },
  mounted() {
    this.articleService = new ArticleService();
    this.getArticles();
  },
  data() {
    return {
      articleService: null,
      articles: null,
    };
  },
  methods: {
    getArticles() {
      this.articleService.getArticles().then((response) => {
        if (response.data.status === "success") {
          this.articles = response.data.articles;
        }
      });
    },
  },
};
</script>

<style>
</style>