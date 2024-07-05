// Estructura y funcion de las cards

function pintarCards(listaCards, contenedorCards) {
    if (listaCards.length > 0) { 
    contenedorCards.innerHTML = "";
  
    listaCards.forEach((cards) => {
      const tarjeta = document.createElement("article");
      const figure = document.createElement("figure");
      const section = document.createElement("section");
      
  
      figure.innerHTML = `
      <figure>
          <img src=${cards.imagen} alt=${cards.nombreJoya}>
        </figure>
      `;
  
      section.innerHTML = `
      <div>
        <h3>${cards.nombreJoya}</h3>
        <p>${cards.precio}</p>
      </div>
      `;
  
      tarjeta.addEventListener("click", () => {
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


// funciónes relacionadas con los botones de

  function agregarBotonesDeFiltrado(
    listaCategorias,
    contenedorFiltros,
    listaCards,
    contenedorCards
  ) {
    listaCategorias.forEach((element) => {
      const item = document.createElement("li");
      const boton = document.createElement("button");
      boton.id = element;
      boton.textContent = element;
  
      boton.addEventListener("click", () => {
        ejecutarFiltros(
          element,
          contenedorFiltros.children,
          listaCards,
          contenedorCards
        );
      });
      item.appendChild(boton);
      contenedorFiltros.appendChild(item);
      console.log(contenedorFiltros.children);
    });
  }

  function ejecutarFiltros(
    categoriaAFiltrar,
    menuFiltro,
    listaCards,
    contenedorCards
  ) {
    console.log(`Hice click en el filtro ${categoriaAFiltrar}`);
    activarBoton(menuFiltro, categoriaAFiltrar);
    const cardsFiltrados = filtrarCardsPorCategoria(
      listaCards,
      categoriaAFiltrar
    );
    pintarCards(cardsFiltrados, contenedorCards);
  }
  
  
  function activarBoton(listaBotones, botonAActivar) {
    for (const item of listaBotones) {
      const boton = item.querySelector("button");
      boton.classList.remove("active");
      if (boton.id === botonAActivar) {
        boton.classList.add("active");
      }
    }
  }

  function filtrarCardsPorCategoria(listaCards, nombreCategoria) {
    return nombreCategoria === "todos"
      ? listaCards
      : listaCards.filter((cards) => cards.categoria === nombreCategoria);
  }

  export { pintarCards, agregarBotonesDeFiltrado, ejecutarFiltros }; 
  