<template>
  <div class="wrapper">
    <div class="lesson">
      <the-light/>
      <the-enabled/>
    </div>
    <div class="lesson">
      <child-component>
        <h2>Vue App</h2>
        <p>Это приложение Vue 3</p>
      </child-component>

    </div>
    <div class="lesson">
      <slot-lesson></slot-lesson>
      <slot-lesson>
        <div>
            <p>Открыт набор на бесплатные курсы Udacity.</p>
            <p>Заявки принимаются до 16 октября</p>
        </div>
      </slot-lesson>
    </div>
    <div class="lesson">
      <main-container>
        <template v-slot:header>
          <h1>Title of article</h1>
        </template>

        <template v-slot:default>
          <p>First param</p>
          <p>Second param</p>
        </template>
        
        <template v-slot:footer>
          <p>For more info you should wtite in <span>contacts@gmail.com</span></p>
        </template>
      </main-container>
    </div>
    <div class="lesson">
      <second-container>
        <template v-slot:default>
          <p>Первый абзац..</p>
          <p>Второй абзац..</p>
        </template>
      </second-container>
    </div>
  </div>
</template>

<script>
// import components
import TheLight from "@/components/LessonsChapter4/TheLight";
import TheEnabled from "@/components/LessonsChapter4/TheEnabled";
import ChildComponent from "@/components/LessonsChapter5/ChildComponent.vue";
import SlotLesson from  "@/components/LessonsChapter5/SlotLesson.vue"
import MainContainer  from "@/components/LessonsChapter5/MainContainer.vue"
import SecondContainer from "@/components/LessonsChapter5/SecondContainer.vue";


export default {
  components: {
    TheLight,
    TheEnabled,
    ChildComponent,
    SlotLesson,
    MainContainer,
    SecondContainer
  },
  name: "TheFirst5",
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