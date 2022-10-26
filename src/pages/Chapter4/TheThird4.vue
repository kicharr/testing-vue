<template>
  <div class="wrapper">
    <div class="lesson lesson15">
      <div style="text-align: center;">
        <h2>Users List</h2>
        <user-form :users="users"></user-form>
      </div>
      <div class="list__wrapper">
        <user-item
            v-for="(user, index) in users"
            :key="index"
            :user="user"
            :index="index"
            @userdelete="remove"
        ></user-item>
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
        {name: 'Alice', age: 28},
        {name: 'Test', age: 32}
      ]
    }
  },
  methods: {
    remove(index){
      this.users.splice(index,1);
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
.lesson15{
  display: flex;
  justify-content: space-around;
}
.list__wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 500px;

  overflow-y: scroll;
}

.list__wrapper::-webkit-scrollbar {
  width: 7px;
  border-radius: 15px;
  background-color: #cccccc;
}
.list__wrapper::-webkit-scrollbar-track{
  width: 5px;
}
.list__wrapper::-webkit-scrollbar-thumb {
  border-radius: 15px;
  background-color: #818181;
}
</style>