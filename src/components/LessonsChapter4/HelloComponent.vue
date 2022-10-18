<template>
  <div class="wrapper">
    <h2>{{header}}</h2>
    <div class="counter-wrapper">
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
  display: flex;
  margin: 0 auto;
  border: 1px solid;
  padding: 15px
}
.counter-wrapper {
  display: flex;
  gap: 15px;
  flex-direction: row;
  align-items: center;
}
.counter-wrapper h2 {
  margin: 0;
}
</style>