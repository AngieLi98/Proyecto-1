import getData from "../helpers/getData.js";

const URL_API = "http://localhost:3000/"

const endpoints = {
    cards:`${URL_API}cards`,
    categorias:`${URL_API}categorias`,
    registroCompras: `${URL_API}registroCompras`,
}

export async function obtenerCategorias() {
    try {
      const dataCategoria = await getData(endpoints.categorias);
      return dataCategoria;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  export async function obtenerCards() {
    try {
      const cards = await getData(endpoints.cards);
      return cards;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  export async function filtrarCardsPorCategoria(nombreCategoria) {
    try {
        const cards = await obtenerCards();
        const cardsFiltrados = cards.filter((item) =>
          item.categorias.includes(nombreCategoria)
        );
      return cardsFiltrados;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  export async function obtenerCardsPorId(idCards) {
    try {
      const url = `${endpoints.cards}/${idCards}`;
      const cards = await getData(url);
      return cards;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

