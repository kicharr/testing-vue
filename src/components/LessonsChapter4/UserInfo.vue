<template>
  <div class="wrapper">
    <p>Name: {{name}}</p><br>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  props: ['name'],
  methods: {
    reset() {
      this.$emit('userreset')
    }
  }
}
</script>

<style scoped>

</style>