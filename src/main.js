import { createApp } from 'vue'
import App from './App.vue'
import navbar from './components/layouts/navbar.vue';
import footer from './components/layouts/footer.vue';
import routers from './router/router.js';
import moviesDynamic from './components/home/moviesDynamic.vue';
import tvDynamic from './components/home/tvDynamic.vue';
import topMovies from './components/home/topMovies.vue';
import topTv from './components/home/topTv.vue';
const app = createApp(App);
app.component("Navbar", navbar);
app.component("Footer", footer);
app.component("movies-dynamic", moviesDynamic);
app.component("tv-dynamic", tvDynamic);
app.component('top-movies', topMovies);
app.component("top-tv", topTv)
app.use(routers);
app.mount('#app');
app.config.errorHandler = (err, vm, info) => {
    console.error(`Error: ${err.toString()}\nInfo: ${info}`);
}