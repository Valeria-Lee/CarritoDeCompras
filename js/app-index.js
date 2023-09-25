//import {List, Item} from 'https://esm.sh/linked-list@3'

const carritoDisplay = document.getElementById("carritoDisplay")

console.log("hola")

class Producto {
    constructor(titulo, categoria, precio, cantidad=0){
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
// crear los productos.
const headphone_1 = new Producto("headphones", "headphones", 20)
const headphone_2 = new Producto("headephones", "headphones", 40)

function displayProducto(Producto) {
    const card = document.createElement("div")
    card.innerHTML = `<div class="card">
    <img class="imagen" src="img/productos/headphones/headphones_1.png">
    <h2 class="titulo">${Producto.titulo}</h2>
    <h4 class="categoria">${Producto.categoria}</h4>
    <h4 class="precio">${Producto.precio}$</h4>
    <input type="number" class="cantidad" min="1" max="10">
    <button class="añadir" onclick="crearCarrito(producto)">Añadir producto</button>
    </div>`
    carritoDisplay.append(card)
}

displayProducto(headphone_1)
displayProducto(headphone_2)