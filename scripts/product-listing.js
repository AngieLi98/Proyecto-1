import { cards } from "../modules/data.js";
import { pintarCards, 
  agregarBotonesDeFiltrado,
  ejecutarFiltros

} from "../modules/ui.js";
console.log(cards);

const contenedorFiltros = document.getElementById("filtros");
const listaCategorias = cards.map((cards) => cards.categoria);
const categorias = Array.from(new Set(listaCategorias));
const contenedorCards = document.getElementById("coleccion");

agregarBotonesDeFiltrado(categorias, contenedorFiltros, cards, contenedorCards);

pintarCards(cards, contenedorCards);

const botonTodos = document.getElementById("todos");
botonTodos.addEventListener("click", (evento) => {
  ejecutarFiltros(
    evento.target.id,
    contenedorFiltros.children,
    cards,
    contenedorCards
  );
});

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

function busquedaCardsPorNombre(listaCards, nombreABuscar) {
  return listaCards.filter((cards) =>
    cards.nombreJoya.toLowerCase().includes(nombreABuscar.toLowerCase())
  );
}
