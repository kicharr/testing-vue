<template>
  <div class="wrapper">
    <div class="lesson lesson-7">
      <a-input type="text" v-model:value="age"/>
      <p>{{result}}</p>
    </div>
    <div class="lesson lesson-8">
      <div class="region" v-bind:class="classObj" v-on:click="isActive=!isActive"></div>
      <button type="button" @click="isActive=!isActive">Toogle color</button>
      <button type="button" @click="changeBooleanBounded">Toogle width</button>
      <hr>
      <div class="secondRegion" v-bind:class="color"></div>
      <input type="text" v-model="color"/>
      <hr>
      <div class="thirdRegion" v-bind:class="[color,{bounded:isBounded},size]"></div>
      <input type="text" v-model="size">
      <input type="text" v-model="color">
      <hr>

      <div class="newRegion" v-bind:style="{'background-color': newColor, height: newHeight + 'px', width: newWidth+'px'}"></div>
      <br><br>
      <input type="text" v-model="newColor">
      <br><br>
      <input type="text" v-model="newWidth">
      <br><br>
      <input type="text" v-model="newHeight">
      <hr>
      <div class="region" v-bind:style="[secondClassObj, sizeStyle]"></div>
      <br><br>
      <input type="text" v-model="newColor">
      <br><br>
      <input type="text" v-model="newWidth">
      <br><br>
      <input type="text" v-model="newHeight">
    </div>
    <div class="interaction-buttons">
      <a-button>
        <router-link to="/">Назад</router-link>
      </a-button>
      <a-button>
        <router-link to="/1.3">К следующей</router-link>
      </a-button>
    </div>
  </div>

</template>

<script>
export default {
  name: "TheSecond",
  data(){
    return {
      age:'0',
      result:'',
      isActive: false,
      isBounded: false,
      color:'',
      size:'default',
      newRegion:'',
      newColor:'red',
      newWidth:75,
      newHeight:75,

    }
  },
  watch: {
    age:function(newAge) {
      if(newAge>0 && newAge<110) {
        this.check(newAge);
      }
    }
  },
  methods: {
    check:function (value){
      this.result = 'Пожалуйста подождите, идёт проверка...';
      const vm = this;
      setTimeout(function (){
        if(value >= 18) vm.result = 'Доступ открыт';
        else vm.result = 'Для возроста ' + value + ' доступ закрыт';
      },2000)
    },
    changeBooleanBounded(){
      this.isBounded = true
    }
  },
  beforeMount() {
    scroll(0,0);
  },
  computed: {
    classObj() {
      return {
        active: this.isActive,bounded: this.isBounded
      }
    },
    secondClassObj(){
      return {
        'background-color': this.newColor,
        height: this.height + 'px',
        width: this.width + 'px',
      }
    },
    sizeStyle(){
      return{
        height: this.height + 'px',
        width: this.width +'px',
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 25px;
  max-width: 1000px;
  width: 100%;
  margin:0 auto;
}
.lesson {
  width: 100%;
  border: 1px solid;
  padding: 50px;
  margin: 5px 0;
}
.region{
   background-color: #999;
   width: 100px;
   height: 100px;
   display: inline-block;
   margin: 10px;
    transition: .3s linear;
 }
.secondRegion{
  background-color: #999;
  width: 100px;
  height: 100px;
  display: inline-block;
  margin: 10px;

  transition: .4s linear;
}
.thirdRegion {
  background-color: #999;
  margin: 10px;
  width: 75px;
  height: 75px;
  transition: .3s linear;
}
.active{
  transition: .3s linear;
  background-color:red;
}
.bounded{
  border: 2px solid green;;
}
.yellow{
  background-color: yellow;
}
.red{
  background-color: red;
}
.blue{
  background-color: blue;
}
.green{
  background-color: green;
}
.default {
  width: 75px;
  height: 75px;
}
.big{
  width: 100px;
  height: 100px;
}
.small{
  width: 50px;
  height: 50px;
}
</style>