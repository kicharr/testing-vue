<template>
  <div class="wrapper">
    <div class="lesson">
      <SlotUser>
        <h3>Информация о пользователе:</h3>
        <p>Имя: {{user.name}}</p>
        <p>Фамилия: {{user.secondName}}</p>
        <p>Возраст: {{user.age}}</p>
      </SlotUser>
    </div>
  </div>
</template>

<script>
import SlotUser from '@/components/LessonsChapter5/SlotUser.vue';

export default {
  components: {
    SlotUser
  },
  name: "TheSecond5"
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

</style>