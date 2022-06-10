<template>

  <section class="src-components-notas">
    <div class="container-fluid mt-3">
      <h3>Responda el formulario:</h3>
      <br>
      <vue-form :state="formstate" @submit.prevent="enviar()">
        
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            v-model.trim="formData.nombre"
            name="nombre"
            autocomplete="off"
            class="form-control"
            required
            sin-espacios
            :minlength="textMinLength"
            :maxlength-con-cartel="textMaxLength"
          />

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              El campo es requerido
            </div>
            <div slot="sin-espacios" class="alert alert-danger mt-1">
              El campo no acepta espacios
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              El campo debe contar con al menos 3 caracteres
            </div>
            <div slot="maxlength-con-cartel" class="alert alert-danger mt-1">
              El campo debe contar como maximo con 15 caracteres
            </div>
          </field-messages>
        </validate>
        <br>

        <validate tag="div">
          <label for="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            v-model.trim="formData.apellido"
            name="apellido"
            autocomplete="off"
            class="form-control"
            required
            sin-espacios
            :minlength="textMinLength"
            :maxlength-con-cartel="textMaxLength"
          />

          <field-messages name="apellido" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              El campo es requerido
            </div>
            <div slot="sin-espacios" class="alert alert-danger mt-1">
              El campo no acepta espacios
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              El campo debe contar con al menos 3 caracteres
            </div>
            <div slot="maxlength-con-cartel" class="alert alert-danger mt-1">
              El campo debe contar como maximo con 15 caracteres
            </div>
          </field-messages>
        </validate>
        <br>

        <validate tag="div">
          <label for="nota">Nota</label>
          <input
            type="number"
            id="nota"
            v-model.number="formData.nota"
            name="nota"
            autocomplete="off"
            class="form-control"
            required
            :min="minNota"
            :max="maxNota"
          />

          <field-messages name="nota" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              El campo es requerido
            </div>
            <div slot="min" class="alert alert-danger mt-1">
              La nota minima es 0
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La nota maxima es 10
            </div>
          </field-messages>
        </validate>
        <br>

        <button class="btn btn-success my-3" :disabled="formstate.$invalid" type="submit">Enviar</button>
      </vue-form>
      <br>

      <h3>Tabla de alumnos:</h3>
      <br>
      
      <div v-if="alumnos.length" class="table-responsive">
        <table class="table table-dark">
            <tr>
              <th>Alumno</th>
              <th>Nota</th>
            </tr>
            <tr v-for="(alumno, index) in alumnos" :key="index">
              <td>{{ alumno.nombre + " " + alumno.apellido}}</td>
              <td :style="getStyle(alumno.nota)">{{ alumno.nota }}</td>
            </tr>
            <tr :style="getStyle(obtenerPromedioNotas)">
              <td><b>Promedio</b></td>
              <td><b>{{obtenerPromedioNotas}}</b></td>
            </tr>
        </table>
      </div>
      <h4 v-else  class="alert alert-warning"> 
        <i>Aún no se agregaron alumnos</i>
      </h4>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-notas',
    props: [],
    mounted () {

    },
    data () {
      return {
        formstate: {},
        formData: this.obtenerDataInicial(),
        alumnos: [],
        textMinLength : 3,
        textMaxLength : 15,
        minNota : 0,
        maxNota : 10,
      }
    },
    methods: {
      obtenerDataInicial(){
        return{
          nombre: null,
          apellido: null,
          nota: null
        }
      },
      enviar(){
        let alumno = {...this.formData}
        this.alumnos.push(alumno)
        this.formData = this.obtenerDataInicial()
        this.formstate._reset()
      },
      getStyle(num){
        let color = "red"
        if(num >= 4 && num < 7){
          color = "yellow"
        } else if (num >= 7){
          color = "green"
        }
        return {'color': color}
      }
    },
    computed: {
      obtenerPromedioNotas(){
        let sum = 0
        let promedio = 0
        for (let i = 0; i < this.alumnos.length; i++) {
          sum += this.alumnos[i].nota
        }
        if(sum != 0){
           promedio = sum / this.alumnos.length
        }
        else{
          promedio = 0
        }
        /*  Uso toFixed() para redondear el numero a 2 cifras */
        return promedio.toFixed(2) 
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-notas {

  }
</style>
