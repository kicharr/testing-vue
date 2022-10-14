<template>
<AdminMenuComponent>
  <template>
    <p>Hay</p>
    <button type="button" class="btn" @click="add">+</button>
  </template>
</AdminMenuComponent>
</template>

<script>
import AdminMenuComponent from "@/components/AdminMenuComponent";
export default {
  name: "MainAdminPage",
  components:{AdminMenuComponent},
  data(){
    return{

    }
  },
  methods: {
    add() {
      return{

      }
    }
  }
}
</script>

<style scoped>

</style>