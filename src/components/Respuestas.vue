<template>

  <section class="src-components-respuestas">
    <div class="container-fluid mt-3">
      <table class="table table-dark">
          <tr>
            <th>Numero de pregunta</th>
            <th>Respuesta</th>
          </tr>
          <tr v-for="(pregunta, index) in preguntas" :key="index">
            <td>{{ pregunta.numero }}</td>
            <td>{{ pregunta.respuesta }}</td>
          </tr>
      </table>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas : [
          {numero: 1 , respuesta: "C"},
          {numero: 2 , respuesta: "C"},
          {numero: 3 , respuesta: "B"}
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-respuestas {

  }
</style>
