<template>
  <div>
    <input type="text" v-model="userName" @input="onUserChange">
    <p>Name: {{userName}}</p>
  </div>
</template>

<script>
export default {
  name: "UserEdit",
  data() {
    return {
      userName: this.user
    }
  },
  methods: {
    onUserChange() {
      this.$emit('userchange', this.userName)
    }
  }
}
</script>

<style scoped>

</style>