<template>
  <article class="article-item">
    <div class="image-wrap">
      <img
        :src="api_url + '/get-image/' + article.image"
        :alt="article.title"
        v-if="article.image"
      />
      <img
        src="../../assets/images/no-img.jpg"
        :alt="article.title"
        v-if="!article.image"
      />
    </div>

    <h2>{{ article.title }}</h2>
    <span class="date"> {{ article.date | moment('from', 'now') }} </span>
    <router-link :to="{ name: 'article', params: {articleId: article._id} }">Leer más</router-link>

    <div class="clearfix"></div>
  </article>
</template>

<script>
// Global variables
import Global from "../../Global";

export default {
  name: "ArticleMinComponent",
  props: ["article"],
  data() {
    return {
      api_url: Global.api_url
    };
  },
};
</script>

<style>
</style>