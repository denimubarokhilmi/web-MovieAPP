<template>
  <!-- up-coming-movie-area -->
  <section class="top-rated-movie tr-movie-bg">
    <div class="ucm-bg-shape"></div>
    <div class="container">
      <div class="row align-items-end mb-55">
        <div class="col-lg-6">
          <div class="section-title text-center text-lg-left">
            <span class="sub-title">ONLINE STREAMING</span>
            <h2 class="title">{{ titleUpcoming }}</h2>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="ucm-nav-wrap">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li
                class="nav-item"
                role="presentation"
                @click="switchComp($event, 'movies')"
              >
                <a
                  class="nav-link active"
                  id="tvShow-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="tvShow"
                  aria-selected="true"
                  >Movies</a
                >
              </li>

              <li
                class="nav-item"
                role="presentation"
                @click="switchComp($event, 'tv')"
              >
                <a
                  class="nav-link"
                  id="movies-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="movies"
                  aria-selected="false"
                  >TV Shows</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <keep-alive max="2">
        <component :is="isComp"></component>
      </keep-alive>
    </div>
  </section>
  <!-- up-coming-movie-area-end -->

  <!-- services-area -->
  <section class="services-area services-bg">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="services-img-wrap">
            <img
              src="https://image.tmdb.org/t/p/w780//8yR1FK6z1Gx0pyvyXRJrvbxOyuU.jpg"
              alt=""
            />
            <a
              href="@/assets/img/images/services_img.jpg"
              class="download-btn"
              download
              >Download <img src="@/assets/fonts/download.svg" alt=""
            /></a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="services-content-wrap">
            <div class="section-title title-style-two mb-20">
              <span class="sub-title">Our Movie</span>
              <h2 class="title">Download Your Shows Watch Offline.</h2>
            </div>
            <h5 class="text-secondary">Overview :</h5>
            <p>
              Did intelligent beings from outer space visit Earth thousands of
              years ago? From the age of the dinosaurs to ancient Egypt, from
              early cave drawings to continued mass sightings in the US, each
              episode gives historic depth to the questions, speculations,
              provocative controversies, first-hand accounts and grounded
              theories surrounding this age old debate.
            </p>
            <div class="services-list">
              <ul>
                <li>
                  <div class="icon">
                    <i class="flaticon-television"></i>
                  </div>
                  <div class="content">
                    <h5>Enjoy on Your TV.</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consecetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="flaticon-video-camera"></i>
                  </div>
                  <div class="content">
                    <h5>Watch Everywhere.</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consecetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- services-area-end -->
</template>
<script setup>
import { computed, ref } from "vue";
let isComp = ref("movies-dynamic");
let titleUpcoming = ref("Upcoming Movies");
const switchComp = (e, name) => {
  if (name == "movies") {
    isComp.value = "movies-dynamic";
    titleUpcoming.value = "Upcoming Movies";
  } else {
    isComp.value = "tv-dynamic";
    titleUpcoming.value = "On The Air Tv Show";
  }
};
</script>
<style scoped>
.services-area {
  background-image: url("@/assets/img/bg/services_bg.jpg");
}
.top-rated-movie {
  background-image: url("@/assets/img/bg/tr_movies_bg.jpg");
}
a {
  cursor: pointer;
}
</style>
