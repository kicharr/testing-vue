<template>
  <div class="wrapper">

    <div class="lesson">
      <slot-user>
        <template v-slot:default="props">
          <h3>User Data</h3>
          <p>Name: {{props.userinfo.name}}</p>
          <p>Age: {{props.userinfo.age}}</p>
        </template>
      </slot-user>
    </div>
    <div class="lesson">
      <users-list>
        <template v-slot:userDetails="secondProps">
          <p>Name: {{secondProps.userinfo.name}}</p>
          <p>Age: {{secondProps.userinfo.age}}</p>
        </template>
      </users-list>
    </div>
    <div class="interaction-buttons">
      <a-button>
        <router-link to="/">На главную</router-link>
      </a-button>
      <div class="int++">
        <a-button>
          <router-link to="/5.1">К предыдущей</router-link>
        </a-button>
        <a-button>
          <router-link to="/6.1">К следующей</router-link>
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import SlotUser from '@/components/LessonsChapter5/SlotUser.vue';
import UsersList from "@/components/LessonsChapter5/UsersList";

export default {
  components: {
    SlotUser,
    UsersList
  },
  name: "TheSecond5"
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
.interaction-buttons {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
}
</style>