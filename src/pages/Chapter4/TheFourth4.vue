<template>
  <div class="wrapper">
    <div class="lesson">
      <h3 style="text-align: center">Value {{ count }}</h3>
      <new-counter
          :changefnup="increase"
          :changefndown="decrease"/>
    </div>
    <div class="lesson">
      <h2>User</h2>
      <user-change :name="user" @userchange="change"/>
      <user-info :name="user" @userreset="reset"/>
    </div>
    <div class="lesson">
    </div>
  </div>
</template>

<script>
import newCounter from "@/components/LessonsChapter4/newCounter";
import UserChange from "@/components/LessonsChapter4/UserChange";
import UserInfo from "@/components/LessonsChapter4/UserInfo";

export default {
  name: "TheFourth4",
  components: {newCounter, UserChange, UserInfo},
  data() {
    return {
      count: 0,
      user: 'Tom'
    }
  },
  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      if (this.count > 0) {
        this.count--;
      } else {
        this.count = 0;
      }
    },
    change(name) {
      this.user = name;
    },
    reset() {
      this.user = 'Tom';
    }
  }

}
</script>

<style scoped>
.wrapper {
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