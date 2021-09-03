class Persona {
    constructor(nombre, edad, mail, turnoIngresado) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = mail;
        this.turno = turnoIngresado;
    }
}

let listaDeTurno = JSON.parse(localStorage.getItem("ListaDeTurno"));
if (!listaDeTurno) {
    listaDeTurno = [];
}


const findOne = (turno) => {
    const personaLista = listaDeTurno.find(persona => persona.turno === turno);
    if (!personaLista) {
        throw Error("no existe la persona");
    }
    return personaLista;

}
const update = (turno, edad) => {
    const persona = findOne(turno);// id a buscar
    persona.edad = edad//nuevo
    localStorage.setItem("ListaDeTurno", JSON.stringify(listaDeTurno));
}

const deletee = (turno) => {
    listaDeTurno.splice(index, 1)

}


const remove = (turno) => {
    const persona = findOne(turno);
    const index = listaDeTurno.findIndex(persona => persona.turno === turno);
    if (index >= 0) {
        listaDeTurno.splice(index, 1)
    }
    localStorage.setItem("ListaDeTurno", JSON.stringify(listaDeTurno));

}

const create = (posibleTurno) => {
    listaDeTurno.push(posibleTurno);
    localStorage.setItem("ListaDeTurno", JSON.stringify(listaDeTurno));
}

let personaRegistrada;
const listaCliente = document.getElementById("listaCliente")
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("full_name_id");
const inputEdad = document.getElementById("age_id");
const inputMail = document.getElementById("street1_id");
const inputTurno = document.getElementById("turno_id");



const turnosCliente = (listaDeTurno) => {
    for (let i = 0; i < listaDeTurno.length; i++) {
        console.log(listaDeTurno[i]);
        let itemcliente = document.createElement('li');
        itemcliente.textContent = `EL turno numero ${listaDeTurno[i].turno} esta dado. Viene ${listaDeTurno[i].nombre} `;
        listaCliente.appendChild(itemcliente);

        let btnremove = document.createElement('span');
        btnremove.textContent = ' X';
        itemcliente.appendChild(btnremove);
        btnremove.onclick = () => {
            remove(listaDeTurno[i].turno);
        }

        let btnupdate = document.createElement('span');
        btnupdate.textContent = ' Edit';
        itemcliente.appendChild(btnupdate);
        console.log(btnupdate)
        btnupdate.onclick = () => {
            update(turno, edad);
        }


    }
}



console.log(listaDeTurno);
formulario.addEventListener("submit", (event) => {
    const nombre = inputNombre.value;
    const edad = inputEdad.value;
   

    if (edad < 15 || edad > 100) {
        alert('Edad inválida');
        remove();
    }else if ( edad >= 15 && edad < 18) { 
       alert("Recorda venir con un mayor");
    }
    const mail = inputMail.value;
  
    const turno = inputTurno.value;
    
    
    if (turno < 0 || turno > 7) {
        alert('Solo damos 7 turnos diarios')
        remove()

    }
    if (listaDeTurno.length > 0) {
        // Retorna cliente con turno registrado igual al actual
        personaRegistrada = listaDeTurno.find(cliente => cliente.turno === turno);
    }
      if (turno >= 1 && turno <= 7) {
        // Si existe turno actual
        if (personaRegistrada) {
            alert("El turno esta dado, intenta otro turno");
            remove()
        }
    }
        if(turno == "" ){
            alert("turno no definido")
            remove()
        }
        console.log("turno", turno);
   

    const nuevoturno = new Persona(nombre, edad, mail, turno);
    console.log(nuevoturno);


    create(nuevoturno);

})
turnosCliente(listaDeTurno);
