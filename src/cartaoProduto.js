import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class='border-solid shadow-xl shadow-slate-400 rounded-lg g w-48 m-2 flex flex-col pb-2 justify-between group ${
      produtoCatalogo.feminino ? "feminino" : "masculino"
    }' id="card-produto-${produtoCatalogo.id}">
      <img src="./img/${
        produtoCatalogo.imagem
      }" alt="Produto 1 do Ecommerce" class="group-hover:scale-110 duration-300 m-3 rounded-lg" />
      <p class='marca'>${produtoCatalogo.marca}</p>
      <p class='text-sm'>${produtoCatalogo.nome}</p>
      <p class='text-sm'>R$ ${produtoCatalogo.preco}</p>
      <button id='adicionar-${
        produtoCatalogo.id
      }' class='bg-slate-950 hover:bg-slate-700 text-slate-200'><i class="fa-solid fa-cart-plus"></i></button>
      </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
  }
}
