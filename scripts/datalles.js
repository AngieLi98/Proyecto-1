import { obtenerCardsPorId } from "../modules/services";
import { pintarDetalles } from "../modules/ui";

const productoSeleccionado = {};
const idCard= sessionStorage.getItem("idCards");
const carritoCompras = JSON.parse(sessionStorage.getItem("carrito")) || [];
const botonAgregarCarrito = document.getElementById("agregar-carrito");
const comprar = document.getElementById("comprar");




comprar.addEventListener("click", () => {
  sessionStorage.setItem("idCards", cards.id);
  window.location.href = "/pages/checkout–add-payment-method.html";
});


document.addEventListener("DOMContentLoaded", function() {
  const botonDecremento = document.getElementById("decremento");
  const botonIncremento = document.getElementById("incremento");
  const cantidadInput = document.getElementById("cantidad");

  botonDecremento.addEventListener("click", function() {
    let valorActual = parseInt(cantidadInput.value);
    if (valorActual > parseInt(cantidadInput.min)) {
      cantidadInput.value = currentValue - 1;
    }
  });

  botonIncremento.addEventListener("click", function() {
    let valorActual = parseInt(cantidadInput.value);
    cantidadInput.value = currentValue + 1;
  });
});





// document.addEventListener("DOMContentLoaded", async () => {
//   const detalleProducto = await obtenerCardsPorId(idCard);
//   productoSeleccionado.idProducto = detalleProducto.id;
//   productoSeleccionado.precioUnitario = detalleProducto.precioUnitario;
//   console.log(detalleProducto);
//   pintarDetalles(detalleProducto);
  
// });

