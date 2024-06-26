//Declarar lista de productos

const listaProductos = [
    {
        id: 1,
        nombre: 'collar de gemas de lujo',
        codigo: '',
        precioUnitario: 168076,
        tipoAccesorio: 'collares',
        imagenes: '',
        descripcion: '',
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },

    {
        id: 2,
        nombre: 'anillo aurora',
        codigo: '',
        precioUnitario: 125028,
        tipoAccesorio: 'anillos',
        imagenes: '',
        descripcion: '',
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },

    {
        id: 3,
        nombre: 'collar reflejos',
        codigo: '',
        precioUnitario: 620073,
        tipoAccesorio: 'collares',
        imagenes: '',
        descripcion: '',
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },

    {
        id: 4,
        nombre: 'Anillo infinito de ensueño',
        codigo: '',
        precioUnitario: 327071,
        tipoAccesorio: 'anillos',
        imagenes: '',
        descripcion: '',
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },

    {
        id: 5,
        nombre: 'Anillo de joyas opulentas',
        codigo: '',
        precioUnitario: 168076,
        tipoAccesorio: 'anillos',
        imagenes: '',
        descripcion: '',
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },

    {
        id: 6,
        nombre: 'Aretes Solitario Sereno',
        codigo: '',
        precioUnitario: 125028,
        tipoAccesorio: 'aretes',
        imagenes: '',
        descripcion: '',
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },

    {
        id: 7,
        nombre: 'aretes de halo atemporales',
        codigo: '',
        precioUnitario: 620073,
        tipoAccesorio: 'aretes',
        imagenes: '',
        descripcion: '',
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },

    {
        id: 8,
        nombre: 'aretes exquisitos',
        codigo: '',
        precioUnitario: 327071,
        tipoAccesorio: 'aretes',
        imagenes: '',
        descripcion: '',
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },

    {
        id: 9,
        nombre: 'anillo de elegancia atemporal',
        codigo: '',
        precioUnitario: 168076,
        tipoAccesorio: 'anillos',
        imagenes: '',
        descripcion: '',
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },

     {
        id: 6,
        nombre: 'Aretes Solitario Sereno',
        codigo: '',
        precioUnitario: 125028,
        tipoAccesorio: 'aretes',
        imagenes: '',
        descripcion: '',
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },

    {
        id: 7,
        nombre: 'aretes de halo atemporales',
        codigo: '',
        precioUnitario: 620073,
        tipoAccesorio: 'aretes',
        imagenes: '',
        descripcion: '',
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },

    {
        id: 8,
        nombre: 'aretes exquisitos',
        codigo: '',
        precioUnitario: 327071,
        tipoAccesorio: 'aretes',
        imagenes: '',
        descripcion: '',
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },

    {
        id: 9,
        nombre: 'anillo de elegancia atemporal',
        codigo: '',
        precioUnitario: 168076,
        tipoAccesorio: 'anillos',
        imagenes: '',
        descripcion: '',
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },

    {
        id: 10,
        nombre: 'Anillo de encantos de lujo',
        codigo: '',
        precioUnitario: 620073,
        tipoAccesorio: 'anillos',
        imagenes: '',
        descripcion: '',
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },

    {
        id: 11,
        nombre: 'anillo de floración dichosa',
        codigo: '',
        precioUnitario: 620073,
        tipoAccesorio: 'anillos',
        imagenes: '',
        descripcion: '',
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },

    {
        id: 12,
        nombre: 'anillo chispeante',
        codigo: '',
        precioUnitario: 620073,
        tipoAccesorio: 'anillos',
        imagenes: '',
        descripcion: '',
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },

    {
        id: 13,
        nombre: 'anillo reluciente',
        codigo: '',
        precioUnitario: 620073,
        tipoAccesorio: 'anillos',
        imagenes: '',
        descripcion: '',
        stockPorVariante: [
            { color: "plata", talla: "S", cantidad: 10 },
            { color: "plata", talla: "M", cantidad: 15 }
        ]
    },
];

// Función para filtrar productos por tipo de accesorio
function filtrarPorTipo(productos, tipoAccesorio) {
    return productos.filter(producto => producto.tipoAccesorio === tipoAccesorio);
}

// Llamada a la función para filtrar por un tipo de accesorio 
let tipoAccesorioAFiltrar = "anillos";
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