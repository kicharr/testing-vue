<template>
  <div class="wrapper">
    <input :value="name" type="text" @change="e=>$emit('changeUserName',e)">
    <input :value="age" type="text" @blur="e=>$emit('changeUserAge',e)" >
  </div>
  <div>

  </div>
</template>

<script>
export default {
  name: "PropsLesson",
  props:[
      'name',
      'age'
  ]
}
</script>

<style scoped>

</style>