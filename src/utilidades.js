export const catalogo = [
  {
    id: "1",
    nome: "Camisa Larga com Bolsos",
    marca: "Zara",
    preco: 70.0,
    imagem: "product-1.jpg",
    feminino: false,
  },
  {
    id: "2",
    nome: "Casaco Reto com Lã",
    marca: "Zara",
    preco: 85,
    imagem: "product-2.jpg",
    feminino: true,
  },
  {
    id: "3",
    nome: "Jaqueta com Efeito Camurça",
    marca: "Zara",
    preco: 60,
    imagem: "product-3.jpg",
    feminino: false,
  },
  {
    id: "4",
    nome: "Sobretudo em Mescla de Lã",
    marca: "Zara",
    preco: 160,
    imagem: "product-4.jpg",
    feminino: false,
  },
  {
    id: "5",
    nome: "Camisa Larga Acolchoada de Veludo Coletê",
    marca: "Zara",
    preco: 110,
    imagem: "product-5.jpg",
    feminino: false,
  },
  {
    id: "6",
    nome: "Casaco de Lã com Botões",
    marca: "Zara",
    preco: 170,
    imagem: "product-6.jpg",
    feminino: true,
  },
  {
    id: "7",
    nome: "Casaco com Botões",
    marca: "Zara",
    preco: 75,
    imagem: "product-7.jpg",
    feminino: true,
  },
  {
    id: "8",
    nome: "Colete Comprido com Cinto",
    marca: "Zara",
    preco: 88.0,
    imagem: "product-8.jpg",
    feminino: true,
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}
export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
  localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(
  idProduto,
  idContainerHtml,
  quantidadeProduto
) {
  const produto = catalogo.find((p) => p.id === idProduto); //encontra na lista de Produtos o mesmo ID solicitado na entrada desta função
  const containerProdutosCarrinho = document.getElementById(idContainerHtml);

  const elementoArticle = document.createElement("article");
  const articleClasses = [
    "flex",
    "bg-stone-200",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-96",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  const cartaoProdutoCarrinho = `
        <img src="./img/${produto.imagem}" alt="Carrinho: ${
    produto.nome
  }" class="h-24 rounded-lg" />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">${produto.nome}</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">R$ ${produto.preco}</p>
    </div>
    <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
      <p id="quantidade-${produto.id}" class="ml-2">${
    quantidadeProduto[produto.id]
  } </p>
    </div>
  `;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}
