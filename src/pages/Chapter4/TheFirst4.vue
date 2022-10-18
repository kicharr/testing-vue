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
        <input id="age" type="number" v-model.lazy="age"/><br>

        <ComplexObj v-bind:name="name" :age="age" :secondName="secondName"/>
      </div>
    </div>
  </div>
</template>


<script>
import PropsLesson from "@/components/LessonsChapter4/PropsLesson";
import HelloComponent from "@/components/LessonsChapter4/HelloComponent";
import DinamicPropertis from "@/components/LessonsChapter4/DinamicPropertis";
import ComplexObj from "@/components/LessonsChapter4/ComplexObj";

export default {
  components: {
    HelloComponent,
    PropsLesson,
    DinamicPropertis,
    ComplexObj
  },
  name: "TheFirst4",
  data() {
    return {
      welcome: '',
      name: '',
      secondName:'',
      age: 18,
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

</style>