<template>
  <div class="wrapper">
    <div class="lesson lesson11">
      <p>
        <input type="text" v-model="newUser"/>
        <button v-on:click="users.push(newUser)">Добавить пользовтеля</button>
      </p>
      <ul>
        <li v-for="(user) in users" :key="user.id">
          <p>
            {{ user }}
            <button v-on:click="users.splice">Удалить</button>
          </p>
        </li>
      </ul>
      <hr>
      <ul>
        <li v-for="phone in phones" :key="phone.id">
          <p>{{phone}}</p>
        </li>
      </ul>
      <button v-on:click="updateList" >Обновить</button>
      <hr>
      <input v-model="start" type="number" />
      <input v-model="end" type="number" />
      <ul>
        <li v-for="phone in visibleList" :key="phone.id">
          <p>{{phone}}</p>
        </li>
      </ul>
      <hr>
      <p><input type="text" v-model="company"></p>
      <ul>
        <li v-for="phone in filteredList" :key="phone.id">
          <p>{{ phone.title }} - {{ phone.company }}</p>
        </li>
      </ul>
    </div>
    <div class="interaction-buttons">
      <a-button>
        <router-link to="/">На главную</router-link>
      </a-button>
      <div class="int++">
        <a-button>
          <router-link to="/2.1">К предыдущей</router-link>
        </a-button>
        <a-button>
          <router-link to="/3.1">К следующей</router-link>
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSecond2",
  data() {
    return {
      sortParam:'',
      newPhones: [
        {title:'iPhone 12', company:'Apple', price: 65000},
        {title:'Galaxy S20', company:'Samsung', price: 63000},
        {title:'Galaxy A10', company:'Samsung', price: 38000},
        {title:'iPhone 10', company:'Apple', price: 45000},
        {title:'Xiaomi Redmi 8', company:'Xiaomi', price: 42000}
      ],
      newUser: '',
      company:'',
      users: [
        'Tom',
        'Anton',
        'Egor',
        'Oleg'
      ],
      start:0,
      end:3,
      phones: [
        {
          title:'iPhone 12',
          company:'Apple'
        },
        {
          title:'iPhone 10',
          company:'Apple'
        },
        {
          title:'Galaxy S20',
          company:'Samsung'
        },
        {
          title:'Galaxy A10',
          company:'Samsung'
        },
        {
          title:'Xiaomi Redmi 8',
          company:'Xiaomi'
        }
      ]
    }
  },
  methods: {
    updateList(){
      this.phones = this.phones.slice(1,3);
    },
  },
  computed: {
    visibleList() {
      return this.phones.slice(this.start,this.end)
    },
    filteredList() {
      const comp = this.company;
      return this.phones.filter(function (elem){
        if(comp==='') return true;
        else return elem.company.indexOf(comp) > -1;
      })
    },
  },
  beforeMount() {
    scroll(0,0);
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
.interaction-buttons {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
}
</style>