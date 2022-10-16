<template>
  <div class="wrapper">
    <h2>{{header}}</h2>
    <hr>
    <div>
      <button v-on:click="increase">+</button>
      <h2>{{counter}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloComponent",
  data() {
    return {
      header: 'Header',
      counter: 0,
    }
  },
  computed: {

  },
  methods: {
    increase() {
      return this.counter++
    }
  }

}
</script>

<style scoped>
.wrapper {
  margin: 0 auto;
}
</style>