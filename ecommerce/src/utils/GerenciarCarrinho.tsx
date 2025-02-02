import { Produto } from "../Produtos";

// Recupera o carrinho do localStorage ou inicializa como um array vazio
let carrinho: { produto: Produto; quantidade: number }[] = JSON.parse(localStorage.getItem("carrinho") || "[]");

const atualizarLocalStorage = () => {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
};

// Funções para manipular o estado do carrinho
export const adicionarAoCarrinho = (produto: Produto) => {
  const itemExistente = carrinho.find((item) => item.produto.id === produto.id);

  if (itemExistente) {
    carrinho = carrinho.map((item) =>
      item.produto.id === produto.id
        ? { ...item, quantidade: item.quantidade + 1 }
        : item
    );
  } else {
    carrinho = [...carrinho, { produto, quantidade: 1 }];
  }

  atualizarLocalStorage();
};

export const alterarQuantidade = (id: string, delta: number) => {
  carrinho = carrinho
    .map((item) =>
      item.produto.id === id
        ? { ...item, quantidade: item.quantidade + delta }
        : item
    )
    .filter((item) => item.quantidade > 0);
  atualizarLocalStorage();
};

export const removerProduto = (id: string) => {
  carrinho = carrinho.filter((item) => item.produto.id !== id);
  atualizarLocalStorage();
};

export const limparCarrinho = () => {
  carrinho = [];
  atualizarLocalStorage();
};

export const calcularTotal = () =>
  carrinho.reduce((total, item) => total + item.produto.price * item.quantidade, 0);

export const obterCarrinho = () => carrinho;
