const app = Vue.createApp({
    data() {
        return {
            message: "Diagram",
            items: null
        }
    },
    created() {
        axios.get('./data.json').then(response=>{
            this.items =response.data['info']
        }).catch((e)=>{
            console.error(e)
        })
    },
    methods: {
        
    },
})
app.mount('#app')