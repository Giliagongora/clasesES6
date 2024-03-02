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
//Creacion clase Impuestos
var Impuestos = /*#__PURE__*/function () {
  //Creacion constructor con sus correspondientes propiedades privadas
  function Impuestos(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuestos);
    this._montoBrutoAnual = function () {
      return montoBrutoAnual;
    };
    this._deducciones = function () {
      return deducciones;
    };
  }
  //get para las propiedades
  _createClass(Impuestos, [{
    key: "montoBrutoAnual",
    get: function get() {
      return this._montoBrutoAnual;
    },
    set: function set(nuevo_montoBrutoAnual) {
      return this._montoBrutoAnual = function () {
        return nuevo_montoBrutoAnual;
      };
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    }

    //set para las propiedades
    ,
    set: function set(nuevas_deducciones) {
      return this._deducciones = function () {
        return nuevas_deducciones;
      };
    }
  }]);
  return Impuestos;
}(); //Instruccion para exportar la clase
var _default = exports["default"] = Impuestos;