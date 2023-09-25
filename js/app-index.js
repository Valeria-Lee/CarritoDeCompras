import {List, Item} from 'https://esm.sh/linked-list@3'

const contenedor = document.getElementById("container")
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

function agregarProduccto(producto) {
    if (!carritoProductos) {
        carritoProductos = new List (new Item(producto)); //crear carrito
    } 
    carritoProductos.push(producto);
    actualizarCarrito();
}

function actualizarCarrito(){
    carrito.innerHTML = ""; 
    let total = 0;

    for (const producto of carritoProductos) {
        const productoElement = document.createElement("div");
        productoElement.classList.add("producto-carrito");
        productoElement.innerHTML = `
            <p>${producto.titulo}</p>
            <p>Cantidad: ${producto.cantidad}</p>
        `;
       ;

    carrito.appendChild(productoElement);
    }
}