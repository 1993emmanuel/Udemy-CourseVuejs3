const app = Vue.createApp({
    data:()=>{
        return{
            title : 'parametros con parametros',
            post : 1,
            datos : {},
        }
    },
    created(){
        this.getPost();
    },
    methods:{
        async getPost(){
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.post}`);
            const {userId} = data

            const {data: dataUser } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            this.datos = dataUser
            console.log(dataUser)
        }
    }
});