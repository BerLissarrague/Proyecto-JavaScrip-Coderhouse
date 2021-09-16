// Agrega turno. 
let listaDeTurnos = JSON.parse(localStorage.getItem("listaDeTurnos")) || [];
const agregarTurno = (posibleTurno) => {
  
    listaDeTurnos.push(posibleTurno);
    localStorage.setItem("listaDeTurnos", JSON.stringify(listaDeTurnos));    
}

const buscarTurno = (turno) => {
    let personaEncontrado = listaDeTurnos.find(persona => persona.turno === turno);
    if (!personaEncontrado) {
        throw Error("no existe la persona");
    }
    return personaEncontrado;
}

const editarTurno = (turno) => {
    let personaActual = buscarTurno(turno);
    if (personaActual) {
        $("#full_name_id")[0].value = personaActual.nombre;
        $("#age_id")[0].value = personaActual.edad;
        $("#street1_id")[0].value = personaActual.email;
        $("#datepicker")[0].value = personaActual.fecha;
        $("#turno_id")[0].value = personaActual.turno;
        eliminarTurno (personaActual.turno);
    }

}

const eliminarTurno = (turno) => {
    const persona = buscarTurno(turno);
    const index = listaDeTurnos.findIndex(persona => persona.turno === turno);
    if (index >= 0) {
        listaDeTurnos.splice(index, 1)
        localStorage.setItem("listaDeTurnos", JSON.stringify(listaDeTurnos));
        turnosCliente(listaDeTurnos);
    }
}
// Comparar por turnos
const comparar = (a, b) => {
    if (a.fecha > b.fecha) {
        return 1;
    }
    if (a.fecha < b.fecha) {
        return -1;
    }
    return 0;
}



export{
    agregarTurno,
    eliminarTurno,
    editarTurno,
    listaDeTurnos,
    comparar

}