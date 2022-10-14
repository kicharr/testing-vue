<template>
  <div class="wrapper">
    <div class="card">
      <h1>Name of company</h1>

      <div class="in-wrapper login__wrapper">
        <p> Please set your login:</p>
        <a-input v-model:value="login" placeholder="Set Login"/>
      </div>

      <div class="in-wrapper password__wrapper">
        <p> Please set your password:</p>
        <a-input v-model:value="password" type="password" placeholder="Set Password"/>
      </div>

      <a-button type="primary">Enter</a-button>

    </div>
  </div>

</template>

<script>
export default {
  name: "LoginPage",
  components: {},
  data(){
    return{
      login:'',
      password:'',
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.wrapper {
  display:flex;
  justify-content: center;
  text-align: center;
}
.card {
  max-width: 500px;
  width: 100%;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 3px solid #000;
  border-radius: 5px;
  padding: 30px;

  margin-top: 15px;
}
.in-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;

  margin-bottom: 15px;
}
.in-wrapper p {
  display: flex;
  margin: 0;
  padding: 0;
}
/*media*/
@media (max-width: 768px) {
  .card {
    max-width: 400px;
  }
}
@media (max-width: 375px) {
  .card {
    max-width: 300px;
  }
}
</style>