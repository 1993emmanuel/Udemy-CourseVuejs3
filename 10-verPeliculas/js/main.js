const app = Vue.createApp({
    data:()=>{
        return{
            title: 'Consumir una Api de peliculas',
            movieData :{},
            movieTitle : 'Spider Man',
        }
    },
    mounted(){
        this.getMovie()
    },
    methods:{
        async getMovie(){

            const search = this.movieTitle.toLowerCase().replace(/ /g,"+")
            console.log(search)
            const data = await fetch(`https://www.omdbapi.com/?apikey=f42ea696&t=${search}`)
            const jsonData = await data.json()
            this.movieData = jsonData
        }
    }
})