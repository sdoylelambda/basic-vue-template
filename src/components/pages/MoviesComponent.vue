<template>
  <div class="center">
    <section id="content">
      <h2 class="subheader">Movies</h2>
      <!-- v-html example (computed properties)-->
      <p v-html="concatenateData"> </p>
      <!-- End v-html example -->
      <!-- filters (pipes) example -->
      <p> {{ this.pageName | convertToUpperCase | concatenateYearAndMessage('Hola Mundo') }} </p>
      <!-- End filters (pipes) example -->
      <!-- Outputs example -->
      <p v-if="favourite !== ''">Favourite Movie: {{ favourite }}</p>
      <!-- End Outputs example -->

      <!--Listado articulos-->
      <div id="articles">
        <div v-for="{ id, title, year, score, img } in this.titleToUppercase" :key="id">
          <MovieComponent
            :title="title"
            :year="year"
            :score="score"
            :img="img"
            v-on:favourite="setFavourite( title )"
          />
        </div>
      </div>
    </section>

    <SidebarComponent />
    <div class="clearfix"></div>
  </div>
</template>

<script>
import MovieComponent from "../reuse/MovieComponent.vue";
import SidebarComponent from "../reuse/SidebarComponent.vue";

export default {
  name: "MoviesComponent",
  components: {
    MovieComponent,
    SidebarComponent
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          title: "Fight Club",
          year: "2016",
          score: "9",
          img:
            "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
        },
        {
          id: 2,
          title: "Batman",
          year: "1992",
          score: "8",
          img:
            "https://movieushermexico.files.wordpress.com/2019/06/92b4a64312055fc4ade1e6254835d6bf.png",
        },
        {
          id: 3,
          title: "Elvira",
          year: "2009",
          score: "10",
          img:
            "https://images-na.ssl-images-amazon.com/images/I/51ZSLmGFW1L._AC_.jpg",
        },
        {
          id: 4,
          title: "LOTR",
          year: "2000",
          score: "9",
          img:
            "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
        },
        {
          id: 5,
          title: "Scream",
          year: "1998",
          score: "5",
          img:
            "https://www.lavanguardia.com/r/GODO/LV/p0/WebSite/2017/05/21/Recortada/86886-148008-11223999-10153726346369553-5039542764015097523-n-584-911-20170521190002@LaVanguardia-Web.jpg",
        },
      ],
      favourite: '',
      // v-html test
      pageName: 'test',
      anotherThing: 'test2',
      andOtherthing: 'test@test.com'
    };
  },
  methods: {
    setFavourite( title ) {
      this.favourite = title;
    }
  },
  computed: {
    titleToUppercase: function() {
      // Copy without reference
      let copyMovies = [];
      for(let movie of this.movies) {
        copyMovies.push({...movie});
      }

      for(let movie of copyMovies) {
        movie.title = movie.title.toUpperCase();
      }

      return copyMovies;
    },
    // v-html test
    concatenateData: function() {
      return this.pageName + ' ' + this.anotherThing + '<br>' + this.andOtherthing;
    }
  },
  filters: {
    convertToUpperCase: function(value) {
      return value.toUpperCase();
    },
    concatenateYearAndMessage: function(value, message) {
      const date = new Date();
      return value + ' - ' + date.getFullYear() + ' - ' + message;
    }
  }
};
</script>

<style>
</style>