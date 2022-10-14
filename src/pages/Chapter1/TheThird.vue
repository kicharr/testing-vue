<template>
  <div class="wrapper">
    <div class="lesson lesson-8">
      <h2 ref="header">Hello World!</h2>
      <button v-on:click="change">Change</button>
      <hr>
      <input type="text" v-model="userName">
      <p ref="userName">Ввидите ваше имя: {{userName}}</p>
      <button type="button" v-on:click="changeName">Изменить имя</button>
      <hr>
      <h2>{{message}}</h2>
      <button v-on:click="message='Updated'">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheThird",
  data(){
    return{
      userName:'Tom',
      message:'Hello world Vue 3!'
    }
  },
  methods: {
    change(){
      this.$refs.header.innerText = 'Welcome to Vue3';
    },
    changeName(){
      this.$refs.userName.innerText = 'Вы ввели новое имя:' + ' ' + this.userName;
    }
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate(){
    console.log('beforeUpdate()');
  },
  updated(){
    console.log('updated()');
  },
  beforeUnmount(){
    console.log('beforeUnmount()');
  },
  unmounted(){
    console.log('unmounted()');
  }
};

</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 25px;
  max-width: 1000px;
  width: 100%;
  margin:0 auto;
}
.lesson {
  width: 100%;
  border: 1px solid;
  padding: 50px;
  margin: 5px 0;
}
</style>