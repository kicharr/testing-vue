<template>
    <div class="wrapper">
        <slot></slot>
        <h3 class="child__wrapper">{{ title }}</h3>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "ChildComponent",
  data() {
    return {
        title: 'Child Component!'
    }
  }
}
</script>

<style scoped>
  .child__wrapper {
    background-color: bisque;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 5px 5px 5px rgb(119, 119, 119);
  }

</style>