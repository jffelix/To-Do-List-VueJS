<template>
  <h2>Grocery List</h2>
  <div v-for="grocery in fullList">
      <p>{{grocery.name}}</p>
      <p>{{grocery.quantity}}</p>
      <button v-on:click="updateItem()">Update Item</button>
      <button v-on:click="deleteItem()">Delete Item</button>
  </div>
</template>

<script>

export default {
    name: "GroceryList",
    // prop type needs to be specified
    props: {
        fullList: Array
    },
    methods: {
        updateItem() {
            console.log("You clicked Update button!");
        },
        deleteItem() {
            // need to find out how to get index from v-for loop
            console.log("You clicked Delete button!");
        }
    }
}

</script>