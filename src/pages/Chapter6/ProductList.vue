<template>
  <div class="wrapper">
    <h2>Product</h2>
    <h3>Category: {{ $route.params.category }}</h3>
    <h3>Id: {{ $route.params.id }}</h3>
  </div>
</template>

<script>

export default {
  name: "TheFirst6",
  components: {}
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

.link {
  color: inherit;
}

.link em {
  text-decoration: underline;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  padding: 5px;
}

a.router-link-active, li.router-link-active > a {
  color: red;
}
</style>