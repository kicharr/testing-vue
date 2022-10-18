<template>
  <div class="wrapper">
      <h2 class="h2l15">Введенноё вами значение: {{message}}</h2>
  </div>
</template>

<script>
export default {
  name: "DinamicPropertis",
  data() {
    return{

    }
  },
  props: ['message']
}
</script>

<style scoped>
.wrapper {
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
.h2l15 {
  border: 1px solid;
  padding: 5px;
  border-radius: 5px;
  margin: 0;
}
</style>