<template>
  <div class="wrapper">

    <div class="interaction-buttons">
      <a-button>
        <router-link to="/">На главную</router-link>
      </a-button>
      <div class="int++">
        <a-button>
          <router-link to="/6.1">К предыдущей</router-link>
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
  name: "TheSecond6",
  data() {
    return {

    }
  },
  beforeMount() {
    scroll(0,0)
  }
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
</style>