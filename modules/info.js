import {
  obtenerCards
} from "../modules/services.js";

function pintarCards(listaCards, contenedor) {
  const contenedorCards = contenedor ? contenedor : document.getElementById("order-list__card");
  contenedorCards.innerHTML = "";

  listaCards.forEach((cards) => {
    const tarjeta = document.createElement("div");
    const imagen = document.createElement("img");
    const section = document.createElement("div");
    const h3 = document.createElement("h3");
    const section2 = document.createElement("div");

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
        <p>$${cards.codigo}</p>
<p><span class="badge">x1</span></p>
      </div>
      `;

    section2.innerHTML = `
      <div>
        <p>$${cards.precio}</p>
      </div>
      `;

    tarjeta.classList.add("item");

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(section);
    tarjeta.appendChild(h3);
    tarjeta.appendChild(section2);
    contenedorCards.appendChild(tarjeta)
  });

}