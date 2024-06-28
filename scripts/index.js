//Declarar lista de productos

const listaProductos = [
    {
        id: 1,
        nombre: 'collar de gemas de lujo',
        codigo: '0001',
        precioUnitario: 168076,
        tipoAccesorio: 'collares',
        imagenes: 'pl-imag-1.jpeg',
        descripcion: 'collar de gemas de lujo',
        stockPorVariante: [
            { color: "dorado", talla: "45", cantidad: 10 },
            { color: "plata", talla: "50", cantidad: 15 }
        ]
    },

    {
        id: 2,
        nombre: 'anillo aurora',
        codigo: '0002',
        precioUnitario: 125028,
        tipoAccesorio: 'anillos',
        imagenes: 'pl-imag-2.jpeg',
        descripcion: 'anillo aurora',
        stockPorVariante: [
            { color: "dorado", talla: "6", cantidad: 8 },
            { color: "plata", talla: "8", cantidad: 20 }
        ]
    },

    {
        id: 3,
        nombre: 'collar reflejos',
        codigo: '0003',
        precioUnitario: 620073,
        tipoAccesorio: 'collares',
        imagenes: 'pl-imag-3.jpeg',
        descripcion: 'collar reflejos',
        stockPorVariante: [
            { color: "dorado", talla: "35", cantidad: 18 },
            { color: "plata", talla: "35", cantidad: 11 }
        ]
    },

    {
        id: 4,
        nombre: 'Anillo infinito de ensueño',
        codigo: '0004',
        precioUnitario: 327071,
        tipoAccesorio: 'anillos',
        imagenes: 'pl-imag-4.jpeg',
        descripcion: 'Anillo infinito de ensueño',
        stockPorVariante: [
            { color: "dorado", talla: "6", cantidad: 1 },
            { color: "plata", talla: "7", cantidad: 9 }
        ]
    },

    {
        id: 5,
        nombre: 'Anillo de joyas opulentas',
        codigo: '0005',
        precioUnitario: 168076,
        tipoAccesorio: 'anillos',
        imagenes: 'pl-imag-5.jpeg',
        descripcion: 'Anillo de joyas opulentas',
        stockPorVariante: [
            { color: "dorado", talla: "6.5", cantidad: 14 },
            { color: "plata", talla: "5", cantidad: 13 }
        ]
    },

    {
        id: 6,
        nombre: 'Aretes Solitario Sereno',
        codigo: '0006',
        precioUnitario: 125028,
        tipoAccesorio: 'aretes',
        imagenes: 'pl-imag-6.jpeg',
        descripcion: 'Aretes Solitario Sereno',
        stockPorVariante: [
            { color: "dorado", cantidad: 13 },
            { color: "plata", cantidad: 19 }
        ]
    },

    {
        id: 7,
        nombre: 'aretes de halo atemporales',
        codigo: '0007',
        precioUnitario: 620073,
        tipoAccesorio: 'aretes',
        imagenes: 'pl-imag-7.jpeg',
        descripcion: 'aretes de halo atemporales',
        stockPorVariante: [
            { color: "dorado", cantidad: 20 },
            { color: "plata", cantidad: 16 }
        ]
    },

    {
        id: 8,
        nombre: 'aretes exquisitos',
        codigo: '0008',
        precioUnitario: 327071,
        tipoAccesorio: 'aretes',
        imagenes: 'pl-imag-8.jpeg',
        descripcion: 'aretes exquisitos',
        stockPorVariante: [
            { color: "jade", cantidad: 18 },
            { color: "plata", cantidad: 15 }
        ]
    },

    {
        id: 9,
        nombre: 'anillo de elegancia atemporal',
        codigo: '0009',
        precioUnitario: 168076,
        tipoAccesorio: 'anillos',
        imagenes: 'pl-imag-9.jpeg',
        descripcion: 'anillo de elegancia atemporal',
        stockPorVariante: [
            { color: "dorado", talla: "6", cantidad: 17 },
            { color: "plata", talla: "7", cantidad: 14 }
        ]
    },

    {
        id: 10,
        nombre: 'anillo de encantos de lujo',
        codigo: '0010',
        precioUnitario: 620073,
        tipoAccesorio: 'anillos',
        imagenes: 'pl-imag-10.jpeg',
        descripcion: 'anillo de encantos de lujo',
        stockPorVariante: [
            { color: "dorado", talla: "6.5", cantidad: 8 },
            { color: "plata", talla: "7", cantidad: 10 }
        ]
    },

    {
        id: 11,
        nombre: 'anillo de floración dichosa',
        codigo: '0011',
        precioUnitario: 620073,
        tipoAccesorio: 'anillos',
        imagenes: 'pl-imag-11.jpeg',
        descripcion: 'anillo de floración dichosa',
        stockPorVariante: [
            { color: "dorado", talla: "7", cantidad: 14 },
            { color: "plata", talla: "8", cantidad: 15 }
        ]
    },

    {
        id: 12,
        nombre: 'anillo chispeante',
        codigo: '0012',
        precioUnitario: 620073,
        tipoAccesorio: 'anillos',
        imagenes: 'pl-imag-12.jpeg',
        descripcion: 'anillo chispeante',
        stockPorVariante: [
            { color: "dorado", talla: "7", cantidad: 12 },
            { color: "plata", talla: "7.5", cantidad: 8 }
        ]
    },

    {
        id: 13,
        nombre: 'anillo reluciente',
        codigo: '0013',
        precioUnitario: 620073,
        tipoAccesorio: 'anillos',
        imagenes: 'pl-imag-13.jpeg',
        descripcion: 'anillo reluciente',
        stockPorVariante: [
            { color: "dorado", talla: "6", cantidad: 2 },
            { color: "plata", talla: "7", cantidad: 10 }
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

let terminoBusqueda = "anillo chispeante";
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

// productos a pagar

let productosCompra = [
    {
        id: 1,
        nombre: 'collar de gemas de lujo',
        codigo: '0001',
        precioUnitario: 168076,
        cantidad: 2
    },
    {
        id: 12,
        nombre: 'anillo chispeante',
        codigo: '0012',
        precioUnitario: 620073,
        cantidad: 1
    },
    {
        id: 8,
        nombre: 'aretes exquisitos',
        codigo: '0008',
        precioUnitario: 327071,
        cantidad: 3
    }
];

function calcularTotalAPagar(listaProductos) {
    return listaProductos.reduce((total, producto) => {
        return total + (producto.cantidad * producto.precioUnitario);
    }, 0);
}


let totalAPagar = calcularTotalAPagar(productosCompra);


console.log("Total a pagar:", totalAPagar);

