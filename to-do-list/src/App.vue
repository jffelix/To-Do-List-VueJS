<template>
  <h1>To-Do List (VueJS)</h1>
  <InputForm />
  <GroceryList :fullList="fullList"/>
</template>

<script>

import GroceryList from "./components/GroceryList.vue";
import InputForm from "./components/InputForm.vue";

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
      fullList: []
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
    ]
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
