<template>
  <!-- top-rated-movie -->
  <section class="top-rated-movie tr-movie-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section-title text-center mb-50">
            <span class="sub-title">ONLINE STREAMING</span>
            <h2 class="title">Top Rated Movies and Tv Series</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="tr-movie-menu-active text-center">
            <button
              class="active top-rated"
              @click="isActiveTopRated($event, 'tv')"
            >
              TV Shows
            </button>
            <button
              class="top-rated"
              @click="isActiveTopRated($event, 'movies')"
            >
              Movies
            </button>
          </div>
        </div>
      </div>
      <component :is="isComp"></component>
    </div>
  </section>
  <!-- top-rated-movie-end -->
</template>

<script setup>
import { ref, onMounted } from "vue";
let isComp = ref("top-tv");

const isActiveTopRated = (e, name) => {
  const actives = e.target.classList.contains("active");
  if (!actives && name == "movies") {
    isComp.value = "top-movies";
    e.target.setAttribute("class", "active");
    const prev = e.target.previousElementSibling;
    prev.classList.remove("active");
  } else {
    e.target.setAttribute("class", "active");
    isComp.value = "top-tv";
    const next = e.target.nextElementSibling;
    next.classList.remove("active");
  }
  return;
};
</script>
<style scoped>
.top-rated-movie {
  background-image: url("@/assets/img/bg/tr_movies_bg.jpg");
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
