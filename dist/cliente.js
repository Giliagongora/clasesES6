"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//Creacion de la clase Cliente
var Cliente = /*#__PURE__*/function () {
  //Creacion constructor con sus correspondientes propiedades privadas
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);
    this._nombre = function () {
      return nombre;
    };
    this._impuesto = function () {
      return impuesto;
    };
  }
  //Metodo para calcular el impuesto
  _createClass(Cliente, [{
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      //Validacion para comprobar si queda exonerado de impuestos
      if (this._impuesto().montoBrutoAnual() < this._impuesto().deducciones()) {
        return "queda exonerado de Impuestos Anuales";
      }
      //Si no se cumple la validacion de arriba, calcula el impuesto anual
      var resultado = (this._impuesto().montoBrutoAnual() - this._impuesto().deducciones()) * 0.21;
      return "el impuesto anual a pagar es de: ".concat(resultado);
    }

    //get para la propiedad
  }, {
    key: "nombre",
    get: function get() {
      return this._nombre;
    }

    //set para la propiedad
    ,
    set: function set(nuevo_nombre) {
      return this._nombre = function () {
        return nuevo_nombre;
      };
    }
  }]);
  return Cliente;
}(); //Instruccion para exportar la clase
var _default = exports["default"] = Cliente;