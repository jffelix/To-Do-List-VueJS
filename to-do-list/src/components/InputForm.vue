<template>
  <h3>Add New Item</h3>
  <p>Name</p>
    <input />
  <p>Quantity</p>
    <input />
  <p></p>
  <button v-on:click="submitInput()">Submit Item</button>
</template>

<script>

export default {
    name: "InputForm",
    methods: {
        submitInput() {
            console.log("You clicked Submit button!");
        }
    }
}

</script>