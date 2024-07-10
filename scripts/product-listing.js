import {
  filtrarCardsPorCategoria,
  obtenerCategorias,
  obtenerCards,
  obtenerCardsPorId,
} from "../modules/services.js";

//Filtrado de categorias

const pintarCategorias = (listaCategorias) => {
  listaCategorias.forEach((categorias) => {
    const item = document.createElement("li");
    const boton = document.createElement("button");
    
    boton.textContent = categorias.nombre;

    boton.addEventListener("click", async () => {
      const cardsFiltrados = await filtrarCardsPorCategoria(categorias.nombre);
      pintarCards(cardsFiltrados)
    });


    item.appendChild(boton);
    contenedorFiltros.appendChild(item);
    
  });
}

function pintarCards(listaCards, contenedor) {
  const contenedorCards = contenedor? contenedor: document.getElementById("coleccion");
  if (listaCards.length > 0) { 
  contenedorCards.innerHTML = "";

  listaCards.forEach((cards) => {
    const tarjeta = document.createElement("article");
    const figure = document.createElement("figure");
    const imagen = document.createElement("img");
    const section = document.createElement("section");
    const h3 = document.createElement("h3");

    imagen.setAttribute("src", cards.imagen);
    imagen.setAttribute("alt", cards.nombre);
    h3.textContent = cards.nombre;
    

    figure.innerHTML = `
    <figure>
        <img src=${cards.imagen} alt=${cards.nombre}>
      </figure>
    `;

    section.innerHTML = `
    <div>
      <h3>${cards.nombre}</h3>
      <p>${cards.precio}</p>
    </div>
    `;

    tarjeta.addEventListener("click", () => {
      //sessionStorage.setItem("idProducto", producto.id);
      window.location.href = "/pages/product-details.html";
    });

    tarjeta.classList.add("card");

    tarjeta.appendChild(figure);
    tarjeta.appendChild(section);
    contenedorCards.appendChild(tarjeta)
  });

} else
  contenedorCards.textContent = "Producto no disponible";

}

const formularioBusqueda = document.getElementById("busqueda");

formularioBusqueda.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const inputBusqueda = document.getElementById("inputBusqueda");
  const terminoBusqueda = inputBusqueda.value;
  if (terminoBusqueda.trim() !== "") {
    const resultadoBusqueda = busquedaCardsPorNombre(cards, terminoBusqueda);
    pintarCards(resultadoBusqueda, contenedorCards);
  }
});


//variables/constantes
const contenedorFiltros = document.getElementById("filtros");
const contenedorCards = document.getElementById("coleccion");

//ejecucion
document.addEventListener("DOMContentLoaded", async () => {
  const categorias = await obtenerCategorias();
  const cards = await obtenerCards();
  pintarCategorias(categorias, contenedorFiltros);
  pintarCards(cards);
});
