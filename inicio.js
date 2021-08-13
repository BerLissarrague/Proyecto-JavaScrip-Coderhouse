const cantTurnos = " siete (7) turnos";
const cerrado = "20 hs.";
var miNumero = 1;
var cantidadPersonasPromedio = 0;
var acumuladorEdades = 0;
var bienvenido = ("Bienvenido, gracias por su visita");
alert(bienvenido);
do {
    cantidadPersonasPromedio = parseInt(prompt("Ingrese cantidad de turnos que desea sacar (distinto de 0)"));
} while (cantidadPersonasPromedio == 0);
for (miNumero; miNumero <= cantidadPersonasPromedio; miNumero++) {
    var edad = parseInt(prompt("Ingrese su edad"));
    if (edad > 0 && edad < 110) {
        if (edad < 18) {
            alert("Recorda venir con un mayor");
        }
        acumuladorEdades = acumuladorEdades + edad;// acumuladorEdades += edad; contador += 1;
        console.log("La suma de las edades es: ", acumuladorEdades);
        alert("Turno 1 de 8 a 9:30" + " Turno 2 de 9:30 a 11 " + "Turno 3 de 11 a 12:30" + " Turno 4 de 12:30 a 14 " + "Turno 5 de 14 a 15:30" + " Turno 6 de 15:30 a 17 " + "Turno 7 de 17 a 18:30");
        var turno = parseInt(prompt("Ingresa el numero turno que desee"));
        let turnoDado = 3;
        if (turno >= 1 && turno <= 7) {
            if (turno == turnoDado) {
                do {
                    alert("El turno esta dado, intenta otro turno");
                    var turno = parseInt(prompt("Ingresa el numero del turno"));
                } while (turno != turnoDado) {
                    alert("turno Registrado");
                    console.log("Su turno es el numero ", turno);
                }
            }
            else {
                alert("turno registrado");
                console.log("Su turno es el numero ", turno);
            }

        }
        else if (turno < 1 || turno > 7) {
            alert("Solo se toman " + cantTurnos + " por dia");
        }
        else if (isNaN(turno)) {
            alert('El turno no se ha guardado ya que no especificó horario o canceló la transacción')
        }

    }
}
if (edad > 110) {
    alert('Edad inválida')
}
let promedio = acumuladorEdades / cantidadPersonasPromedio;
console.log('el promedio de edad es: ', promedio);




