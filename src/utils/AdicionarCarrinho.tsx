import { Produto } from "../components/Produtos";

export const adicionarAoCarrinho = (
  produto: Produto,
  setCarrinho: React.Dispatch<React.SetStateAction<{ produto: Produto; quantidade: number }[]>>
) => {
  setCarrinho((prev) => {
    const itemExistente = prev.find((item) => item.produto.id === produto.id);
    if (itemExistente) {
      return prev.map((item) =>
        item.produto.id === produto.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
    }
    return [...prev, { produto, quantidade: 1 }];
  });
};
export default adicionarAoCarrinho;