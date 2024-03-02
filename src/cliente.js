//Creacion de la clase Cliente
class Cliente {
    //Creacion constructor con sus correspondientes propiedades privadas
    constructor(nombre, impuesto) {
        this._nombre = () => {
            return nombre;
        }
        this._impuesto = () => {
            return impuesto;
        }
    }
    //Metodo para calcular el impuesto
    calcularImpuesto() {
        //Validacion para comprobar si queda exonerado de impuestos
        if (this._impuesto().montoBrutoAnual() < this._impuesto().deducciones()) {
            return "queda exonerado de Impuestos Anuales";
        }
        //Si no se cumple la validacion de arriba, calcula el impuesto anual
        const resultado = (this._impuesto().montoBrutoAnual() - this._impuesto().deducciones()) * 0.21;
        return `el impuesto anual a pagar es de: ${resultado}`;
    }

    //get para la propiedad
    get nombre() {
        return this._nombre;
    }

    //set para la propiedad
    set nombre(nuevo_nombre) {
        return this._nombre = () => {
            return nuevo_nombre;
        }
    }
}
//Instruccion para exportar la clase
export default Cliente;