export function pintarDetalles(producto) {
    const categoria = document.getElementById("categoria");
    const imagenesProducto = document.querySelector(".encanto-atemporal");
    const contenedorPrecio = document.getElementById("precio");
    const contenedorNombre = document.getElementById("nombre");
    const descripcion = document.getElementById("descripcion");
    const puntuacion = document.getElementById("puntuacion");
    const colores = document.getElementById("seleccionColor");
    const tallas = document.getElementById("seleccionTalla");
  
    categoria.textContent = producto.categorias[0];
    contenedorPrecio.textContent = `$${producto.precioUnitario}`;
    contenedorNombre.textContent = producto.nombre;
    descripcion.textContent = producto.descripcion;
    puntuacion.textContent = producto.puntuacion;
    pintarImagenes(producto.imagenes, imagenesProducto);
    pintarColorYTallasDisponibles(producto.cantidadEnStock, tallas, colores);
  }