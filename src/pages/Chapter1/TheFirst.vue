<template>
  <div class="wrapper">
    <div class="lesson lesson-1">
      <a-input type="text" v-on:input="setMessage" class="in"/>
      <p>Вводимое вами зачение: <strong>{{ message }}</strong></p>
    </div>
    <div class="lesson lesson-2">
      <p>Name: {{ name }}</p>
      <p>Age: {{ age }}</p>

      <p>{{ welcome() }}</p>
      <p>{{ displayUser() }}</p>
    </div>

    <div class="lesson lesson-3">
      <a-input type="text" v-on:input="setAge" class="in"/>
      <p>{{ age > 25 ? `Больше 25 лет` : `25 лет или того меньше` }}</p>
      <hr>
      <p>{{ sayHi() }}</p>
      <p>Ввидите ваше время: {{ welcomeHour(hour) }}</p>
      <p>22 hours: {{ welcomeHour(22) }}</p>
      <a-input type="text" v-on:input="setHour" class="in"/>

      <div>{{ car }}</div>
      <div v-text="car"></div>
      <hr>
      <a
          v-bind:href="link"
          v-bind:title="title"
      >{{ text }}</a>

      <p v-html="newMessage"></p>
      <p>{{ newMessage }}</p>
      <hr>
    </div>
    <div class="lesson lesson-4">
      <a-button v-on:click="counterPlus($event, inform())">+</a-button>
      <span style="border: 1px solid;padding: 5px">{{ counter }}</span>
      <span style="border: 1px solid;padding: 5px" v-html="counter"></span>
      <div>{{ status }}</div>
      <a-button v-on:click="counterMinus($event, inform())">-</a-button>
    </div>
    <div class="lesson lesson-5">
      <a-input type="text"
               v-model:value="userName"/>
      <p>Ваше имя: {{ userName }}</p>
      <hr>
      <p>Ширина:
        <a-input type="number" v-model:value="width" placeholder="Ввидите ширину"/>
      </p>
      <p>Высота:
        <a-input type="number" v-model:value="height" placeholder="Ввидите высоту"/>
      </p>
      <p>Площаль прямоугольника: {{ width * height }}</p>
    </div>

    <div class="lesson lesson-6">
      <a-input type="text" v-model:value="name"/>
      <a-input type="text" v-model:value="age"/>
      <p>Имя: {{ name }} Возраст: {{ age }}</p>
      <p>{{ checkAge() }}</p>
      <p>{{ enabled }}</p>
      <hr>
      <a-input type="text" v-model:value="firstName"/>
      <a-input type="text" v-model:value="lastName"/>

      <a-input v-if="false" type="text" v-model:value="setNewName"/>
      <p>{{ setNewName }}</p>
      <p>{{ fullName }}</p>
      <a-input type="text" @change="test=test.split(',')" v-model:value="test"/>
      <p v-if="test">{{ test.join(" ") }}</p>
      <p>{{ fullName }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "TheFirst",
  data() {
    return {
      test: null,
      message: 'Hello world!',
      name: 'Tom',
      age: 36,
      hour: undefined,
      car: 'Nissan',
      carAge: 5,
      text: 'Google',
      link: 'https://google.com',
      title: 'Google.com',
      newMessage: '<h2>hello</h2>',
      counter: 0,
      status: 'Сообщение',
      userName: 'Tom',
      width: 20,
      height: 20,
      personName: 'Carl',
      personAge: 20,
      firstName: 'tom',
      lastName: 'smith',

      newName: '',
      newSecondName: ''
    }
  },
  computed: {
    enabled: function () {
      console.log("computed");
      if (this.age >= 18) return "доступ разрешен";
      else return "доступ запрещен";
    },
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName;
      },
      set: function (newValue) {
        console.log('fullName');
        const names = newValue.split('\\.')
        this.firstname = names[0]
        this.lastname = names[names.length - 1]
      }
    },
    setNewName: {
      get: function () {
        return this.newName + ' ' + this.newSecondName;
      },
      set: function (newSecondValue) {
        const newNames = newSecondValue.split(' ');
        this.newName = newNames[0];
        this.newSecondName = newNames[newNames.length - 1];
        console.log('newSecondValue')
      }
    }
  },
  methods: {
    setMessage() {
      this.message = event.target.value
    },
    welcome() {
      return "Welcome " + this.name;
    },
    displayUser() {
      return "Name: " + this.name + " Age: " + this.age
    },
    setAge() {
      this.age = event.target.value
    },
    sayHi() {
      return `Привет, меня зовут ${this.name}`;
    },
    welcomeHour(hour) {
      if (hour >= 21 || hour <= 1) return 'Добрый ночи';
      else if (hour > 16) return 'Добрый вечер';
      else if (hour >= 11) return 'Добрый день'
      else if (hour > 11 || hour >= 4) return 'Доброе утро';
    },
    setHour() {
      this.hour = event.target.value
    },
    counterPlus() {
      console.log(event)
      this.counter++
    },
    counterMinus() {
      console.log(event)
      if (this.counter >= 1) this.counter--
    },
    inform() {
      this.status = "Время нажаития на кнопку: " + new Date().toLocaleString();
    },
    checkAge: function () {
      console.log("checkAge");
      if (this.age >= 18) return "доступ разрешен";
      else return "доступ запрещен";
    },
  },
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

.in {
  max-width: 200px;
  width: 100%;
  height: 30px;
}

.lesson {
  width: 100%;
  border: 1px solid;
  padding: 50px;
  margin: 5px 0;
}

.lesson-4 {
  display: flex;
  justify-content: space-evenly;
}
</style>