import { agregarTurno, eliminarTurno, editarTurno, compararPorFecha, compararPorTurno } from "./funciones.js";
import { Persona } from "./modelos.js";

const URL_ARCHIVO_JSON = '../db/data.json';

let personaRegistrada;
let fechaRegistrada;
//let listaDeTurnos=[];

let listaDeTurnos = JSON.parse(localStorage.getItem("listaDeTurnos")) || [];

console.log(listaDeTurnos);

$('#btn1').click((event) => {
    
    const nombre = $("#full_name_id")[0].value;
    const edad = $("#age_id")[0].value;
    const mail = $("#street1_id")[0].value;
    const fecha = $("#datepicker")[0].value;
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
        fechaRegistrada = listaDeTurnos.filter(cliente => cliente.fecha === fecha);
        
        // Retorna cliente con turno registrado igual al actual
        personaRegistrada = fechaRegistrada.find(cliente => cliente.turno === turno);
        
        if (personaRegistrada) {
            // Si existe turno actual
            alert("El turno esta dado, intenta otro turno");
            event.preventDefault();
            return;
        }
    }
    
    if (parseInt(turno) >= 1 && parseInt(turno) <= 7) {
        const nuevoturno = new Persona(nombre, edad, mail, fecha, turno);
        agregarTurno(listaDeTurnos, nuevoturno);
    }
    
    
    
})
/*$.getJSON( URL_ARCHIVO_JSON, (response, status) => {
    
    listaDeTurnos = response;
    if ( status === 'success') {
        console.log(response);
       

    }
    
})
*/

const mostrarTurnos = () => {
    
    for (let i = 0; i < listaDeTurnos.length; i++) {
        
        $("#listaCliente").append(`<li> * El turno numero ${listaDeTurnos[i].turno} ha sido registrado a nombre de ${listaDeTurnos[i].nombre}. El dia ${listaDeTurnos[i].fecha} va a estar. </li> <span></span>
        <button class="btn btn-dark btnremover" onclick="history.go(0)">Remover</button> <span></span> <button id="btn" class="btn btn-dark btneditar" >Editar</button>`);
        $(".btnremover").click(() => {
            eliminarTurno(listaDeTurnos, listaDeTurnos[i].turno);
                
        })
        $(".btneditar").click(() => {
            editarTurno(listaDeTurnos, listaDeTurnos[i].turno);
            
        });
    }
}

//Calendario
$(function () {
    $("#datepicker").datepicker()
});

$("#datepicker").datepicker({
    beforeShowDay: $.datepicker.noWeekends
});


listaDeTurnos.sort(compararPorTurno); // Ordena por turno
listaDeTurnos.sort(compararPorFecha);//Ordena por fecha

mostrarTurnos();


