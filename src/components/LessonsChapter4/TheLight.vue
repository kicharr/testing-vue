<template>
  <div class="wrapper">
    <h3>{{ header }}</h3>
    <a-button @click="toggle" v-show="state">{{on}}</a-button>
    <a-button @click="toggle" v-show="!state">{{off}}</a-button>
  </div>
</template>

<script>

export default {
  name: "TheLight",
  data() {
    return {
      state: true,
      on: 'On',
      off: 'Off'
    }
  },
  computed: {
    header() {
      return this.state == true ? 'Свет включен' : 'Свет выключен'
    }
  },
  methods: {
    toggle() {
      this.state = !this.state;
    }
  }
}
</script>

<style scoped>

</style>