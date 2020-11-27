<template>
  <div class="center">

    <section id="content">
      <h2 class="subheader">Blog</h2>

      <div id="articles" v-if="articles[0] !== undefined">
        <div v-for="article in articles" :key="article._id">
          <ArticleMinComponent :article="article" />
        </div>
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
      articles: [],
    };
  },
  methods: {
    getArticles() {
      this.articleService.getArticles().then((response) => {
        if (response.data.status === "success") {
          this.articles = response.data.articles;
        }
      });
    }
  },
};
</script>

<style>
</style>