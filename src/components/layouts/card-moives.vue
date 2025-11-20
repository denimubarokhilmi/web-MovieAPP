<template>
  <div
    class="col-xl-2 mobile-card mb-5 col-lg-3 col-sm-4 mobile-card grid-item grid-sizer cat-two"
  >
    <div class="movie-item">
      <div class="movie-poster">
        <a href="movie-details.html"
          ><img :src="`${pathImage}${imgSrc}`" alt="imgmovie"
        /></a>
      </div>
      <div class="movie-content">
        <div class="w-auto">
          <div>
            <h5 class="title">
              <a href="movie-details.html">{{ movieTitle }} </a>
            </h5>
          </div>
          <div>
            <span class="date">{{ release }}</span>
          </div>
        </div>
        <div class="bottom">
          <ul>
            <li><span class="quality">hd</span></li>
            <li>
              <span class="rating"
                ><i class="fas fa-thumbs-up"></i>{{ rating.toFixed(1) }}</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
const pathImage = "https://image.tmdb.org/t/p/w300";

defineProps({
  movieTitle: {
    type: String,
    required: true,
  },
  release: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});
</script>
