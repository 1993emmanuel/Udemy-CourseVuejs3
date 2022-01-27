const app = Vue.createApp({
    data(){
        return {
            user :{
                title : 'hola mundo',
                age : 20,
                name : 'Emmanuel',
                movies : ['batman', 'pokemon','digimon','gta','anime','algo mas'],
                url : "https://google.com",
                picture : 'https://cdn.pixabay.com/photo/2018/03/30/10/06/color-3274960_960_720.jpg',
                
                classValue: "good",
            }            
        };
    },
});

console.log(app);