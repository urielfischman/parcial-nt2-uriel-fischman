import Vue from 'vue'
import VueForm from 'vue-form'

let options = {
    validators : {
        'sin-espacios' : function(value) {
            return !value.includes(' ')
        },
        /* Creo validador "maxlength-con-cartel" para poder mostrar un cartel cuando se supera el length maximo, ya que el validador original no lo permite*/
        'maxlength-con-cartel' : function(value,maxLenght) {
            return value.length <= maxLenght
        }
    }
}

Vue.use(VueForm,options)