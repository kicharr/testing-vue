<template>
  <div class="wrapper">
    <input v-model="username" /><a-button @click="save">Save</a-button>
  </div>
</template>

<script>
export default {
  name: "UserChange",
  props: ['name'],
  data(){
    return {
      username: this.name,
    }
  },
  watch: {
    save(newVal) {
      this.username = newVal;
    }
  },
  methods: {
    save(){
      this.$emit('userchange', this.username);
    }
  }
}
</script>

<style scoped>

</style>