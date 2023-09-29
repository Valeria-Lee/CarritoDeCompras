import Nodo from './Nodo.js';

class ListaSimplementeEnlazada {

  constructor(frente = null, longitud = 0, atras = null) {
    if (frente !== null || longitud !== 0) {
      this._frente = frente
      this._longitud = longitud
      this._atras = atras
    } else {
      this._frente = null
      this._longitud = 0
      this._atras = null
    }
  }

  insertar(dato) {
    let nuevoNodo = new Nodo(dato)
    if (this._frente === null) {
      this._frente = nuevoNodo
      this._atras = nuevoNodo
      this._atras.setSiguiente = this._frente
    } else {
      this._atras.setSiguiente = nuevoNodo
      this._atras = nuevoNodo
      this._atras.setSiguiente = this._frente
    }
    this._longitud += 1
  }

  obtener(indice) {
    if (indice < 0 || indice >= this._longitud) {
      console.log("Indice fuera de rango")
      return;
    } else if (indice === 0) {
      return this._frente.getDato
    } else {
      let nodoActual = this._frente
      for (let i = 0; i < indice; i++) {
        nodoActual = nodoActual.getSiguiente
      }
      return nodoActual.getDato
    }
  }

  eliminar(indice) {
    if (indice < 0 || indice >= this._longitud) {
      console.log("Indice fuera de rango")
      return;
    }
    if (indice === 0) {
      this._frente = this._frente.getSiguiente
    } else {
      let nodoAnterior = this._frente
      for (let i = 0; i < indice - 1; i++) {
        nodoAnterior = nodoAnterior.getSiguiente
      }
      let nodoEliminar = nodoAnterior.getSiguiente
      nodoAnterior.setSiguiente = nodoEliminar.getSiguiente
    }
    this._longitud -= 1
  }

  get getLongitud() {
    return this._longitud
  }
}

export default ListaSimplementeEnlazada