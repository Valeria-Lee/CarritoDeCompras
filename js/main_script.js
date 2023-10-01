import ListaSimplementeEnlazada from './lista/LSE.js'
import Nodo from './lista/Nodo.js'

let productosDisponibles = new ListaSimplementeEnlazada()
const productosContenedor = document.getElementById("productosContenedor")
let productosCarrito = new ListaSimplementeEnlazada()
const carritoContenedor = document.getElementById("carritoContenedor")
const infoCarrito = document.getElementById("infoCarrito")
let cantidadCarrito
let costoCarrito

class Producto extends Nodo {
    constructor(dato, titulo, categoria, precio, cantidad=0){
        super(dato)
        this.titulo = titulo
        this.categoria = categoria
        this.precio = precio
        this.cantidad = cantidad
    }
}

const headphone_1 = new Producto("headphones-1", "headphones-1", "audio", 1200)
const headphone_2 = new Producto("headphones-2", "headphones-2", "audio", 240)
const headphone_3 = new Producto("headphones-3", "headphones-3", "audio", 400)
const headphone_4 = new Producto("headphones-4", "headphones-4", "audio", 900)
const keyboard_1 = new Producto("keyboard-1", "keyboard-1", "laptop", 800)
const keyboard_2 = new Producto("keyboard-2", "keyboard-2", "laptop", 600)
const keyboard_3 = new Producto("keyboard-3", "keyboard-3", "laptop", 750)
const aseprite = new Producto("aseprite", "aseprite", "software", 350)
const pico8 = new Producto("pico-8", "pico-8", "software", 400)

productosDisponibles.insertar(headphone_1)
productosDisponibles.insertar(headphone_2)
productosDisponibles.insertar(headphone_3)
productosDisponibles.insertar(headphone_4)
productosDisponibles.insertar(keyboard_1)
productosDisponibles.insertar(keyboard_2)
productosDisponibles.insertar(keyboard_3)
productosDisponibles.insertar(aseprite)
productosDisponibles.insertar(pico8)

function displayProducto(producto) {

    const card = document.createElement("div")
    card.innerHTML = `<div class="card">
    <img class="imagen" src="../img/productos/${producto.categoria}/${producto.titulo}.png">
    <h2 class="titulo">${producto.titulo}</h2>
    <h4 class="categoria">${producto.categoria}</h4>
    <h4 class="precio">${producto.precio}$</h4>
    <h3 class="cantidad">${producto.cantidad}</h3>
    <button class="añadir">Añadir producto</button>
    <button class="eliminar">Eliminar producto</button>
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
        let cantidad
        let currentCantidad
        let card = e.target.closest(".card")

        if (card){
            titulo = card.querySelector(".titulo").innerHTML
            categoria = card.querySelector(".categoria").innerHTML
            precio = card.querySelector(".precio").innerHTML
            console.log(precio)
        }

        cantidad = card.querySelector(".cantidad")
        currentCantidad = parseFloat(cantidad.innerHTML) + 1
        cantidad.innerHTML = currentCantidad
        
        let productoSeleccionado = new Producto(titulo, titulo, categoria, precio)
        añadirProducto(productoSeleccionado)
    })
})

function añadirProducto(producto){
    productosCarrito.insertar(producto)
    actualizarCarrito()
}

function actualizarCarrito(){
    let total = 0
    carritoContenedor.innerHTML = ''

    for (let i=0; i<productosCarrito.getLongitud; i++) {
        if(total >= 0){
            total = total + parseFloat(productosCarrito.obtener(i).precio)
        }
        displayCarrito(productosCarrito.obtener(i))
    }

    if (cantidadCarrito == undefined && costoCarrito == undefined){
        cantidadCarrito = document.createElement('p')
        costoCarrito = document.createElement('p')
    } else {
        costoCarrito.innerHTML = ''
        cantidadCarrito.innerHTML = ''
    }

    cantidadCarrito.innerHTML = `Tienes ${productosCarrito.getLongitud} producto(s) en tu carrito.`
    infoCarrito.appendChild(cantidadCarrito)
    costoCarrito.innerHTML = `El costo total de tu carrito es ${total}.00$`
    infoCarrito.appendChild(costoCarrito)
}

function displayCarrito(producto, indice) {
    const card = document.createElement("div");
    card.innerHTML = `<div class="card">
      <img class="imagen" src="../img/productos/${producto.categoria}/${producto.titulo}.png">
      <h2 class="titulo">${producto.titulo}</h2>
      <h4 class="categoria">${producto.categoria}</h4>
      <h4 class="precio">${producto.precio}$</h4>
    </div>`;
    carritoContenedor.appendChild(card);
}

const eliminarBtns = document.querySelectorAll(".eliminar");
    eliminarBtns.forEach(element => {
    element.addEventListener("click", (e) => {
        console.log("eliminar!")
        let titulo
        let categoria
        let precio
        let cantidad
        let currentCantidad

        let cardEliminar = e.target.closest(".card")
        console.log(cardEliminar)

        if (cardEliminar){
            titulo = cardEliminar.querySelector(".titulo").innerHTML
            categoria = cardEliminar.querySelector(".categoria").innerHTML
            precio = cardEliminar.querySelector(".precio").innerHTML
        }

        cantidad = cardEliminar.querySelector(".cantidad")
        if(cantidad > 0){
            currentCantidad = parseFloat(cantidad.innerHTML) - 1
        } else {
            currentCantidad = 0
        }
        cantidad.innerHTML = currentCantidad

        let productoEliminado = new Producto(titulo, titulo, categoria, precio)
        console.log(productoEliminado)
        
        for(let j=0;j<productosCarrito.getLongitud;j++){
            if(productosCarrito.obtener(j).getDato == productoEliminado.titulo){
                productosCarrito.eliminar(j)
                break
            }
        }

        actualizarCarrito()
    })
})

const vaciarBtn = document.getElementById("vaciarBtn");
vaciarBtn.addEventListener("click", () => {
    const cantidadElements = document.querySelectorAll(".cantidad")
    cantidadElements.forEach(element => {
        element.innerHTML = 0
    })
    productosCarrito.vaciarCarrito()
    carritoContenedor.innerHTML = ''
    actualizarCarrito()
})