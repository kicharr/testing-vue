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
          <option v-for="user in users"
                  :key="user.id"
                    v-bind:value="user">{{user.name}}</option>
        </select>
        <span>Выбрано: {{selectedUser.name}} - {{selectedUser.age}}</span>
      </div>
      <hr>
      <div>
        <input type="text" v-model.lazy="name" class="form-control"/>
        <button  type="button">Применить</button>
        <span>
          Введено: {{name}}
        </span>
      </div>
      <hr>
      <div>
        <div class="form-control-wrapper">
          <label for="age">Введите ваш возраст:</label>
          <input type="text" id="age" v-model.number="age" class="form-control"/>
        </div>
        <span>
          Ваш возраст: {{age}} лет
        </span>
      </div>
      <hr>
      <div>
        <input v-model.trim="message">
        <span>Введено: {{message}}</span>
      </div>
      <hr>
      <div>
        <input v-model.lazy.trim="message">
        <input v-model.lazy.number="age" type="number">
        <span>{{age}} - {{message}}</span>
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
      name: '',
      message:'',
      age: 0,
      users:[
        {name:'Tom', age:22},
        {name:'Bob', age:25},
        {name:'Sam', age:28},
        {name:'Alice', age:26}
      ],
      selectedUser: '',
    }
  },
  computed: {
    setName: {

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
.form-control-wrapper {
  display: flex;
  flex-direction: column;
}
</style>