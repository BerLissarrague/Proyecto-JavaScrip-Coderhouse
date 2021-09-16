import { agregarTurno, eliminarTurno, editarTurno, listaDeTurnos, comparar } from "./funciones.js";
import { Persona } from "./modelos.js";

let personaRegistrada;
let fechaRegistrada;

$("#formulario").on("submit", (event) => {
    
    const nombre = $("#full_name_id")[0].value;
    const edad = $("#age_id")[0].value;
    const mail = $("#street1_id")[0].value;
    const fecha =$("#datepicker")[0].value;
    const turno = $("#turno_id")[0].value;

    if (edad < 15 || edad > 100) {
        alert('Edad inválida');
        event.preventDefault();
        return;
    } else if (edad >= 15 && edad < 18) {
        alert("Recorda venir con un mayor");
    }
    if (listaDeTurnos.length > 0) {
        // Retorna cliente con turno registrado igual al actual
        fechaRegistrada = listaDeTurnos.find(cliente => cliente.fecha === fecha);
    }

    if (listaDeTurnos.length > 0) {
        // Retorna cliente con turno registrado igual al actual
        personaRegistrada = listaDeTurnos.find(cliente => cliente.turno === turno);

        if (turno >= 1 && turno <= 7 && fechaRegistrada ) {
            // Si existe turno actual
            if (personaRegistrada) {
                alert("El turno esta dado, intenta otro turno");
                event.preventDefault();
                return;
            }
        }
    }

    const nuevoturno = new Persona(nombre, edad, mail, fecha, turno);
    agregarTurno(nuevoturno);
    
})
 //ordena por turno   
listaDeTurnos.sort(comparar);

for (let i = 0; i < listaDeTurnos.length; i++) {
    $("#listaCliente").append(`<li> * El turno numero ${listaDeTurnos[i].turno} ha sido registrado a nombre de ${listaDeTurnos[i].nombre}. El dia ${listaDeTurnos[i].fecha} va a estar. </li> <span></span>
        <button class="btn btn-dark btnremover">Remover</button> <span></span> <button class="btn btn-dark btneditar">Editar</button>`) ;
    $(".btnremover").on('click', () => {
        eliminarTurno(listaDeTurnos[i].turno)})
        $(".btneditar").on('click', () => {
        editarTurno(listaDeTurnos[i].turno)
    });   
}


    $( function() {
        $( "#datepicker" ).datepicker();
    } );

    $("#datepicker" ).datepicker({
        beforeShowDay: $.datepicker.noWeekends
      });
