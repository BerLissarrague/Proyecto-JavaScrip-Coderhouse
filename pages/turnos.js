class Persona {
    constructor(nombre, edad, mail, turnoIngresado) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = mail;
        this.turno = turnoIngresado;
    }
}

let personaRegistrada;
const listaCliente = document.getElementById("listaCliente");
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("full_name_id");
const inputEdad = document.getElementById("age_id");
const inputMail = document.getElementById("street1_id");
const inputTurno = document.getElementById("turno_id");


let listaDeTurnos = JSON.parse(localStorage.getItem("listaDeTurnos")) || [];


// Agrega turno. 
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
        inputNombre.value = personaActual.nombre;
        inputEdad.value = personaActual.edad;
        inputMail.value = personaActual.email;
        inputTurno.value = personaActual.turno;
        eliminarTurno(personaActual.turno);
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
    if (a.turno > b.turno) {
        return 1;
    }
    if (a.turno < b.turno) {
        return -1;
    }
    return 0;
}

formulario.addEventListener("submit", (event) => {
    const nombre = inputNombre.value;
    const edad = inputEdad.value;
    const mail = inputMail.value;
    const turno = inputTurno.value;

    if (edad < 15 || edad > 100) {
        alert('Edad inválida');
        return;
    } else if (edad >= 15 && edad < 18) {
        alert("Recorda venir con un mayor");
    }

    if (listaDeTurnos.length > 0) {
        // Retorna cliente con turno registrado igual al actual
        personaRegistrada = listaDeTurnos.find(cliente => cliente.turno === turno);

        if (turno >= 1 && turno <= 7) {
            // Si existe turno actual
            if (personaRegistrada) {
                alert("El turno esta dado, intenta otro turno");
                return;
            }
        }
    }

    const nuevoturno = new Persona(nombre, edad, mail, turno);
    agregarTurno(nuevoturno);

})
const turnosCliente = (listaDeTurnos) => {
    //  limpia listaCLiente para evitar que se concatene la info de local storage
    if (listaCliente) {
        listaCliente.innerHTML = '';
    }

    //ordena por turno
    listaDeTurnos.sort(comparar);

    for (let i = 0; i < listaDeTurnos.length; i++) {
        console.log(listaDeTurnos[i]);
        let itemcliente = document.createElement('li');
        itemcliente.className = "liturnos";
        itemcliente.textContent = `El turno numero ${listaDeTurnos[i].turno} ha sido registrado a nombre de ${listaDeTurnos[i].nombre}.`;
        listaCliente.appendChild(itemcliente);

        let btnremover = document.createElement('button');
        btnremover.textContent = 'Remover';
        btnremover.className = 'btn btn-dark btnremover';
        btnremover.onclick = () => {
            eliminarTurno(listaDeTurnos[i].turno);
        }
        itemcliente.appendChild(btnremover);

        let btnupdate = document.createElement('button');
        btnupdate.textContent = 'Editar';
        btnupdate.className = 'btn btn-dark btnedit';
        btnupdate.onclick = () => {
            editarTurno(listaDeTurnos[i].turno);
        }
        itemcliente.appendChild(btnupdate);
    }

}

turnosCliente(listaDeTurnos);



