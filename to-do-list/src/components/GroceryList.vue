<template>
  <div v-if="showUpdateForm">
    <h3>Update Selected Item</h3>
    <p>Name</p>
        <input 
          type="text" 
          placeholder="ex: carrots"
          v-model="item.updateName"
          />
    <p>Quantity</p>
        <input 
          type="text" 
          placeholder="ex: 6"
          v-model="item.updateQuantity"
          />
    <p></p>
    <button v-on:click="submitUpdate(item.updateName, item.updateQuantity)">Submit Update</button>
    <button v-on:click="cancelUpdate()">Cancel Update</button>
  </div>

  <h2>Grocery List</h2>
  <div v-for="(grocery, index) in fullList">
      <p>{{grocery.name}}</p>
      <p>{{grocery.quantity}}</p>
      <button v-on:click="expandUpdate(index)">Update Item</button>
      <button v-on:click="deleteItem(index)">Delete Item</button>
  </div>
</template>

<script>

export default {
    name: "GroceryList",
    data() {
        return {
            showUpdateForm: false,
            item: {
                updateIndex: null,
                updateName: null,
                updateQuantity: null
            }
        }
    },
    // prop type needs to be specified
    props: {
        fullList: Array,
        updateInput: Function
    },
    emits: ["updateItem", "deleteItem"],
    methods: {
        expandUpdate(index) {
            this.updateIndex = index;
            this.showUpdateForm = !this.showUpdateForm;
        },
        submitUpdate(name, quantity) {
            this.item.updateName = name;
            this.item.updateQuantity = quantity;

            const updateObj = {
                name: name,
                quantity: Number(this.item.updateQuantity)
            }

            this.$emit("updateItem", this.updateIndex, updateObj);

            this.showUpdateForm = false;
        },
        cancelUpdate() {
            this.showUpdateForm = false;
        },
        deleteItem(index) {
            this.$emit("deleteItem", index);
        }
    }
}

</script>