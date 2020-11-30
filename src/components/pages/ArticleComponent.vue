<template>
  <div class="center">
    <section id="content">

      <article class="article-item article-detail" v-if="article">
        <div class="image-wrap" v-if="article.image">
          <img
            :src="api_url + '/get-image/' + article.image"
            :alt="article.title"     
          />
        </div>

        <h1 class="subheader">{{ article.title }}</h1>
        <span class="date"> {{ article.date | moment("from", "now") }} </span>
        <p>
          {{ article.content }}
        </p>

        <div class="clearfix"></div>
      </article>

      <article v-else>
        <p>Loading...</p>
      </article>

    </section>

    <SidebarComponent />
    <div class="clearfix"></div>
  </div>
</template>

<script>
// Services
import ArticleService from "../../services/ArticleService";
// Child Components
import SidebarComponent from "../reuse/SidebarComponent.vue";

export default {
  name: "ArticleComponent",
  components: {
    SidebarComponent,
  },
  mounted() {
    this.articleService = new ArticleService();
    this.articleId = this.$route.params.articleId;
    this.getArticle();
  },
  data() {
    return {
      articleService: null,
      articleId: null,
      article: null,
    };
  },
  methods: {
    getArticle() {
      this.articleService.getArticle(this.articleId).then((response) => {
        if (response.data.status === "success") {
          this.article = response.data.article;
        }
      });
    },
  },
};
</script>

<style>
</style>