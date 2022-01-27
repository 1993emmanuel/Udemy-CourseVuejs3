const app = Vue.createApp({
    data() {
        return {
            title : 'calculadora vue',
            n1 : 0,
            n2 : 0,
        };
    },
    computed: {
        suma(){
            return this.n1 + this.n2;
        },
        resta(){
            return this.n1 - this.n2;
        },
        multiplicar(){
            return this.n1 * this.n2;
        },
        dividir(){
            const resultado = this.n1 / this.n2;
            return resultado === Infinity || resultado === -Infinity ? "Error no calculable" : resultado;
        }
    }
});