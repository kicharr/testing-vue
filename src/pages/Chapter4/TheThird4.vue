<template>
  <div class="wrapper">
    <div class="lesson">
      <h2>Users List</h2>
      <user-form :user="user"/>
      <div>
        <user-item/>
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from "@/components/LessonsChapter4/UserForm";
import UserItem from "@/components/LessonsChapter4/UserItem";
export default {
  name: "TheThird4",
  components:{UserItem,UserForm},
  data() {
    return {
      users:[
        {name: 'Tom', age: 23},
        {name: 'Bob', age: 26},
        {name: 'Alice', age: 28}
      ]
    }
  },
  methods: {

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