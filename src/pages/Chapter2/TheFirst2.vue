<template>
  <div class="wrapper">
    <div class="lesson  lesson11">
      <p v-if="visible">Первый параграф</p>
      <p v-else>Второй параграф</p>
      <button v-on:click="visible=!visible">{{visible ? 'К параграфу 2':'К параграфу 1'}}</button>
      <hr>
      <div v-if="visible">
        <h1>Заголовок 1</h1>
        <p>Параграф 1 </p>
      </div>
      <div v-else>
        <h1>Заголовок 2</h1>
        <p>Параграф 2 </p>
      </div>
      <button @click="visible=!visible">{{visible?'К параграфу 2':'К параграфу 1'}}</button>
      <hr>
      <input type="number" v-model="number">
      <p v-if="number==1">Один</p>
      <p v-else-if="number==2">Два</p>
      <p v-else-if="number > 2 && number < 7">Несколько</p>
      <p v-else>Много</p>
      <hr>
      <div v-show="visible">
        <h2>Something</h2>
        <p>Text</p>
      </div>
      <button v-on:click="visible=!visible">{{visible ? 'Скрыть' : 'Показать'}}</button>
    </div>
    <div class="lesson lesson11">
      <ul>
        <li v-for="user in users"
            :key="user.id">
          <p>Имя: {{user.name}}</p>
          <p>Возраст: {{user.age}}</p>
        </li>
      </ul>
      <ul>
        <li v-for="(user, index) in users" :key="user.id">{{index + 1}}. {{user}}</li>
      </ul>
      <hr>
      <ul>
        <li v-for="user in users" :key="user.id">
          <p v-for="(value,key) in user" :key="value.id">{{key}} : {{value}}</p>
        </li>
      </ul>
      <hr>
      <ul>
        <template v-for="user in users" :key="user.id">
          <li>Name: {{user.name}}</li>
          <li>Age: {{user.age}}</li>
        </template>
      </ul>
      <hr>
      <div>
        <span v-for="n in 10" :key="n.id">{{ n }} </span>
      </div>
      <hr>
        <ul>
          <template v-for="user in users" :key="user.id" >
            <li v-if="user.age > 25">
              <p>Name:{{user.name}}</p>
              <p>Age:{{user.age}}</p>
            </li>
          </template>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFirst2",
  data(){
    return{
      visible: true,
      number: 1,
      users: [
        {name:'Tom', age:22},
        {name:'Bob', age:31},
        {name: 'Sam', age:28}
      ],
      n: 1,
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
  margin:0 auto;
}
.lesson {
  width: 100%;
  border: 1px solid;
  padding: 50px;
  margin: 5px 0;
}
</style>