<template>
  <div class="wrapper">
    <ul>
      <li v-for="user in users"
          :key="user.id">
        <slot name="userDetails" v-bind:userinfo="user"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UsersList",
  data() {
    return {
      users: [
        {name:'Tom', age: 36},
        {name:'Sam', age: 39},
        {name:'Bob', age: 25}
      ]
    }
  }
}
</script>

<style scoped>

</style>