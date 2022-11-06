<template>
  <div class="wrapper">
    <h2>HomePageTest</h2>
    <p>{{ testData }}</p>
    <div class="buttons-wrapper">
      <h3>Chapters of <a :href="link">Metanit</a></h3>
       <a-button class="chapter-button">
         <router-link to="/1.1">Chapter 1</router-link>
       </a-button>
      <a-button class="chapter-button">
        <router-link to="/2.1">Chapter 2</router-link>
      </a-button>
      <a-button class="chapter-button">
        <router-link to="/3.1">Chapter 3</router-link>
      </a-button>
      <a-button class="chapter-button">
        <router-link to="/4.1">Chapter 4</router-link>
      </a-button>
      <a-button class="chapter-button">
        <router-link to="/5.1">Chapter 5</router-link>
      </a-button>
      <a-button class="chapter-button">
        <router-link to="/6.1">Chapter 6</router-link>
      </a-button>
    </div>
  </div>

</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      testData: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, provident.',
      link: 'https://metanit.com/web/vue/1.1.php'
    }
  }
}
</script>

<style scoped>
.wrapper {
  max-width: 1200px;
  width: 100%;
  height: auto;
  margin: 0 auto;

  text-align: center;
}
.buttons-wrapper {

}
.chapter-button {
  margin-right: 5px;
}
.chapter-button:last-child {
  margin: 0px;
}
</style>