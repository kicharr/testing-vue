<template>
  <div class="wrapper">
    <div class="lesson lesson13">
      <HelloComponent/>
    </div>
  </div>
</template>


<script>
import HelloComponent from "@/components/LessonsChapter4/HelloComponent";
export default {
  components: {HelloComponent},
  name: "TheFirst4"
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

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