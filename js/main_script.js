import ListaSimplementeEnlazada from './lista/LSE.js'
import Nodo from './lista/Nodo.js'

let productosDisponibles = new ListaSimplementeEnlazada()
const productosContenedor = document.getElementById("productosContenedor")
let productosCarrito = new ListaSimplementeEnlazada()
const carritoContenedor = document.getElementById("carritoContenedor")

class Producto extends Nodo {
    constructor(dato, titulo, categoria, precio, cantidad=0){
        super(dato)
        this.titulo = titulo
        this.categoria = categoria
        this.precio = precio
        this.cantidad = cantidad
    }
}

// declarar los productos.
const headphone_1 = new Producto("headphones #1", "headphones #1", "audio", 1200)
const headphone_2 = new Producto("headphones #2", "headphones #2", "audio", 240)
const headphone_3 = new Producto("headphones #3", "headphones #3", "audio", 400)
const headphone_4 = new Producto("headphones #4", "headphones #4", "audio", 900)
const keyboard_1 = new Producto("keyboard #1", "keyboard #1", "laptop", 800)
const keyboard_2 = new Producto("keyboard #2", "keyboard #2", "laptop", 600)
const keyboard_3 = new Producto("keyboard #3", "keyboard #3", "laptop", 750)
const aseprite = new Producto("aseprite", "aseprite", "software", 350)
const pico8 = new Producto("pico-8", "pico-8", "software", 400)

// insertar productos.
productosDisponibles.insertar(headphone_1)
productosDisponibles.insertar(headphone_2)
productosDisponibles.insertar(headphone_3)
productosDisponibles.insertar(headphone_4)
productosDisponibles.insertar(keyboard_1)
productosDisponibles.insertar(keyboard_2)
productosDisponibles.insertar(keyboard_3)
productosDisponibles.insertar(aseprite)
productosDisponibles.insertar(pico8)

console.log(productosDisponibles)

function displayProducto(Producto) {
    const card = document.createElement("div")
    card.innerHTML = `<div class="card">
    <img class="imagen" src="../img/productos/headphones/headphones_1.png">
    <h2 class="titulo">${Producto.titulo}</h2>
    <h4 class="categoria">${Producto.categoria}</h4>
    <h4 class="precio">${Producto.precio}$</h4>
    <h3 class="cantidad">${Producto.cantidad}</h3>
    <button class="añadir">Añadir producto</button>
    </div>`
    productosContenedor.appendChild(card)
}

function displayListaProductos(listaProductos) {
    for(let i=0; i<listaProductos.getLongitud; i++){
        displayProducto(listaProductos.obtener(i))
    }
}

displayListaProductos(productosDisponibles)

const añadirBtns = document.querySelectorAll(".añadir")
añadirBtns.forEach(element => {
    element.addEventListener("click", (e) => {
        let titulo
        let categoria
        let precio
        const card = e.target.closest(".card")

        if (card){
            titulo = card.querySelector(".titulo").innerHTML
            categoria = card.querySelector(".categoria").innerHTML
            precio = card.querySelector(".precio").innerHTML
            console.log(precio)
        }

        const productoSeleccionado = new Producto(titulo, titulo, categoria, precio)
        añadirProducto(productoSeleccionado)
    })
})

function añadirProducto(Producto){
    productosCarrito.insertar(Producto)
    onsole.log("este es carritoProductos: " + productosCarrito)
    actualizarCarrito()
}

function actualizarCarrito(){
    let total = 0

    for (let i=0; i<productosCarrito.getLongitud; i++) {
        total = total + productosCarrito.obtener(i).precio
    }

    const cantidadCarrito = document.createElement(p)
    cantidadCarrito.innerHTML = `Tienes ${carritoProductos.size()} en tu carrito.`
    infoCarrito.appendChild(cantidadCarrito)
    const costoCarrito = document.createElement(p)
    costoCarrito.innerHTML = `El costo total de tu carrito es ${total}.00$`
    infoCarrito.appendChild(costoCarrito)
}
