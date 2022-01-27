<template>
  <div id="btn-contador">
    <button @click="aumentar()" >{{ texto }}</button>
  </div>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
      default: "Aumentar",
    },
  },
  methods:{
    aumentar(){
      this.$emit("accion")
    },

  }
};
</script>

<style></style>
