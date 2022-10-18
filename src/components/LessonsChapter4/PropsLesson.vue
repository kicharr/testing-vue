<template>
  <div class="lesson lesson 15">
    <h2>{{message}}</h2>
    <h3>{{secondMessage}}</h3>
  </div>
</template>

<script>
export default {
  name: "PropsLesson",
  message: 'hello',
  props: ['message'],
  data() {
    return{
      secondMessage: 'test second message',
      welcome: '',
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin: 0 auto;
  border: 1px solid;
  padding: 15px
}
.lesson {
  width: 100%;
  border: 1px solid;
  padding: 50px;
  margin: 5px 0;
}
</style>