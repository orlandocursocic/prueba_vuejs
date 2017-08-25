$(document).ready( function() {

    Vue.component('prueba-vue', {
        template: '<p> Prueba componente Vue </p>'
    });

    Vue.component('primer-componente', {
        template: '#my_template',
        //props: ['Nombre', 'Apellido']
        props: {
            Nombre: {type: String, required: false, default: 'paco'},
            Apellido: {type: String, required: true}
          }
    });

    Vue.component('componentazo', {
        template: '#componentazo_template',

        methods: {
          add: function() {
            this.years++;
            updateYears();
          },
          sub: function() {
            this.years--;
            updateYears();
          }
          /*
          updateYears(){
            this.$emit('update:years', this.years + ' Updated!');
          }
          */
        },

        props: {
            years: {type: Number, default: 0},
            tech: {type: String, required: true, default: "JavaScript"}
          }
    });


    var app = new Vue({
      el: '#app',
      data: {
        message: 'Pruebas con Vue',
        name: 'Orlando',
        surname: 'Britto',
        years: 0
      }
    });
});
