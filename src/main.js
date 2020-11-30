import Vue from 'vue';
import App from './App.vue';
// External
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import VueMoment from 'vue-moment';  // Date format
import moment from 'moment'; // Spanish config for moment
import 'moment/locale/es'; // Spanish config for moment

// Routes
import HomeComponent from './components/pages/HomeComponent.vue';
import HelloWorld from './components/pages/HelloWorld.vue';
import BlogComponent from './components/pages/BlogComponent.vue';
import FormComponent from './components/pages/FormComponent.vue';
import PageComponent from './components/pages/PageComponent.vue';
import ErrorComponent from './components/pages/ErrorComponent.vue';
import MoviesComponent from './components/pages/MoviesComponent.vue';

Vue.config.productionTip = false

// Router
Vue.use(VueRouter);
// Form Validation
Vue.use(Vuelidate);
// Date format
Vue.use(VueMoment, {moment});

const routes = [
  {path: '/home', name: 'home', component: HomeComponent},
  {path: '/hello', name: 'hello', component: HelloWorld},
  {path: '/blog', name: 'blog', component: BlogComponent},
  {path: '/form', name: 'form', component: FormComponent},
  {path: '/page/:id?', name: 'page', component: PageComponent},
  {path: '/movies', name: 'movies', component: MoviesComponent},
  {path: '/', component: HomeComponent},
  {path: '*', component: ErrorComponent}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});
// End Router

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
