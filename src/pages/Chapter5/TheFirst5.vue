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
          <p>For more info you should write in <span>contacts@gmail.com</span></p>
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
    <div class="lesson">
      <header  class="header">
        <ul style="display: flex">
          <li><a href="">link</a></li>
          <li><a href="">link</a></li>
          <li><a href="">link</a></li>
          <li><a href="">link</a></li>
        </ul>
        <button class="btnModal"
                @click="showModal"
        >
          <img src="@/assets/logo.png" class="vue-icon-btn" alt="photo">
        </button>
      </header>
      <div class="view__modal" v-show="viewModal">
        <h3 style="text-align: center">MODAL WINDOW</h3>
      </div>
      <p>Lorem ipsum dolor sit
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid deserunt dicta eligendi esse eveniet
        facilis harum, illum impedit iste non officiis perspiciatis possimus praesentium, quibusdam reprehenderit sequi
        sunt. Voluptate.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid deserunt dicta eligendi esse eveniet
        facilis harum, illum impedit iste non officiis perspiciatis possimus praesentium, quibusdam reprehenderit sequi
        sunt. Voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid deserunt dicta eligendi
        esse eveniet facilis harum, illum impedit iste non officiis perspiciatis possimus praesentium, quibusdam
        reprehenderit sequi sunt. Voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid
        deserunt dicta eligendi esse eveniet facilis harum, illum impedit iste non officiis perspiciatis possimus
        praesentium, quibusdam reprehenderit sequi sunt. Voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Alias aliquid deserunt dicta eligendi esse eveniet facilis harum, illum impedit iste non officiis
        perspiciatis possimus praesentium, quibusdam reprehenderit sequi sunt. Voluptate.Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Alias aliquid deserunt dicta eligendi esse eveniet facilis harum, illum impedit
        iste non officiis perspiciatis possimus praesentium, quibusdam reprehenderit sequi sunt. Voluptate.Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Alias aliquid deserunt dicta eligendi esse eveniet facilis harum,
        illum impedit iste non officiis perspiciatis possimus praesentium, quibusdam reprehenderit sequi sunt.
        Voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid deserunt dicta eligendi esse
        eveniet facilis harum, illum impedit iste non officiis perspiciatis possimus praesentium, quibusdam
        reprehenderit sequi sunt. Voluptate.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid deserunt dicta eligendi esse eveniet
        facilis harum, illum impedit iste non officiis perspiciatis possimus praesentium, quibusdam reprehenderit sequi
        sunt. Voluptate.
        amet, consectetur adipisicing elit. Alias aliquid deserunt dicta eligendi esse eveniet facilis harum, illum
        impedit iste non officiis perspiciatis possimus praesentium, quibusdam reprehenderit sequi sunt. Voluptate.
      </p>
    </div>
    <div class="interaction-buttons">
      <a-button>
        <router-link to="/">На главную</router-link>
      </a-button>
      <div class="int++">
        <a-button>
          <router-link to="/4.4">К предыдущей</router-link>
        </a-button>
        <a-button>
          <router-link to="/5.2">К следующей</router-link>
        </a-button>
      </div>
    </div>
  </div>

</template>

<script>
// import components
import TheLight from "@/components/LessonsChapter4/TheLight";
import TheEnabled from "@/components/LessonsChapter4/TheEnabled";
import ChildComponent from "@/components/LessonsChapter5/ChildComponent.vue";
import SlotLesson from "@/components/LessonsChapter5/SlotLesson.vue"
import MainContainer from "@/components/LessonsChapter5/MainContainer.vue"
import SecondContainer from "@/components/LessonsChapter5/SecondContainer.vue";
import logo from "@/assets/logo.png"


export default {
  components: {
    TheLight,
    TheEnabled,
    ChildComponent,
    SlotLesson,
    MainContainer,
    SecondContainer,
    // eslint-disable-next-line vue/no-unused-components
    logo
  },
  name: "TheFirst5",
  data() {
    return {
      viewModal: false,
    }
  },
  methods: {
    showModal() {
      if (this.viewModal == false) {
        return this.viewModal = true
      } else {
        return this.viewModal = false
      }
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

.btnModal {
  border: none;
  background-color: transparent;
  cursor: pointer;

}

.vue-icon-btn {
  max-width: 30px;
  width: 100%;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header ul {
  padding: 0;
  margin: 0;
}
.header li {
  list-style: none;
  padding: 0px 15px;
}
.header a{
  color: inherit;
}
.view__modal {
  position: absolute;

  width: 842px;
  background-color: #999999;
  padding: 15px;
  border-radius: 5px;
}
.interaction-buttons {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
}
</style>