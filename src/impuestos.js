//Creacion clase Impuestos
class Impuestos {
    //Creacion constructor con sus correspondientes propiedades privadas
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = () => {
            return montoBrutoAnual;
        }
        this._deducciones = () => {
            return deducciones;
        }
    }
    //get para las propiedades
    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    get deducciones() {
        return this._deducciones;
    }

    //set para las propiedades
    set deducciones(nuevas_deducciones) {
        return this._deducciones = () => {
            return nuevas_deducciones;
        }
    }

    set montoBrutoAnual(nuevo_montoBrutoAnual) {
        return this._montoBrutoAnual = () => {
            return nuevo_montoBrutoAnual;
        }
    }
}
//Instruccion para exportar la clase
export default Impuestos;