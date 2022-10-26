<template>
  <div>
    <label for="userName">Set your name</label><br>
    <input id="userName" type="text" v-model="user.name"><br><br>

    <label for="userAge">Set your age</label><br>
    <input id="userAge" type="number" v-model="user.age"><br><br>

    <button @click="userAdd">Add User</button>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  props: ['users'],
  data() {
    return {
      user: {
        name: '',
        age: ''
      },

    }
  },
  methods: {
    userAdd() {
      // eslint-disable-next-line vue/no-mutating-props
      this.users.push({name: this.user.name, age: this.user.age});
    },

  }
}
</script>

<style scoped>

</style>