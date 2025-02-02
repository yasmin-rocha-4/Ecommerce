import { Produto } from "../Produtos";
const alterarQuantidade = (
    id: string,
    delta: number,
    setCarrinho: React.Dispatch<
      React.SetStateAction<{ produto: Produto; quantidade: number }[]>
    >
  ) => {
    setCarrinho((prev) =>
      prev
        .map((item) =>
          item.produto.id === id
            ? { ...item, quantidade: item.quantidade + delta }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };
  
  export default alterarQuantidade;
  