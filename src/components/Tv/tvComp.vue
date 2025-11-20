<template>
  <!-- movie-area -->
  <section class="movie-area movie-bg">
    <div class="container">
      <div class="row align-items-end mb-60">
        <div class="col-lg-6">
          <div class="section-title text-center text-lg-left">
            <span class="sub-title">ONLINE STREAMING</span>
            <h2 class="title">Tv Show</h2>
          </div>
        </div>
        <div class="col-lg-6"></div>
      </div>
      <div class="horizontal-scrool mb-5">
        <div class="scroolings text-center">
          <div v-for="(item, index) in genres" :key="index - 1">
            <button
              :class="{ active: activeGenreId == item.name }"
              @click="setActiveGenre(item.name)"
              class="genres"
            >
              {{ item.name }}
            </button>
          </div>
        </div>
      </div>

      <div class="row tr-movie-active">
        <div
          class="col-xl-2 col-lg-3 col-sm-4 mobile-card grid-item grid-sizer cat-two"
        >
          <div class="movie-item movie-item-three mb-50">
            <div class="movie-poster">
              <img src="@/assets/img/poster/ucm_poster01.jpg" alt="" />
              <ul class="overlay-btn">
                <li class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                    class="popup-video btn"
                    >Watch Now</a
                  >
                </li>
                <li><a href="movie-details.html" class="btn">Details</a></li>
              </ul>
            </div>
            <div class="movie-content">
              <div class="w-auto">
                <div>
                  <h5 class="title">
                    <a href="movie-details.html">Women's Day lore</a>
                  </h5>
                </div>
                <div>
                  <span class="date">2021</span>
                </div>
              </div>
              <div class="bottom">
                <ul>
                  <li><span class="quality">hd</span></li>
                  <li>
                    <span class="duration p-2"
                      ><i class="far fa-clock"></i> 128 min</span
                    >
                    <span class="rating"
                      ><i class="fas fa-thumbs-up"></i> 3.5</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-xl-2 col-lg-3 col-sm-4 mobile-card grid-item grid-sizer cat-one"
        >
          <div class="movie-item movie-item-three mb-50">
            <div class="movie-poster">
              <img src="@/assets/img/poster/ucm_poster02.jpg" alt="" />
              <ul class="overlay-btn">
                <li class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                    class="popup-video btn"
                    >Watch Now</a
                  >
                </li>
                <li><a href="movie-details.html" class="btn">Details</a></li>
              </ul>
            </div>
            <div class="movie-content">
              <div class="w-auto">
                <div>
                  <h5 class="title">
                    <a href="movie-details.html">The Perfect Match</a>
                  </h5>
                </div>
                <div>
                  <span class="date">2021</span>
                </div>
              </div>
              <div class="bottom">
                <ul>
                  <li><span class="quality">4k</span></li>
                  <li>
                    <span class="duration p-2"
                      ><i class="far fa-clock"></i> 128 min</span
                    >
                    <span class="rating"
                      ><i class="fas fa-thumbs-up"></i> 3.5</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-xl-2 col-lg-3 col-sm-4 mobile-card grid-item grid-sizer cat-two"
        >
          <div class="movie-item movie-item-three mb-50">
            <div class="movie-poster">
              <img src="@/assets/img/poster/ucm_poster03.jpg" alt="" />
              <ul class="overlay-btn">
                <li class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                    class="popup-video btn"
                    >Watch Now</a
                  >
                </li>
                <li><a href="movie-details.html" class="btn">Details</a></li>
              </ul>
            </div>
            <div class="movie-content">
              <div class="w-auto">
                <div>
                  <h5 class="title">
                    <a href="movie-details.html">The Dog Woof</a>
                  </h5>
                </div>
                <div>
                  <span class="date">2021</span>
                </div>
              </div>
              <div class="bottom">
                <ul>
                  <li><span class="quality">hd</span></li>
                  <li>
                    <span class="duration p-2"
                      ><i class="far fa-clock"></i> 128 min</span
                    >
                    <span class="rating"
                      ><i class="fas fa-thumbs-up"></i> 3.5</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-xl-2 col-lg-3 col-sm-4 mobile-card grid-item grid-sizer cat-one"
        >
          <div class="movie-item movie-item-three mb-50">
            <div class="movie-poster">
              <img src="@/assets/img/poster/ucm_poster04.jpg" alt="" />
              <ul class="overlay-btn">
                <li class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                    class="popup-video btn"
                    >Watch Now</a
                  >
                </li>
                <li><a href="movie-details.html" class="btn">Details</a></li>
              </ul>
            </div>
            <div class="movie-content">
              <div class="w-auto">
                <div>
                  <h5 class="title">
                    <a href="movie-details.html">The Easy Reach</a>
                  </h5>
                </div>
                <div>
                  <span class="date">2021</span>
                </div>
              </div>
              <div class="bottom">
                <ul>
                  <li><span class="quality">hd</span></li>
                  <li>
                    <span class="duration p-2"
                      ><i class="far fa-clock"></i> 128 min</span
                    >
                    <span class="rating"
                      ><i class="fas fa-thumbs-up"></i> 3.5</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-xl-2 col-lg-3 col-sm-4 mobile-card grid-item grid-sizer cat-two"
        >
          <div class="movie-item movie-item-three mb-50">
            <div class="movie-poster">
              <img src="@/assets/img/poster/ucm_poster05.jpg" alt="" />
              <ul class="overlay-btn">
                <li class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                    class="popup-video btn"
                    >Watch Now</a
                  >
                </li>
                <li><a href="movie-details.html" class="btn">Details</a></li>
              </ul>
            </div>
            <div class="movie-content">
              <div class="w-auto">
                <div>
                  <h5 class="title">
                    <a href="movie-details.html">The Cooking</a>
                  </h5>
                </div>
                <div>
                  <span class="date">2021</span>
                </div>
              </div>
              <div class="bottom">
                <ul>
                  <li><span class="quality">hd</span></li>
                  <li>
                    <span class="duration p-2"
                      ><i class="far fa-clock"></i> 128 min</span
                    >
                    <span class="rating"
                      ><i class="fas fa-thumbs-up"></i> 3.5</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-xl-2 col-lg-3 col-sm-4 mobile-card grid-item grid-sizer cat-one cat-two"
        >
          <div class="movie-item movie-item-three mb-50">
            <div class="movie-poster">
              <img src="@/assets/img/poster/ucm_poster06.jpg" alt="" />
              <ul class="overlay-btn">
                <li class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                    class="popup-video btn"
                    >Watch Now</a
                  >
                </li>
                <li><a href="movie-details.html" class="btn">Details</a></li>
              </ul>
            </div>
            <div class="movie-content">
              <div class="w-auto">
                <div>
                  <h5 class="title">
                    <a href="movie-details.html">The Hikaru Night</a>
                  </h5>
                </div>
                <div>
                  <span class="date">2021</span>
                </div>
              </div>
              <div class="bottom">
                <ul>
                  <li><span class="quality">hd</span></li>
                  <li>
                    <span class="duration p-2"
                      ><i class="far fa-clock"></i> 128 min</span
                    >
                    <span class="rating"
                      ><i class="fas fa-thumbs-up"></i> 3.5</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-xl-2 col-lg-3 col-sm-4 mobile-card grid-item grid-sizer cat-one"
        >
          <div class="movie-item movie-item-three mb-50">
            <div class="movie-poster">
              <img src="@/assets/img/poster/ucm_poster07.jpg" alt="" />
              <ul class="overlay-btn">
                <li class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                    class="popup-video btn"
                    >Watch Now</a
                  >
                </li>
                <li><a href="movie-details.html" class="btn">Details</a></li>
              </ul>
            </div>
            <div class="movie-content">
              <div class="w-auto">
                <div>
                  <h5 class="title">
                    <a href="movie-details.html">The Life Quotes</a>
                  </h5>
                </div>
                <div>
                  <span class="date">2021</span>
                </div>
              </div>
              <div class="bottom">
                <ul>
                  <li><span class="quality">hd</span></li>
                  <li>
                    <span class="duration p-2"
                      ><i class="far fa-clock"></i> 128 min</span
                    >
                    <span class="rating"
                      ><i class="fas fa-thumbs-up"></i> 3.5</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-xl-2 col-lg-3 col-sm-4 mobile-card grid-item grid-sizer cat-one cat-two"
        >
          <div class="movie-item movie-item-three mb-50">
            <div class="movie-poster">
              <img src="@/assets/img/poster/ucm_poster08.jpg" alt="" />
              <ul class="overlay-btn">
                <li class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                    class="popup-video btn"
                    >Watch Now</a
                  >
                </li>
                <li><a href="movie-details.html" class="btn">Details</a></li>
              </ul>
            </div>
            <div class="movie-content">
              <div class="w-auto">
                <div>
                  <h5 class="title">
                    <a href="movie-details.html">The Beachball</a>
                  </h5>
                </div>
                <div>
                  <span class="date">2021</span>
                </div>
              </div>
              <div class="bottom">
                <ul>
                  <li><span class="quality">hd</span></li>
                  <li>
                    <span class="duration p-2"
                      ><i class="far fa-clock"></i> 128 min</span
                    >
                    <span class="rating"
                      ><i class="fas fa-thumbs-up"></i> 3.5</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="pagination-wrap mt-30">
            <nav>
              <span>total page : 100</span>
              <ul>
                <li><a href=""><<</a></li>
                <li
                  v-for="(item, index) in 5"
                  :class="{ active: activePageId == index }"
                  :key="index - 1"
                  @click="setActiveGenre(index)"
                >
                  <a>{{ index + 1 }}</a>
                </li>
                <li><a href="">>></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- movie-area-end -->
