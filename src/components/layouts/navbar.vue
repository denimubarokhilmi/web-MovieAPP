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
                  <router-link to="/">
                    <img src="@/assets/img/logo/logo.png" alt="Logo" />
                  </router-link>
                  <!-- 768  -->
                </div>
                <div class="navbar-wrap main-menu d-none d-lg-flex">
                  <ul class="navigation">
                    <li class="active menu-item-has-children">
                      <router-link to="/">Home</router-link>
                      <!-- <ul class="submenu">
                        <li class="active">
                          <a href="index.html">Home One</a>
                        </li>
                        <li><a href="index-2.html">Home Two</a></li>
                      </ul> -->
                    </li>
                    <li class="menu-item-has-children">
                      <router-link to="/movie">movies</router-link>
                      <!-- <ul class="submenu">
                        <li><a href="movie.html">Movie</a></li>
                        <li><a href="movie-details.html">Movie Details</a></li>
                      </ul> -->
                    </li>
                    <li>
                      <router-link to="/tv-show">Tv Show</router-link>
                    </li>
                    <!-- <li><a href="pricing.html">Pricing</a></li> -->
                    <!-- <li class="menu-item-has-children">
                      <a href="#">blog</a>
                      <ul class="submenu">
                        <li><a href="blog.html">Our Blog</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                      </ul>
                    </li> -->
                    <li>
                      <router-link to="/contact">contacts</router-link>
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
                      <router-link to="/signin" class="btn"
                        >Sign In</router-link
                      >
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <!-- Mobile Menu 
            <div class="mobile-menu">
              <div class="close-btn"><i class="fas fa-times"></i></div>

              <nav class="menu-box">
                <div class="nav-logo">
                  <a href="index.html">
                    <img src="@/assets/img/logo/logo.png" alt="" title=""
                  /></a>
                </div>
                <div class="menu-outer"></div>
                <div class="social-links">
                  <ul class="clearfix">
                    <li>
                      <a href="#"><span class="fab fa-twitter"></span></a>
                    </li>
                    <li>
                      <a href="#"
                        ><span class="fab fa-facebook-square"></span
                      ></a>
                    </li>
                    <li>
                      <a href="#"><span class="fab fa-pinterest-p"></span></a>
                    </li>
                    <li>
                      <a href="#"><span class="fab fa-instagram"></span></a>
                    </li>
                    <li>
                      <a href="#"><span class="fab fa-youtube"></span></a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="menu-backdrop"></div> -->
            <!-- End Mobile Menu -->

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
  <div class="offcanvas offcanvas-start bg-black" id="demo">
    <div class="container">
      <div class="offcanvas-header">
        <img src="@/assets/img/logo/logo.png" alt="Logo" />
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div class="nav-canvas">
          <ul class="navigation">
            <li
              data-bs-dismiss="offcanvas"
              class="active menu-item-has-children"
            >
              <router-link to="/">Home</router-link>
            </li>
            <li data-bs-dismiss="offcanvas" class="menu-item-has-children">
              <router-link to="/movie">Movies</router-link>
            </li>
            <li data-bs-dismiss="offcanvas" class="menu-item-has-children">
              <router-link to="/tv-show">Tv Show</router-link>
            </li>
            <li data-bs-dismiss="offcanvas" class="menu-item-has-children">
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- end canvas  -->

  <!-- modal mobile  -->
  <div class="modal" id="myModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header bg-dark border-0">
          <input type="text" placeholder="search here..." />
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
          ></button>
        </div>
      </div>
    </div>
  </div>
  <!-- end modal mobile  -->
</template>

<script setup>
const testing = () => {
  console.log("Testing function called");
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
  font-size: 17px;
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
