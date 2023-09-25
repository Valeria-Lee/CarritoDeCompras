import {List, Item} from 'https://esm.sh/linked-list@3'

const carritoDisplay = document.getElementById("carritoDisplay")
const productosText = document.getElementsByClassName("page")

class Producto extends Item {
    constructor(titulo, categoria, precio, cantidad=0){
        super()
        this.titulo = titulo
        this.categoria = categoria
        this.precio = precio
        this.cantidad = cantidad
    }
}

function agregarProduccto(Producto) {
    if (!carritoProductos) {
        carritoProductos = new List(new Item(Producto));
    } 
    carritoProductos.append(Producto);
    console.log("este es carritoProductos: " + carritoProductos)
    actualizarCarrito(carritoProductos);
}

function actualizarCarrito(){
    let total = 0

    for (const Producto of carritoProductos) {
        carritoProductos.append(Producto)
        total = total + Producto.precio
    }

    const cantidadCarrito = document.createElement(p)
    cantidadCarrito.innerHTML = `Tienes ${carritoProductos.size()} en tu carrito.`
    const costoCarrito = document.createElement(p)
    costoCarrito.innerHTML = `El costo total de tu carrito es ${total}.00$`
}

// crear los productos.
const headphone_1 = new Producto("headphones 1", "headphones", 1200)
const headphone_2 = new Producto("headphones 2", "headphones", 240)
const headphone_3 = new Producto("headphones 3", "headphones", 400)
const headphone_4 = new Producto("headphones 4", "headphones", 900)
const keyboard_1 = new Producto("keyboard 1", "keyboard", 800)
const keyboard_2 = new Producto("keyboard 2", "keyboard", 600)
const keyboard_3 = new Producto("keyboard 3", "keyboard", 750)
const aseprite = new Producto("aseprite", "software", 350)
const pico8 = new Producto("pico-8", "software", 400)

// añadir los productos a la lista de productos.
const productosDisponibles = new List(headphone_1, headphone_2, headphone_3, headphone_4, keyboard_1, keyboard_2, keyboard_3, aseprite, pico8)

// el displayProducto igual nos puede servir para el carrito solo que al carrito habría que añadirle un botón para eliminar.
function displayProducto(Producto) {
    const card = document.createElement("div")
    card.innerHTML = `<div class="card">
    <img class="imagen" src="img/productos/headphones/headphones_1.png">
    <h2 class="titulo">${Producto.titulo}</h2>
    <h4 class="categoria">${Producto.categoria}</h4>
    <h4 class="precio">${Producto.precio}$</h4>
    <h3 class="cantidad">${Producto.cantidad}</h3>
    <button class="añadir" onclick="agregarProducto(${Producto})">Añadir producto</button>
    </div>`
    carritoDisplay.append(card)
}

function displayListaProductos(listaProductos) {
    let currentProducto = listaProductos.head

    while(currentProducto){
        displayProducto(currentProducto)
        currentProducto = currentProducto.next
    }
}

displayListaProductos(productosDisponibles)