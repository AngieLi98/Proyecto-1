const productoSeleccionado = {};
const idProducto = sessionStorage.getItem("idProducto");
const carritoCompras = JSON.parse(sessionStorage.getItem("carrito")) || [];
const botonAgregarCarrito = document.getElementById("agregarCarrito");


document.addEventListener("DOMContentLoaded", async () => {
  const detalleProducto = await obtenerProductoPorId(idProducto);
  productoSeleccionado.idProducto = detalleProducto.id;
  productoSeleccionado.precioUnitario = detalleProducto.precioUnitario;
  pintarDetalles(detalleProducto);
  contadorTotal(detalleProducto.precioUnitario);
  console.log(detalleProducto);
});