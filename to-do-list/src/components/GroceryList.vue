<template>
  <h2>Grocery List</h2>
  <div v-for="grocery in fullList">
      <p>{{grocery.name}}</p>
      <p>{{grocery.quantity}}</p>
      <button v-on:click="updateItem()">Update Item</button>
      <button>Delete Item</button>
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
        }
    }
}

</script>