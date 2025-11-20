<template>
  <!-- live-area -->
  <section class="live-area live-bg fix">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-5 col-lg-6">
          <div class="section-title title-style-two mb-25">
            <span class="sub-title">ONLINE STREAMING</span>
            <h2 class="title">Live Movie & TV Shows For Friends & Family</h2>
          </div>
          <div class="live-movie-content">
            <h2 class="title text-black fs-4">
              Transformers Age Of Extinction
            </h2>

            <h5 class="text-bold text-black">Overview:</h5>
            <p>
              As humanity picks up the pieces after the battle of Chicago, a
              shadowy group reveals itself in an attempt to control the
              direction of history…while an ancient, powerful new menace sets
              Earth in its crosshairs. With help from Cade Yeager, Optimus Prime
              and the Autobots rise to meet their most fearsome challenge yet.
            </p>
            <div class="live-fact-wrap">
              <div class="resolution">
                <h2>HD 4K</h2>
              </div>
              <!-- <div class="active-customer">
                <h4><span class="odometer" data-count="20"></span>K+</h4>
                <p>Active Customer</p>
              </div> -->
            </div>
            <a
              href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
              class="btn popup-video"
              ><i class="fas fa-play"></i> Watch Now</a
            >
          </div>
        </div>
        <div class="col-xl-7 col-lg-6">
          <div
            class="live-movie-img wow fadeInRight"
            data-wow-delay=".2s"
            data-wow-duration="1.8s"
          >
            <img
              src="https://image.tmdb.org/t/p/w780/wxr4Z6E83h14CogsZOzDm1vuDX3.jpg"
              alt="bg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- live-area-end -->
</template>
<script setup></script>
<style scoped>
.live-area {
  background-image: url("@/assets/img/bg/live_bg.jpg");
}
</style>
