<template>
  <loader v-if="isLoading"></loader>
  <backToTop></backToTop>
  <Navbar></Navbar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

import Navbar from "./components/layouts/navbar.vue";
import Footer from "./components/layouts/footer.vue";
import backToTop from "./components/layouts/backToTop.vue";
import loader from "./components/layouts/loader.vue";

const isLoading = ref(true);
const route = useRoute();
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});

watch(
  () => route.path,
  () => {
    isLoading.value = true;
    setTimeout(() => {
      isLoading.value = false;
    }, 500);
  }
);
</script>

<style></style>
