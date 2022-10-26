<template>
    <div class="user-card">
      <p>Name: {{ user.name }} <br> Age: {{ user.age }}</p>
      <hr>
      <button @click="userDelete(index)">Delete User</button>
    </div>
</template>

<script>
export default {
  name: "UserItem",
  props:['user', 'index'],
  data() {
    return {

    }
  },
  methods:{
    userDelete(index) {
      this.$emit('userdelete', index);
    }
  }
}
</script>

<style scoped>
.user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 400px;

  border: 1px solid #000000;
  border-radius: 5px;
  padding: 15px;

  margin: 5px 15px;
}

</style>