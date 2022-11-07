<template>
  <div class="wrapper">
    <div class="lesson lesson13">
      <HelloComponent/>
      <PropsLesson message="hello"/>
      <hr>
      <div class="lesson lesson14">
        <input type="text" v-model="welcome">
        <DinamicPropertis :message="welcome"/>
      </div>
      <div class="lesson lesson14">

        <h2 style="margin: 0">User Info</h2>
        <label for="name">Set your name: </label><br>
        <input id="name" type="text" v-model.lazy="name"/><br>

        <label for="secondName">Set your Second Name: </label><br>
        <input if="secondName" type="text" v-model.lazy="secondName"/><br>

        <label for="age">Set your age: </label><br>
        <input id="age" type="number" v-model="age"/><br>

        <ComplexObj v-bind:name="name" :age="age" :secondName="secondName"/>
      </div>

      <div class="lesson lesson15">
        <usersList :users="users"></usersList>
      </div>
    </div>
    <div class="interaction-buttons">
      <a-button>
        <router-link to="/">На главную</router-link>
      </a-button>
      <div class="int++">
        <a-button>
          <router-link to="/3.2">К предыдущей</router-link>
        </a-button>
        <a-button>
          <router-link to="/4.2">К следующей</router-link>
        </a-button>
      </div>
    </div>
  </div>
</template>


<script>
import PropsLesson from "@/components/LessonsChapter4/PropsLesson";
import HelloComponent from "@/components/LessonsChapter4/HelloComponent";
import DinamicPropertis from "@/components/LessonsChapter4/DinamicPropertis";
import ComplexObj from "@/components/LessonsChapter4/ComplexObj";
import usersList from "@/components/LessonsChapter4/UsersList";

export default {
  components: {
    HelloComponent,
    PropsLesson,
    DinamicPropertis,
    ComplexObj,
    usersList
  },
  name: "TheFirst4",
  data() {
    return {
      welcome: '',
      name: '',
      secondName: '',
      age: 18,
      users: [
        {
          name: 'Tom',
          age: 19,
        },
        {
          name: 'Bob',
          age: 20,
        },
        {
          name: 'Alice',
          age: 23
        }
      ]
    }
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

.lesson {
  width: 100%;
  border: 1px solid;
  padding: 50px;
  margin: 5px 0;
}

.lesson14 {
  display: inline-block;
}
.interaction-buttons {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
}
</style>