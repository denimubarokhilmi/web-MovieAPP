<template>
  <!-- tv-series-area -->
  <section class="tv-series-area tv-series-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section-title text-center mb-50">
            <span class="sub-title">Best TV Series</span>
            <h2 class="title">World Best TV Series</h2>
          </div>
        </div>
      </div>
      <div class="row tr-movie-active">
        <!-- card movie -->
        <CardMoives
          v-for="movie in movies"
          :key="movie.id"
          :movieTitle="movie.name"
          :release="movie.first_air_date"
          :imgSrc="movie.poster_path"
          :rating="movie.vote_average"
        />
        <!-- card movie end -->
      </div>
      <div class="tombol justify-content-center d-flex">
        <button
          type="button"
          @click="btnMore"
          :data-page="2"
          class="btn-more-movie"
        >
          More Tv Series..
        </button>
      </div>
    </div>
  </section>
  <!-- tv-series-area-end -->
</template>
<script setup>
import CardMoives from "../layouts/card-moives.vue";
import { ref } from "vue";
import callAPi from "../../../utils/api.js";
import spinner from "../../../utils/spinner.js";
const movies = ref([]);

(async () => {
  try {
    const data = await callAPi(
      "https://api.themoviedb.org/3/tv/popular?page=1"
    );
    movies.value.push(...data.results);
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
  }
})();

const btnMore = async (e) => {
  try {
    const page = e.target.dataset.page;
    e.target.disabled = true;
    e.target.parentElement.previousElementSibling.insertAdjacentHTML(
      "afterend",
      spinner()
    );
    const data = await callAPi(
      `https://api.themoviedb.org/3/tv/popular?page=${page}`
    );
    const spins = document.querySelector(".create-spinner");
    setTimeout(() => {
      movies.value.push(...data.results);
      spins.remove();
      e.target.disabled = false;
    }, 1000);
    e.target.dataset.page++;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
  }
};
</script>
<style scoped>
.tv-series-area {
  background-image: url("@/assets/img/bg/tv_series_bg.jpg");
}
@media screen and (max-width: 390px) {
  .mobile-card {
    width: 170px;
  }
  .tr-movie-active {
    justify-content: space-between;
  }
}
@media screen and (max-width: 354px) {
  .mobile-card {
    width: 152px;
    margin: auto;
  }
}
</style>