</template>
<script setup>
import { ref, onMounted } from "vue";

// Data genres (nanti bisa dari API)
const genres = ref([
  { id: 1, name: "Horor" },
  { id: 2, name: "Action" },
  { id: 3, name: "Romantic" },
  { id: 4, name: "Comedy" },
  { id: 5, name: "Drama" },
  { id: 6, name: "Thriller" },
  { id: 7, name: "Sci-Fi" },
  { id: 8, name: "Adventure" },
  { id: 9, name: "Animation" },
  { id: 10, name: "Fantasy" },
]);

const activeGenreId = ref("Horor");
const activePageId = ref(0);

const setActiveGenre = (genreId) => {
  if (isNaN(genreId)) {
    activeGenreId.value = genreId;
  } else {
    activePageId.value = genreId;
  }
};
</script>

<style scoped>
.scroolings {
  display: flex;
  gap: 1rem;
  width: max-content;
}
.horizontal-scrool {
  width: 100%;
  overflow-x: scroll;
  scrollbar-color: transparent transparent;
}
.horizontal-scrool::-webkit-scrollbar {
  display: none;
}
.movie-area {
  background-image: url("@/assets/img/bg/movie_bg.jpg");
}
.genres {
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: #ffffff;
  padding: 8px 30px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.genres:hover {
  background-color: #ffce3d;
}
.genres.active {
  background-color: #ffce3d;
  color: #000000;
}
.pagination-wrap nav ul li a {
  color: #ffffff;
  cursor: pointer;
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
