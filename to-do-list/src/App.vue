<template>
  <h1>To-Do List (VueJS)</h1>
  <InputForm 
    v-on:submitInput="addInput"
  />
  <GroceryList 
    :fullList="fullList"
    v-on:updateItem="updateInput"
    v-on:deleteItem="deleteInput"
  />
</template>

<script>

import GroceryList from "./components/GroceryList.vue";
import InputForm from "./components/InputForm.vue";
// download and import axios here later

export default {
  name: 'App',
  components: {
    GroceryList,
    InputForm
  },
  // similar to initial state
    // can be used for prop drilling
  data() {
    return {
      fullList: [],
      addObj: []
    }
  },
  // method allows properties in data to be accessed
  created() {
    this.fullList = [
      {
          name: "oranges",
          quantity: 5
      },
      {
          name: "grapes",
          quantity: 2
      },
      {
          name: "bread",
          quantity: 10
      }
    ],
    this.addObj = []
  },
  methods: {
      addInput(inputObj) {

          this.addObj = inputObj;

          this.fullList.push(this.addObj);
      },
      updateInput(updateIndex, updateObj) {
          this.fullList[updateIndex] = updateObj;
      },
      deleteInput(index) {
          this.fullList.splice(index, 1);
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
