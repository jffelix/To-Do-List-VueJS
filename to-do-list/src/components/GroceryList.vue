<template>
  <h2>Grocery List</h2>
  <div v-for="(grocery, index) in fullList">
      <p>{{grocery.name}}</p>
      <p>{{grocery.quantity}}</p>
      <button v-on:click="updateItem()">Update Item</button>
      <button v-on:click="deleteItem(index)">Delete Item</button>
  </div>
</template>

<script>

export default {
    name: "GroceryList",
    // prop type needs to be specified
    props: {
        fullList: Array
    },
    emits: ["deleteItem"],
    methods: {
        updateItem() {
            console.log("You clicked Update button!");
        },
        deleteItem(index) {
            this.$emit("deleteItem", index);
        }
    }
}

</script>