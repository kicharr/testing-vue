<template>
  <div class="wrapper">
    <slot v-bind:userinfo="user"></slot>
  </div>
</template>

<script>
export default {
  name: "SlotUser",
  data() {
    return {
      user: {
        name: 'Tom',
        age: 26,
      }
    }
  }
}
</script>

<style scoped>

</style>