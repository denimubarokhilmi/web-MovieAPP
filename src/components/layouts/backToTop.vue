<template>
  <button
    @click="scrollToTop"
    class="scroll-top scroll-to-target"
    data-target="html"
  >
    <i class="fas fa-angle-up"></i>
  </button>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
