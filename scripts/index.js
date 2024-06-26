//Declarar lista de productos

const listaProductos = [
    {
        id: 1,
        nombre: 'collar de perlas',
        codigo: '',
        precioUnitario: 0,
        tipoAccesorio: 'collar',
        imagenes: '',
        descripcion: '',
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
        precioUnitario: 0,
        tipoAccesorio: 'anillo',
        imagenes: ["anillo_plata_frontal.jpg", "anillo_plata_lateral.jpg"],
        descripcion: '',
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },

    {
        id: 3,
        nombre: 'anillo de plata',
        codigo: '',
        precioUnitario: 0,
        tipoAccesorio: 'anillo',
        imagenes: ["anillo_plata_frontal.jpg", "anillo_plata_lateral.jpg"],
        descripcion: '',
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

// Llamada a la función para filtrar por un tipo de accesorio específico
let tipoAccesorioAFiltrar = "anillo";
let productosFiltrados = filtrarPorTipo(listaProductos, tipoAccesorioAFiltrar);

// Mostrar el resultado en la consola del navegador
console.log("Productos filtrados por tipo de accesorio:", productosFiltrados);

//Buscar por nombre 

function buscarPorNombre(listaProductos, terminoBusqueda) {
    // Convertimos el término de búsqueda a minúsculas para hacer la búsqueda case insensitive
    terminoBusqueda = terminoBusqueda.toLowerCase();

    return listaProductos.filter(listaProductos =>
        listaProductos.nombre.toLowerCase().includes(terminoBusqueda)
    );
    
}

let terminoBusqueda = "collar de perlas";
let productosEncontrados = buscarPorNombre(listaProductos, terminoBusqueda);

console.log(`Productos encontrados con el término "${terminoBusqueda}":`, productosEncontrados);