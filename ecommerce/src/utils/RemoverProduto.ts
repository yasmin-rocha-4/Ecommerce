import { Produto } from "../Produtos";
const removerProduto = (
    id: string,
    setCarrinho: React.Dispatch<
      React.SetStateAction<{ produto: Produto; quantidade: number }[]>
    >
  ) => {
    setCarrinho((prev) => prev.filter((item) => item.produto.id !== id));
  };
  
  export default removerProduto;
  