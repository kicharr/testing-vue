<template>
  <div class="wrapper">
    <div class="main-block">
      <img class="main-img" src="@/assets/pageNotFound.webp" alt="Page Not Found">
    </div>
  </div>
</template>

<script>
import pageNotFound from '@/assets/pageNotFound.webp'
export default {
  name: "NotFoundPage",
  data() {
    return {
      pageNotFound
    }
  }
}
</script>

<style scoped>
.wrapper {
  height: 100%;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

</style>