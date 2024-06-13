// CATEGORIA Y FILTROS: FUNCTIONS
document.addEventListener("DOMContentLoaded", function () {
    const categoriaActual = obtenerCategoriaDesdeURL();
    const productosFiltrados = (categoriaActual && categoriaActual != 'todos') ? filtrarProductosPorCategoria(categoriaActual) : productos;
    cargarProductos(productosFiltrados);
});

function obtenerCategoriaDesdeURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("categoria") || "todos";
}

function filtrarProductosPorCategoria(categoria) {
    return productos.filter(producto => producto.categoria === categoria);
}

//----------------------------------------------------------------------------------
// VARIABLES
const contenedorProductos = document.getElementById("prod-container");
let botonesAgregar = document.querySelectorAll(".add-btn");
const cantidadCesta = document.querySelector("#cart-counter");


// CARGAR PRODUCTOS: FUNCTION
function cargarProductos(productos) {

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("prod")
        div.innerHTML = `
            <div class="prod-wrapper">
                <img class="prod-img" src="${producto.img}" alt="${producto.titulo}">
                    <div class="info-container">
                        <div class="info-title">
                            <h3 class="prod-title">${producto.titulo}</h3>
                        </div>
                        <div class="prod-btn">
                            <p class="prod-price">${producto.precio} €</p>
                            <button class="add-btn" id="${producto.id}">Añadir</button>
                        </div>
                    </div>
            </div>        
        `;
        contenedorProductos.appendChild(div);
    });
    actualizarBotonesAgregar();
}

//--------------------------------------------
// ACTUALIZAR LOS BOTONES AGREGAR: FUNCTION
function actualizarBotonesAgregar(){

    botonesAgregar = document.querySelectorAll(".add-btn");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })

}

//--------------------------------------------
// AGREGAR PRODUCTOS A CARRITO: FUNCTION
let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS)
{
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarCantidadCesta()
}
else 
{
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) 
    {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }
    else 
    {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarCantidadCesta();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

//--------------------------------------------
// ACTUALIZAR NUMERO CESTA: FUNCTION
function actualizarCantidadCesta() {
    let nuevaCantidadCesta = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    cantidadCesta.innerText = nuevaCantidadCesta;
}
