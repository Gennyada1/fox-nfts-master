const app = Vue.createApp({
    data() {
        return {
            message: "Diagram",
            items: null,
            totalValue: 0,
        }
    },
    created() {
        axios.get('./data.json').then(response=>{
            this.items =response.data['info']
            this.items.reverse()
            this.items.forEach(element => {
                this.totalValue +=parseInt(element['deposit'])
                
                console.log(this.totalValue);
            });
        }).catch((e)=>{
            console.error(e)
        })
    },
    methods: {
        
    },
})
app.mount('#app')