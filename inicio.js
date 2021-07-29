const abierto = "10 hs. a 19 hs.";
const cerrado = "20 hs.";
//Simple
var bienvenido = ("Bienvenido, gracias por su visita");
alert(bienvenido);
//Condicional
if (confirm("Desea sacar turno o navegar")) {
     var edad = parseInt(prompt("Ingrese su edad"));
    if (edad > 0 && edad < 110) {
        if (edad < 18) {
            alert("Recorda venir con un mayor....");
        }
        var horaDeTurno = parseInt(prompt("Ingresa la hora del turno"));
        var horaDeTurnoRegistrado = 11;
        //var duracionDelTurno= horaDeTurno + 1;
        if (horaDeTurno >= 10 && horaDeTurno <= 19) {
            if (horaDeTurno == horaDeTurnoRegistrado) {
                alert("El turno esta dado, intenta otro horario");
                var horaDeTurno = parseInt(prompt("Ingresa la hora del turno"));}                            
            else {
                alert("turno registrado");
            }
        }
            else if (horaDeTurno < 10 || horaDeTurno > 18) {
            alert("Los turnos se toman de " + abierto + "y cerramos a las " + cerrado);
        }
        else if (isNaN(horaDeTurno)) {
            alert('El turno no se ha guardado ya que no especificó horario o canceló la transacción')
        }

    }
    if (edad > 110) {
        alert('Edad inválida')
    }
}

