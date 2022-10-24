<template>
    <h3>User Information Card</h3>
    <p>User Name: {{ name }}</p>
    <p>User Age: {{age}}</p>
</template>

<script>
export default {
  name: "SeparateUser",
  props: {
    name: {
      type: String,
      required: true,
      default: 'Tom',
      validator: function (value) {
        return value != 'admin' && value != '';
      }
    },
    age: {
      type: Number,
      required: true,
      default: 18,
      validator: function (value) {
        return value >= 0 && value < 100;
      },
    }
  },
}
</script>

<style scoped>

</style>