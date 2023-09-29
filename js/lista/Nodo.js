export default class Nodo {
    constructor(d, s){
        this._dato = d
        this._siguiente = s
    }

    get getDato(){
        return this._dato
    }

    set setDato(d){
        this._dato = d
    }

    get getSiguiente(){
        return this._siguiente
    }

    set setSiguiente(s){
        this._siguiente = s
    }
}