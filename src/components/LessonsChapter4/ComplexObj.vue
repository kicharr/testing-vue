<template>
  <div class="wrapper">
    <div class="lesson lesson16">
      <h3>User infornation:</h3><br>
      <p>Name: {{ name }}</p>
      <p>Second Name: {{secondName}}</p>
      <p>
        Age: {{ age }}
        <span v-if="ageSet">Введите свой возраст</span>
        <span v-else>Years Old</span><br>

        <span v-show="ageSet">Введите сколько вам именно лет</span>
        <span v-show="display">Вам столько лет</span><br>

      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComplexObj",
  props: ['name', 'age', 'secondName'],
  data() {
    return {}
  },
  methods: {},
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    ageSet() {
      if (this.age == '') return 'else';
    },
    // eslint-disable-next-line vue/return-in-computed-property
    display() {
      if (this.age !== '') return "else";
    }
  }
}
</script>

<style scoped>
.wrapper {
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

.lesson16 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>