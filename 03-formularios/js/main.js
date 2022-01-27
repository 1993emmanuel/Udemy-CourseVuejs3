const app = Vue.createApp({
    data : ()=>({
        title : 'formularios',
        datos : {
            name : "",
            apellido : "",
            age : 15,
            langs : [],
            gener : "m",
        },
    }),
    methods:{
        handleSubmit(){
            console.log(this.datos)
        }
    }
});