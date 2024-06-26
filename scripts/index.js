//Declarar lista de productos

const listaProductos = [
    {
        id: 1,
        nombre: 'collar de perlas',
        codigo: '',
        precioUnitario: 70000,
        tipoAccesorio: 'collar',
        imagenes: '',
        descripcion: '',
        cantidad: 0, 
        stock: {
            colores: {
                dorado: 10,
                plateado: 5
            },
            tallas: {
                pequeña: 3,
                mediana: 4,
                grande: 8
            }
        }
    },

    {
        id: 2,
        nombre: 'anillo de jade',
        codigo: '',
        precioUnitario: 85000,
        tipoAccesorio: 'anillo',
        imagenes: ["anillo_plata_frontal.jpg", "anillo_plata_lateral.jpg"],
        descripcion: '',
        cantidad: 3,
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },

    {
        id: 3,
        nombre: 'anillo de plata',
        codigo: '',
        precioUnitario: 92000,
        tipoAccesorio: 'anillo',
        imagenes: ["anillo_plata_frontal.jpg", "anillo_plata_lateral.jpg"],
        descripcion: '',
        cantidad: 5,
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    }
];

// Función para filtrar productos por tipo de accesorio
function filtrarPorTipo(productos, tipoAccesorio) {
    return productos.filter(producto => producto.tipoAccesorio === tipoAccesorio);
}

// Llamada a la función para filtrar por un tipo de accesorio 
let tipoAccesorioAFiltrar = "anillo";
let productosFiltrados = filtrarPorTipo(listaProductos, tipoAccesorioAFiltrar);

// Mostrar el resultado
console.log("Productos filtrados por tipo de accesorio:", productosFiltrados);

//Buscar por nombre 

function buscarPorNombre(listaProductos, terminoBusqueda) {
    
    terminoBusqueda = terminoBusqueda.toLowerCase();

    return listaProductos.filter(listaProductos =>
        listaProductos.nombre.toLowerCase().includes(terminoBusqueda)
    );
    
}

let terminoBusqueda = "collar de perlas";
let productosEncontrados = buscarPorNombre(listaProductos, terminoBusqueda);

console.log(`Productos encontrados con el término "${terminoBusqueda}":`, productosEncontrados);


// Ordenar los precios 

function ordenarPorPrecio(producto, orden) {
    let productosCopia = [...producto];

    return productosCopia.sort((a, b) => {
        if (orden === 'ascendente') {
            return a.precioUnitario - b.precioUnitario;
        } else if (orden === 'descendente') {
            return b.precioUnitario - a.precioUnitario;
        } else {
            throw new Error("El parámetro 'orden' debe ser 'ascendente' o 'descendente'");
        }
      });
}



let productosOrdenadosAscendente = ordenarPorPrecio(listaProductos, 'ascendente');
console.log("Productos ordenados por precio de manera ascendente:", productosOrdenadosAscendente);

// Llamada a la función para ordenar por precio de manera descendente
let productosOrdenadosDescendente = ordenarPorPrecio(listaProductos, 'descendente');
console.log("Productos ordenados por precio de manera descendente:", productosOrdenadosDescendente);

//Funcion del total a pagar
const totalApagar = listaProductos.reduce(
    (producto, propiedad) =>
      producto + propiedad.cantidad * propiedad.precioUnitario,
    0
  );

  console.log(
    "El total a pagar es: $" +
      totalApagar);