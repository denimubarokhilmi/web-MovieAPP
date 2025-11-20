<template>
  <div class="create-spinner text-center mb-4" v-if="loading">
    <div class="spinner-border text-warning"></div>
    <p class="text-white">Please wait..</p>
  </div>
  <div class="row tr-movie-active">
    <!-- card movie -->
    <CardMoives
      v-for="movie in movies"
      :key="movie.id"
      :movieTitle="movie.title"
      :release="movie.release_date"
      :imgSrc="movie.poster_path"
      :rating="movie.vote_average"
    />
    <!-- card movie end -->
  </div>
  <div class="tombol justify-content-center d-flex" v-if="showBtn">
    <button
      type="button"
      @click="btnMore"
      :data-page="2"
      class="btn-more-movie"
    >
      More Movie..
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import callAPi from "../../../utils/api.js";
import CardMoives from "../layouts/card-moives.vue";
import spinner from "../../../utils/spinner.js";
const movies = ref([]);
const loading = ref(true);
const showBtn = ref(false);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
(async () => {
  try {
    const data = await callAPi(
      "https://api.themoviedb.org/3/movie/upcoming?page=1"
    );
    movies.value.push(...data.results);
    showBtn.value = true;
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
      `https://api.themoviedb.org/3/movie/upcoming?page=${page}`
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
  }
}
</style>
