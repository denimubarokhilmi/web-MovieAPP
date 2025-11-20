<template>
  <!-- Scroll-top -->
  <!-- <button class="scroll-top scroll-to-target" data-target="html">
    <i class="fas fa-angle-up"></i>
  </button> -->
  <!-- Scroll-top-end-->

  <!-- header-area -->
  <header>
    <div id="sticky-header" class="menu-area transparent-header">
      <div class="container custom-container">
        <div class="row">
          <div class="col-12">
            <div class="mobile-nav-toggler">
              <a
                href="#"
                class="text-white me-5 search-mobile"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                ><i class="fas fa-search"></i
              ></a>
              <i
                data-bs-toggle="offcanvas"
                data-bs-target="#demo"
                class="fas fa-bars"
              ></i>
            </div>
            <div class="menu-wrap">
              <nav class="menu-nav show">
                <div class="logo">
                  <router-link to="/" :class="{ active: isactive == 'home' }">
                    <img
                      src="@/assets/img/logo/logo.png"
                      alt="Logo"
                      @click="btnActive('home')"
                    />
                  </router-link>
                </div>
                <div class="navbar-wrap main-menu d-none d-lg-flex">
                  <ul class="">
                    <li
                      class="menu-item-has-children"
                      v-for="(item, index) in page"
                      :key="index - 1"
                      :class="{ active: isactive == item.name }"
                      @click="btnActive(item.name)"
                    >
                      <router-link :to="item.path">{{ item.name }}</router-link>
                    </li>
                  </ul>
                </div>
                <div class="header-action d-none d-md-block">
                  <ul>
                    <li class="header-search">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#search-modal"
                        ><i class="fas fa-search"></i
                      ></a>
                    </li>
                    <!-- <li class="header-lang">
                      <form action="#">
                        <div class="icon"><i class="flaticon-globe"></i></div>
                        <select id="lang-dropdown">
                          <option value="">En</option>
                          <option value="">Au</option>
                          <option value="">AR</option>
                          <option value="">TU</option>
                        </select>
                      </form>
                    </li> -->
                    <li class="header-btn">
                      <!-- <router-link to="/signin" class="btn"
                        >Sign In</router-link
                      > -->
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <!-- Modal Search -->
            <div
              class="modal fade"
              id="search-modal"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <form>
                    <input type="text" placeholder="Search here..." />
                    <button><i class="fas fa-search"></i></button>
                  </form>
                </div>
              </div>
            </div>
            <!-- Modal Search-end -->
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- header-area-end -->

  <!-- canvas  -->
  <div class="offcanvas offcanvas-start bg-black w-100" id="demo">
    <div class="container">
      <div class="offcanvas-header">
        <router-link :class="{ active: isactive == 'home' }" to="/">
          <img
            src="@/assets/img/logo/logo.png"
            alt="Logo"
            data-bs-dismiss="offcanvas"
            @click="btnActive('home')"
          />
        </router-link>
        <button
          type="button"
          class="btn-close btn-close-white fs-5"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div class="nav-canvas">
          <ul>
            <li
              data-bs-dismiss="offcanvas"
              class="menu-item-has-children"
              v-for="(item, index) in page"
              :key="index - 1"
              :class="{ active: isactive == item.name }"
              @click="btnActive(item.name)"
            >
              <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- end canvas  -->

  <!-- modal mobile  -->
  <div
    class="modal fade"
    id="myModal"
    tabindex="-1"
    aria-labelledby="searchModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen">
      <!-- Ganti ke modal-fullscreen -->
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header bg-black border-0">
          <button
            type="button"
            class="btn-close btn-close-white fs-4"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body bg-black d-flex align-items-center">
          <div class="position-relative w-100">
            <input
              type="text"
              class="search-input"
              placeholder="Search Here..."
            />
            <i class="fas searching fa-search search-icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end modal mobile  -->
</template>

<script setup>
import { ref } from "vue";
const isactive = ref("home");
const page = ref([
  {
    name: "home",
    path: "/",
  },
  {
    name: "movie",
    path: "movie",
  },
  {
    name: "tv-show",
    path: "tv-show",
  },
  {
    name: "contact",
    path: "contact",
  },
]);
const btnActive = (name) => {
  isactive.value = name;
};
</script>

<style scoped>
.nav-canvas ul li a {
  color: rgb(255, 255, 255);
  font-size: 1.2em;
}
.nav-canvas ul li a:hover {
  color: rgb(249, 228, 43);
}
.nav-canvas ul li {
  margin-bottom: 1em;
}
.nav-canvas li a:active {
  color: red;
}
.search-mobile {
  display: none;
  font-size: 0.7em;
}

.modal-fullscreen {
  padding: 0;
  margin: 0;
  max-width: 100vw;
  max-height: 100vh;
}
.modal-body {
  padding: 10px;
}
.modal-fullscreen .modal-content {
  height: 100%;
  width: 100%;
  border-radius: 0;
}

/* Search input styling improvement */
.search-input {
  width: 100%;
  /* height: 100px; */
  padding: 30px;
  background: transparent;
  border: none;
  border-bottom: 1px solid grey;
  color: white;
  font-size: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.search-input:focus {
  outline: none;
  border-color: #e0dfdb;
  background: rgba(8, 8, 8, 0.186);
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
}
.searching {
  position: absolute;
  color: orange;
  font-size: 1.6em;
  right: 20px;
  top: 55%;
  transform: translateY(-50%);
  cursor: pointer;
}
@media screen and (max-width: 766px) {
  .mobile-nav-toggler {
    display: flex;
    align-items: center;
  }
  .search-mobile {
    display: block;
  }
}
</style>
