const inputForm = Vue.createApp({
    template: `
        <div>
            <h3>Add new item</h3>
            <p>Name</p>
            <input />
            <p>Quantity</p>
            <input />
            <button>Submit</button>
        </div>
    `
})

inputForm.mount('#app');