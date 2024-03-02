//Instrucciones para importar las clases
import Cliente from "./cliente.js";
import Impuestos from "./impuestos.js";


//Funcion Validadora montoBrutoAnual y deducciones sean valores positivos
function validarNumeros(cliente, montoBruto, deduccion) {
    //Si montoBruto o deduccion son menores a cero, es decir numero negativos, mostrara un
    //mensaje de error en la consola, si son valores positivos ingresara al else
    if (montoBruto < 0 || deduccion < 0) {
        console.log("Error: Estimado cliente, los valores de Monto bruto anual y Deducciones deben ser positivos");

    } else {
        //Al ingresar al else crea las instancias de Impuestos y Cliente
        //segun los valores dados en los argumentos al llamar la funcion
        impuesto = new Impuestos(montoBruto, deduccion);
        cliente = new Cliente(cliente, impuesto);
        //Mensaje para el usuario mostrandose en consola
        console.log(`Estimado cliente ${cliente.nombre()}, ${cliente.calcularImpuesto()}`);
    }
}

//Creacion de impuesto vacia
let impuesto;
//Creacion de cliente1
let cliente1 = "Juanito";
//Creacion de deduccion1
let deduccion1 = 500;
//Generando Set de la propiedad deduccion de Impuestos en cliente1
deduccion1 = -10000;
//Creacion de montoBruto1
let montoBruto1 = 1000;
//Creacion de cliente2
let cliente2 = "Jose";
//Generando Set de la propiedad nombre de Cliente en cliente2
cliente2 = "Miguel";
//Creacion de deduccion2
let deduccion2 = 1000
//Creacion de montoBruto2
let montoBruto2 = 5000;
//Creacion de cliente3
let cliente3 = "Luis";
//Creacion de deduccion3
let deduccion3 = 10000;
//Creacion de montoBruto3
let montoBruto3 = 100;
//Generando Set de la propiedad montoBruto de Impuestos en cliente3
montoBruto3 = 4000;

// Llamada a la función segun cada caso con sus respectivos argumentos
validarNumeros(cliente1, montoBruto1, deduccion1);

validarNumeros(cliente2, montoBruto2, deduccion2);

validarNumeros(cliente3, montoBruto3, deduccion3);
