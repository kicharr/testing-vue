<template>
  <div class="wrapper">
    <div class="lesson lesson12">
      <label>Логин</label>
      <a-input type="text" v-model:value="login" place-holder="Введите логин" class="form-control"/>
      <label>Пароль</label>
      <a-input type="password" v-model:value="password" place-holder="Введите пароль" class="form-control"/>
      <label>Возраст</label>
      <a-input type="text" v-model:value="age" place-holder="Введите возраст" class="form-control"/>
      <label>Дата регистрации</label>
      <a-input type="date" v-model:value="date" place-holder="Введите дату" class="form-control"/>
      <br>
      <div>
        <h3>Введенная информация:</h3>
        <p>Логин: {{ login }}</p>
        <p>Пароль: {{ password }}</p>
        <p>Возраст: {{ age }}</p>
        <p>Дата регестрации: {{ date }}</p>
      </div>
      <hr>
      <div class="form-wrapper">
        <label>Введите комментарий</label>
        <textarea rows="4" v-model="comment" class="col-md-4"></textarea>
      </div>

      <p style="white-space: pre-line">
        <strong>Комменатрий, который вы ввели:</strong> {{ comment }}</p>
      <br>
      <hr>
      <div style="display:flex; align-items: center">
        <input type="checkbox" id="chechbox" v-model="checked"/>
        <label style="margin-left: 5px" for="chechbox">{{ checked }}</label>
      </div>
      <hr>
      <div>
        <input type="checkbox" v-model="light" v-bind:true-value="on" v-bind:false-value="off" >
        <span v-if="light === on">Выключить</span>
        <span v-else>Включить</span>
      </div>
      <hr>
      <div>
        <input type="checkbox" value="Tom" v-model="selectedUsers"/>
        <label>Tom</label><br>
        <input type="checkbox" value="Sam" v-model="selectedUsers"/>
        <label>Sam</label><br>
        <input type="checkbox" value="Bob" v-model="selectedUsers"/>
        <label>Bob</label><br>
        <input type="checkbox" value="Alice" v-model="selectedUsers"/>
        <label>Alice</label><br>
        <p>Выбрано: {{ selectedUsers }}</p>
      </div>
      <hr>
      <div>
        <template v-for="user in users" :key="user.id">
          <input type="checkbox" v-model="selectedUsers" v-bind:value="user"/>
          <label>{{user.name}}</label>
        </template>
        <ul>
          <li v-for="user in selectedUsers" :key="user.id">{{user.name}} - {{user.age}}</li>
        </ul>
      </div>

      <template>
        <input type="radio" v-bind:value="user" v-model="selectedUsers">
        <label>{{ user.name }}</label><br>
      </template>
      <span v-if="selectedUsers === null">Выбрано: {{selectedUsers.name}} - {{selectedUsers.age}}</span>
      <hr>
      <input type="radio" v-bind:value="{name:'Tom', age:22}" v-model="user">
      <label>Tom</label>
      <br>
      <input type="radio" v-bind:value="{name:'Bob', age:25}" v-model="user">
      <label>Bob</label>
      <br>
      <input type="radio" v-bind:value="{name:'Sam', age:28}" v-model="user">
      <label>Sam</label>
      <br>
      <span>Выбрано: {{user.name}} - {{user.age}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFirst3",
  data() {
    return {
      user:'',
      login: '',
      password: '',
      date: '',
      age: '',
      comment: 'Когда же юности тяжелой,\n' +
          'Пришла Евгению пара,\n' +
          'Пора надежд и грусти нежной,\n' +
          'Monsier прогнали со двора',
      checked: true,
      light: true,
      off: false,
      on: true,
      selectedUsers: [],
      users: [
        {name:'Tom', age:22},
        {name:'Bob', age:25},
        {name:'Sam', age:28},
        {name:'Alice', age:26}
      ],
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

.form-wrapper {
  display: flex;
  flex-direction: column;
}
</style>