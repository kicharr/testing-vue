<template>
  <div class="wrapper">
    <div class="lesson">
      <ul style="list-style: none">
        <li>
          <router-link to="/product/1" class="link">
            Go to <em>Product Page 1</em>
          </router-link>
        </li>
        <br>
        <li>
          <router-link to="/product/2" class="link">
            Go to <em>Product Page 2</em>
          </router-link>
        </li>
        <br>
        <li>
          <router-link to="/about" class="link">
            Go to <em>About Page</em>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="lesson">
      <ul>
        <li><router-link to="/products-list/iPhone/6">iPhone 6</router-link></li>
        <li><router-link to="/products-list/Samsung/12">Samsung 12</router-link></li>
      </ul>
    </div>
    <div class="interaction-buttons">
      <a-button>
        <router-link to="/">На главную</router-link>
      </a-button>
      <div class="int++">
        <a-button>
          <router-link to="/5.2">К предыдущей</router-link>
        </a-button>
        <a-button>
          <router-link to="/6.2">К следующей</router-link>
        </a-button>
      </div>
    </div>
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