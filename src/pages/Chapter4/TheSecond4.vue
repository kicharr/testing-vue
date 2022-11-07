<template>
  <div class="wrapper">
    <div class="lesson props__lesson">
      <h3>User information</h3>
      <p>Name: {{ name }}</p>
      <p>Age: {{ age }}</p>
      <PropsLesson @changeUserName="changeUserName"
                   @changeUserAge="changeUserAge"
                   :name="name"
                   :age="age"/>
    </div>
    <div class="lesson">
      <input type="text" v-model="name"><br><br>
      <input type="text" v-model="age"><br><br>
      <SeparateUser :name="name" :age="age"/>
    </div>
    <div class="lesson">
      <h2>Hello, {{secondName}}</h2>
      <UserEdit :name="secondName" v-on:userchange="change"/>
    </div>
    <div class="interaction-buttons">
      <a-button>
        <router-link to="/">На главную</router-link>
      </a-button>
      <div class="int++">
        <a-button>
          <router-link to="/4.1">К предыдущей</router-link>
        </a-button>
        <a-button>
          <router-link to="/4.3">К следующей</router-link>
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import PropsLesson from "@/components/LessonsChapter4/PropsLesson";
import SeparateUser from "@/components/LessonsChapter4/SeparateUser";
import UserEdit from "@/components/LessonsChapter4/UserEdit";

export default {
  components: {PropsLesson,SeparateUser,UserEdit},
  name: "TheSecond2",
  data() {
    return {
      name: null,
      age: null,
      secondName: 'Kirill'
    }
  },
  methods: {
    changeUserName(e) {
      this.name = e.target.value;
    },
    changeUserAge(e) {
      this.age = e.target.value;
    },
    change(value) {
      this.secondName = value;
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

.props__lesson {
  display: flex;
  flex-direction: column;
}
.interaction-buttons {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
}
</style>

