<template>
  <div class="wrapper">
    <div class="lesson">
      <the-light/>
      <the-enabled/>
    </div>
  </div>
</template>

<script>
import TheLight from "@/components/LessonsChapter4/TheLight";
import TheEnabled from "@/components/LessonsChapter4/TheEnabled";
export default {
  components: {TheLight,TheEnabled},
  name: "TheFirst5",
}
</script>

<style scoped>
.wrapper {
  padding: 25px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}

.lesson {
  width: 100%;
  border: 1px solid;
  padding: 50px;
  margin: 5px 0;
}

</style>