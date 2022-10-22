<template>
  <div class="wrapper">
    <ul>
      <li v-for="user in users" :key="user.id">
        <p>User Name: {{user.name}}</p>
        <p>User Age: {{user.age}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UsersList",
  props: ["users"],
  data() {
    return{

    }
  }
}
</script>

<style scoped>
.wrapper {
  padding: 15px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}
</style>