<template>
  <div class="user-card">
    <p>Name: {{ user.name }} <br> Age: {{ user.age }}</p>
    <div class="btns">
      <button class="btn" @click="userDelete(index)">Delete User</button>
      <button class="btn" @click="showModal">Change User</button>
      <div class="modal">
        <a-modal
            class="modalCard"
            v-model:visible="visible"
            title="Change User Information"
            @ok="handleOk">
          <div class="user-info-modal">
            <h4>User Current Data</h4>
            <p>Name: {{ user.name }}</p>
            <p>Age: {{ user.age }}</p>
          </div>
          <hr>
          <div class="change-current-data-input">
            <div class="change__input__name">
              <labal for="changeName">Change User Name</labal>
              <input
                  v-on:userchange="change"
                  class="input"
                  type="text"/>
            </div>
            <div class="change__input__age">
              <labal for="changeAge">Change User Age</labal>
              <input
                  v-on:input="userChange(index)"
                  class="input"
                  type="text">
            </div>
          </div>
        </a-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserItem",
  props: ['user', 'index'],
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    userDelete(index) {
      this.$emit('userdelete', index);
    },
    showModal() {
      this.visible = true;
    },
    userChange(index) {
      this.$emit('userchange', index);
    }
  }
}
</script>

<style scoped>
.user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 400px;

  border: 1px solid #000000;
  border-radius: 5px;
  padding: 15px;

  margin: 5px 15px;
}

.btn {
  font-size: 10px;
  margin: 0 15px;
}

.btns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.input {
  border: 1px solid #000000;
  max-width: 150px;
  width: 100%;
  height: 30px;
}
.change-current-data-input {
  display: flex;
}
</style>