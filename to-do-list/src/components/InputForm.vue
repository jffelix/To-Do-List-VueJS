<template>
  <h3>Add New Item</h3>
  <p>Name</p>
    <input 
      type="text" 
      placeholder="ex: strawberries"
      v-model="item.name"
    />
  <p>Quantity</p>
    <input
      type="text" 
      placeholder="ex: 2"
      v-model="item.quantity"
    />
  <p></p>
  <button v-on:click="submitInput(item.name, item.quantity)">Submit Item</button>
</template>

<script>

export default {
    name: "InputForm",
    data() {
        return {
            item: {
                name: null,
                quantity: null
            }
        }
    },
    props: {
        addInput: Function
    },
    // need to add emits property when using this.$emit
    emits: ["submitInput"],
    methods: {
        submitInput(name, quantity) {

            if ((name === null || name.length === 0) || (quantity === null || quantity.length === 0)) {
                alert("Please fill in both input fields.");
                return;
            }

            this.item.name = name;
            this.item.quantity = quantity;

            const inputObj = {   
                name: this.item.name,
                quantity: Number(this.item.quantity)
            }
            // allows to send inputObj to parent
            this.$emit("submitInput", inputObj);
        }
    }
}

</script>