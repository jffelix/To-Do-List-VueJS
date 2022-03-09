const app = Vue.createApp({
    template: `<h1 v-on:click="logTitle()">{{ name }}</h1>`,
    data() {
        return {
            name: "To-Do List (VueJS)"
        }
    },
    methods: {
        logTitle() {
            console.log(this.name);
        }
    }
})

app.mount('#app')