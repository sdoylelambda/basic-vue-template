<template>
  <div>
    <SliderComponent :text="sliderText" :home="sliderHome" />
    <div class="center">

      <section id="content">
        <h2 class="subheader">{{ title }}</h2>

        <hr />
        <h3>Reactivity</h3>
        <input type="text" name="" id="" v-model="input" />
        <p>Valor input: {{ input }}</p>
        <!-- <pre>
      {{ $data }}
    </pre> -->
        <hr />

        <hr />
        <h3>Conditionals</h3>
        <input type="number" v-model="age" />
        <p>Age: {{ age }}</p>
        <p class="alert-success-prov" v-if="age && age >= 18 && age < 65">
          Mayor de edad
        </p>
        <p class="alert-danger-prov" v-else-if="age && age < 18">
          Menor de edad
        </p>
        <p class="alert-purple-prov" v-else-if="age && age >= 65">Jubilado</p>
        <p class="alert-danger-prov" v-else>Ingrese edad</p>
        <hr />

        <hr />
        <h3>Loops in basic array</h3>
        <ul class="list-prov">
          <li v-for="(movie, index) in movies" :key="movie.uuid">
            {{ index }} - {{ movie }}
          </li>
        </ul>
        <hr />

        <hr />
        <h3>Loops in object array</h3>
        <ul class="list-prov">
          <li v-for="{ id, name, score } in superMovies" :key="id">
            {{ id }} - {{ name }} - {{ score }}
          </li>
        </ul>
        <hr />
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
  name: "HelloWorld",
  components: {
    SliderComponent,
    SidebarComponent
  },
  data() {
    return {
      title: "Hello World",
      input: "",
      age: 18,
      movies: ["Batman", "Spiderman", "LOTR", "Star Wars", "Fight Club"],
      superMovies: [
        { id: 1, name: "batman", score: "6" },
        { id: 2, name: "Fight club", score: "7" },
        { id: 3, name: "LOTR", score: "8" },
        { id: 4, name: "Captain Marvel", score: "3" },
        { id: 5, name: "Linterna verde", score: "5" },
      ],
      sliderText: "Test Page Two",
      sliderHome: false
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
