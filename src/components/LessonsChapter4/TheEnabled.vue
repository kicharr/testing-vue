<template>
  <div class="wrapper">
    Сосотояние: {{ state ? 'Доступ открыт' : 'Доступ закрыт' }}
    <a-button @click="toggle" v-show="state">{{ on }}</a-button>
    <a-button @click="toggle" v-show="!state">{{ off }}</a-button>
  </div>
</template>

<script>
export default {
  name: "TheEnabled",
  data() {
    return {
      state: true,
      on: 'On',
      off: 'Off'
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