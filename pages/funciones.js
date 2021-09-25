const agregarTurno = (listaDeTurnos, posibleTurno) => {
    listaDeTurnos.push(posibleTurno);
    localStorage.setItem("listaDeTurnos", JSON.stringify(listaDeTurnos));
} 

const buscarTurno = (listaDeTurnos, turno) => {
    let personaEncontrado = listaDeTurnos.find(persona => persona.turno === turno);
    if (!personaEncontrado) {
        throw Error("no existe la persona");
    }
    return personaEncontrado;
}

const editarTurno = (listaDeTurnos,turno ) => {
    let personaActual = buscarTurno(listaDeTurnos, turno);
    if (personaActual) {
        $("#full_name_id")[0].value = personaActual.nombre;
        $("#age_id")[0].value = personaActual.edad;
        $("#street1_id")[0].value = personaActual.email;
        $("#datepicker")[0].value = personaActual.fecha;
        $("#turno_id")[0].value = personaActual.turno;
        eliminarTurno(listaDeTurnos, personaActual.turno);
    }

}

const eliminarTurno = (listaDeTurnos, turno) => {
    const index = listaDeTurnos.findIndex(persona => persona.turno === turno);
    if (index >= 0) {
        listaDeTurnos.splice(index, 1)
        localStorage.setItem("listaDeTurnos", JSON.stringify(listaDeTurnos));

    }
}

// Comparar por Fecha
const compararPorFecha = (a, b) => {
    if (a.fecha > b.fecha) {
        return 1;
    }
    if (a.fecha < b.fecha) {
        return -1;
    }

    return 0;
}
// Comparar por Fecha
const compararPorTurno = (a, b) => {
    if (a.turno > b.turno) {
        return 1;
    }
    if (a.turno < b.turno) {
        return -1;
    }

    return 0;
}

export {
    agregarTurno,
    eliminarTurno,
    editarTurno,
    compararPorFecha,
    compararPorTurno

}