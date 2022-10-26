<template>
  <div class="wrapper">
    <a-button class="btn" @click="changefnup()" type="primary">+</a-button>
    <a-button class="btn" @click="changefndown()" type="primary">-</a-button>
  </div>
</template>

<script>

export default {
  name: "newCounter",
  props:['changefnup', 'changefndown']
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>