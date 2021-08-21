class Persona {
    constructor(nombre, edad, turnoIngresado) {
        this.nombre = nombre;
        this.edad = edad;
        this.turno = turnoIngresado;
    }
}

const cantTurnos = " siete (7) turnos";
const cerrado = "20 hs.";
const cantidadturnos = 7;
const bienvenido = "Bienvenido, gracias por su visita";

let cantidadPersonasPromedio = 0;
let clientes = [];
let acumuladorEdades = 0;
let turnoIngresado;
let promedio;
let nombre;
let edad;
let personaRegistrada;
let persona;
let turnoInvalido;

alert(bienvenido);

do {
    cantidadPersonasPromedio = parseInt(prompt("Ingrese cantidad de turnos que desea sacar (entre 1 y 6)"));
} while (cantidadPersonasPromedio == 0 || cantidadPersonasPromedio > 7);

for (let miNumero = 1; miNumero <= cantidadPersonasPromedio; miNumero++) {
    nombre = prompt("ingresa tu nombre");
    edad = parseInt(prompt("Ingrese su edad"));
    if (edad < 18) {
        alert("Recorda venir con un mayor");
    }

    if (edad > 110 && edad < 15) {
        alert('Edad inválida');
        while (edad > 110) {
            edad = parseInt(prompt("Ingrese nuevamente su edad"));
        } 
    } 

    acumuladorEdades += edad;
    console.log("La suma de las edades es: ", acumuladorEdades);

    alert("Turno 1: 8 a 9:30 - Turno 2: 9:30 a 11 - Turno 3: 11 a 12:30 - Turno 4: 12:30 a 14 - Turno 5: 14 a 15:30 - Turno 6: 15:30 a 17 - Turno 7: 17 a 18:30");
    
    do {
        turnoIngresado = parseInt(prompt("Ingresa el numero turno que desee")); 
        // Indicador de turno incorrecto
        turnoInvalido = false;

        // chequea si hay personas ya registradas 
        if (clientes.length > 0) {
            // Retorna cliente con turno registrado igual al actual
            personaRegistrada = clientes.find(cliente => cliente.turno === turnoIngresado);
        }
    
        if (turnoIngresado >= 1 && turnoIngresado <= 7) {
            // Si existe turno actual
            if (personaRegistrada) {
                alert("El turno esta dado, intenta otro turno");
            }
            // No existe turno actual, registra turno
            else {
                persona = new Persona(nombre, edad, turnoIngresado);
                clientes.push(persona);
                personaRegistrada = undefined;
                alert("turno registrado");
                console.log("Su turno es el numero ", turnoIngresado);
            }
            // numero incorrecto de turno
        } else if (turnoIngresado < 1 || turnoIngresado > 7) {
            alert("Solo se toman " + cantTurnos + " por dia");
            turnoInvalido = true;
            //Numero no valido
        } else if (isNaN(turnoIngresado)) {
            alert('El turno no se ha guardado ya que no especificó horario o canceló la transacción');
            turnoInvalido = true;
        }
    } while (personaRegistrada || turnoInvalido);

}
console.log("Ellos son las personas que tienen turno para pasar por el estudio : ", clientes)
promedio = acumuladorEdades / cantidadPersonasPromedio;
console.log('el promedio de edad es: ', promedio);
 alert("Persona registrada Correctamente ")