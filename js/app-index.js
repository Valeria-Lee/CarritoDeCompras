import {List, Item} from 'https://esm.sh/linked-list@3'

const contenedor = document.getElementById("container")
const productCard = document.querySelector(".card")
const carritoDisplay = document.getElementById("carritoDisplay")

console.log("hola")

class Producto {
    constructor(titulo, categoria, precio, cantidad){
        this.titulo = titulo
        this.categoria = categoria
        this.precio = precio
        this.cantidad = cantidad
    }
}
