"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//Instrucciones para importar las clases

//Funcion Validadora 
function validarNumeros(cliente, montoBruto, deduccion) {
  if (montoBruto < 0 || deduccion < 0) {
    console.log("Error: Estimado cliente, los valores de Monto bruto anual y Deducciones deben ser positivos");
    //throw new Error("Error: Los valores de Monto bruto anual y Deducciones deben ser positivos")
  } else {
    impuesto = new _impuestos["default"](montoBruto, deduccion);
    cliente = new _cliente["default"](cliente, impuesto);
    console.log("Estimado cliente ".concat(cliente.nombre(), ", ").concat(cliente.calcularImpuesto()));
  }
}
var impuesto;
var cliente1 = "Juanito";
var deduccion1 = 500;
deduccion1 = -10000;
var montoBruto1 = 1000;
var cliente2 = "Jose";
cliente2 = "Miguel";
var deduccion2 = 1000;
var montoBruto2 = 5000;
var cliente3 = "Luis";
var deduccion3 = 10000;
var montoBruto3 = 100;

// Llamada a la función
validarNumeros(cliente1, montoBruto1, deduccion1);
validarNumeros(cliente2, montoBruto2, deduccion2);
validarNumeros(cliente3, montoBruto3, deduccion3);