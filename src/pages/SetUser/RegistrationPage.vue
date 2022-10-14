<template>
  <div class="wrapper">
    <div class="card">
      <h1>Registration form</h1>

      <div v-show="step === 1" class="set set-name-wrapper">
        <h3>Enter your name</h3>
        <div class="in-wrapper login__wrapper">
          <label>Set your Name:</label>
          <a-input
              v-model:value="name"
              placeholder="Name"/>
          <label>Set your Second Name:</label>
          <a-input
              v-model:value="secondName"
              placeholder="Second Name"/>
          <label>If you have Third Name:</label>
          <a-input v-model:value="thirdName" placeholder="Third Name"/>
        </div>
        <a-button @click="nextStep" type="primary">Next step</a-button>
      </div>


      <div v-show="step === 2" class="set set-password-wrapper">
        <h3>Enter your password</h3>
        <div class="in-wrapper password__wrapper">
          <p> Please set your password:</p>
          <div class="interaction-block">
            <a-input
                v-model:value="password"
                type="password"
                id="hiddenPassword"
                placeholder="Set Password"/>
            <a-button
                v-on:click="showPassword"

                class="show-btn">
              <img class="src-img" :src="src" alt="show">
            </a-button>
          </div>
        </div>

        <div class="in-wrapper confirm-password__wrapper">
          <p> Please confirm your password:</p>
          <div class="interaction-block">
            <a-input
                class="input-pass"
                v-model:value="confirmPassword"
                type="password"
                placeholder="Set Password"/>
            <a-button class="show-btn">
              <img class="src-img" :src="src" alt="show">
            </a-button>
          </div>
        </div>
        <div class="buttons-wrapper">
          <a-button @click="backStep">Back step</a-button>
          <a-button @click="nextStep" type="primary">Next step</a-button>
        </div>

      </div>


      <div v-show="step === 3" class="set set-country-wrapper">
        <h3>Enter your Country</h3>
        <div class="in-wrapper country__wrapper">
          <p> Please set your country:</p>
          <a-input
              class="input-country"
              v-model:value="country"
              type="text"
              placeholder="Set country"/>

          <div class="in-wrapper confirm-city__wrapper">
            <p>Please set your City</p>
            <a-input
                class="input-city"
                v-model:value="city"
                type="text"
                placeholder="Set city"/>
          </div>
          <div class="buttons-wrapper">
            <a-button @click="backStep">Back step</a-button>
            <a-button @click="showModal" type="primary">End registration</a-button>
          </div>
          <div>
            <a-modal
                class="a-modal"
                v-model:visible="visible"
                title="Check your data"
                @ok="createNewUser">
              <div class="user-name-data">
                Your Name: <strong>{{ name }}</strong>
                <br>
                Your Second Name: <strong>{{ secondName }}</strong>,
                <br>
                Your Third Name: <strong>{{ thirdName }}</strong>
              </div>
              <hr class="hr">
              <div class="user-password-data">
                Your password: <strong>{{ password }}</strong>
              </div>
              <hr class="hr">
              <div class="user-country-data">
                Your Country: <strong>{{ country }}</strong>
                <br>
                Your City: <strong>{{ city }}</strong>
              </div>
            </a-modal>
          </div>

        </div>

      </div>
    </div>
  </div>


</template>

<script>

export default {
  name: "RegistrationPage",
  components: {},
  data() {
    return {
      step: 1,
      name: 'John',
      secondName: 'Carl',
      thirdName: 'Anthony',
      password: 'confirmPassword',
      confirmPassword:'confirmPassword',
      country: 'USA',
      city: 'NY',
      visible: false,
      src: require('@/assets/img/show.png'),
      type: 'password'
    }
  },
  methods: {
    nextStep() {
      this.step++
    },
    backStep() {
      this.step--
    },
    showModal() {
      this.visible = true
    },
    createNewUser() {

    },
    showPassword(hiddenPassword){
      document.getElementById('hiddenPassword');
      hiddenPassword.type = 'text'
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
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

.in-wrapper label {
  display: flex;
}

.set p {
  display: flex;
  margin: 0;
  padding: 0;
}

.buttons-wrapper {
  display: flex;
  justify-content: space-between;
}

.interaction-block {
  display: flex;
  flex-direction: row;
  gap:5px;
}

.show-btn {
  max-width: 20px;
  padding: 0;
  width: 100%;
  height: 20px;
  border: none;
  
}

.a-modal {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.hr {
  width: 100%;
}
.src-img {
  max-width: 20px;
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