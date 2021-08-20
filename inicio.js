const cantTurnos = " siete (7) turnos";
const cerrado = "20 hs.";
let miNumero = 1;
let cantidadPersonasPromedio = 0;
const cliente = [];
const cantidadturnos = 7;
acumuladorEdades = 0;
/*class DescripCliente {
    constructor(nombre, edad, turnoingresado) {
        this.nombre,
            this.edad,
            this.turnoingresado
    }
}*/
let bienvenido = ("Bienvenido, gracias por su visita");
alert(bienvenido);
do {
    cantidadPersonasPromedio = parseInt(prompt("Ingrese cantidad de turnos que desea sacar (distinto de 0)"));
} while (cantidadPersonasPromedio == 0);
for (miNumero; miNumero <= cantidadPersonasPromedio; miNumero++) {
    let nombre = prompt("ingresa tu nombre");
    let edad = parseInt(prompt("Ingrese su edad"));
    if (edad < 18) {
        alert("Recorda venir con un mayor");
    }
    acumuladorEdades = acumuladorEdades + edad;
    console.log("La suma de las edades es: ", acumuladorEdades);
    alert("Turno 1 de 8 a 9:30 Turno 2 de 9:30 a 11  Turno 3 de 11 a 12:30 Turno 4 de 12:30 a 14  Turno 5 de 14 a 15:30  Turno 6 de 15:30 a 17  Turno 7 de 17 a 18:30");
    turnoIngresado = parseInt(prompt("Ingresa el numero turno que desee"));
    cliente.push({ nombre, edad, turnoIngresado });
    console.log(cliente)
    turnoDado = cliente.some(turnoIngresado => cliente.turnoIngresado === turnoIngresado);
    console.log(turnoDado);
    if (turnoIngresado >= 1 && turnoIngresado <= 7) {
        if (turnoDado) {
            do {
                alert("El turno esta dado, intenta otro turno");
                let turno = parseInt(prompt("Ingresa el numero del turno"));
            } while (turnoingresado != turnoDado) {
                alert("turno Registrado");
                console.log("Su turno es el numero ", turnoIngresado);
            }
        }
        else {
            alert("turno registrado");
            console.log("Su turno es el numero ", turnoIngresado);
        }

    }
    else if (turnoIngresado < 1 || turnoIngresado > 7) {
        alert("Solo se toman " + cantTurnos + " por dia");
    }
    else if (isNaN(turnoIngresado)) {
        alert('El turno no se ha guardado ya que no especificó horario o canceló la transacción');
    }

    if (edad > 110) {
        alert('Edad inválida');
    }
}
console.log("Ellos son las personas que tienen turno para pasar por el estudio : ", cliente)
promedio = acumuladorEdades / cantidadPersonasPromedio;
console.log('el promedio de edad es: ', promedio);


