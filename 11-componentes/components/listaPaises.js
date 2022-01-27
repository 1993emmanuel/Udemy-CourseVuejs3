app.component("lista-paises",{
    template : `
        <ol>
            <li v-for="(pais, index) in paises" :key="index">
                {{pais}}
            </li>
        </ol>
        <hr>
        <ul>
            <li v-for="(mundo, index2) in mundos" :key="index2">
                {{mundo}}
            </li>
        </ul>
        <hr>
        <h2>Datos del objeto Persona</h2>
        <p>Nombre: {{persona.name}}</p>
        <p>Age: {{persona.age}}</p>
        <p>Address: {{persona.address}}</p>
    `,
    props:{
        paises: Array,
        mundos : Array,
        persona: Object,
    }
})