<template>
  <h2>Grocery List</h2>
  <div v-for="grocery in fullList">
      <p>{{grocery.name}}</p>
      <p>{{grocery.quantity}}</p>
      <button>Update Item</button>
      <button>Delete Item</button>
  </div>
</template>

<script>

export default {
    name: "GroceryList",
    props: {
        fullList: Array
    }
}

</script>