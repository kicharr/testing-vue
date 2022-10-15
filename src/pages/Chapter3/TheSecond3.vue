<template>
  <div class="wrapper">
    <div class="lesson lesson13">
      <select v-model="users" multiple>
        <option>Tom</option>
        <option>Bob</option>
        <option>Sam</option>
        <option>Alice</option>
      </select>
      <p>Выбранно: {{ users }}</p>
      <hr>
      <div>
        <select v-model="selectedUser">
          <option v-for="user in users" :key="user.id" v-bind:value="user">{{user.name}}</option>
        </select>
        <span>Выбрано: {{selectedUser.name}} - {{selectedUser.age}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSecond3",
  data() {
    return{
      user: '',
      users:[
        {name:'Tom', age:22},
        {name:'Bob', age:25},
        {name:'Sam', age:28},
        {name:'Alice', age:26}
      ],
      selectedUser: ''
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 25px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}

.lesson {
  width: 100%;
  border: 1px solid;
  padding: 50px;
  margin: 5px 0;
}
</style>