// VARIABLES
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const carritoVacio = document.querySelector("#cart-empty");
const productosCesta = document.querySelector("#incart-items");
const accionesCesta = document.querySelector("#cart-action");
const carritoComprado = document.querySelector("#cart-paid");

const totalCesta = document.querySelector("#total");
let botonesEliminar = document.querySelectorAll(".remove-btn");
const botonVaciar = document.querySelector("#empty-btn");
const botonComprar = document.querySelector("#buy-btn");


// CARGAR PRODUCTOS CESTA: FUNCTION

function cargarProductosCarrito() {

    while (productosCesta.firstChild) 
    {
        productosCesta.removeChild(productosCesta.firstChild);
    }

    if (productosEnCarrito && productosEnCarrito.length > 0) 
    {
        carritoVacio.classList.add("disabled");
        productosCesta.classList.remove("disabled");
        accionesCesta.classList.remove("disabled");
        carritoComprado.classList.add("disabled");
    
        productosCesta.innerHTML = "";
    
        productosEnCarrito.forEach(producto => {
            
            const div = document.createElement("div");
            div.classList.add("incart-prod");
            div.innerHTML = `
                <div class="incart-wrapper">
                    <img class="incart-img" src="${producto.img}" alt="${producto.titulo}">
                    <div class="general-container">
                        <div class="incart-titulo">
                            <small>Título</small>
                            <h3>${producto.titulo}</h3>
                        </div>
                    </div>
                    <div class="general-container">
                        <div class="incart-cantidad">
                            <small>Cantidad</small>
                            <p>${producto.cantidad}</p>
                        </div>
                    </div>
                    <div class="general-container">
                        <div class="incart-precio">
                            <small>Precio</small>
                            <p>€ ${producto.precio}</p>
                        </div>
                    </div>
                    <div class="general-container">
                        <div class="incart-subtotal">
                            <small>Subtotal</small>
                            <p>€ ${producto.precio * producto.cantidad}</p>
                        </div>
                    </div>
                    <button class="remove-btn" id="${producto.id}">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `;
            productosCesta.append(div);
        });

        actualizarBotonesEliminar();
        actualizarTotal();
    }
    else
    {
        carritoVacio.classList.remove("disabled");
        productosCesta.classList.add("disabled");
        accionesCesta.classList.add("disabled");
        carritoComprado.classList.add("disabled");
    }
}
cargarProductosCarrito();

//--------------------------------------------
// ACTUALIZAR EL TOTAL: FUNCTION
function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `€ ${totalCalculado}`;
}

//--------------------------------------------
// ACTUALIZAR LOS BOTONES ELIMINAR: FUNCTION
function actualizarBotonesEliminar(){

    botonesEliminar = document.querySelectorAll(".remove-btn");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    })
}

//--------------------------------------------
// ELIMINAR DEL CARRITO: FUNCTION
function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    productosEnCarrito.splice(index, 1);
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

//--------------------------------------------
// VACIAR EL CARRITO: FUNCTION
botonVaciar.addEventListener("click", vaciarCesta);
function vaciarCesta() {

    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

//--------------------------------------------
// COMPRAR EL CARRITO: FUNCTION
botonComprar.addEventListener("click", comprarCesta);
function comprarCesta() {

    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();

    carritoVacio.classList.add("disabled");
    productosCesta.classList.add("disabled");
    accionesCesta.classList.add("disabled");
    carritoComprado.classList.remove("disabled");
}
