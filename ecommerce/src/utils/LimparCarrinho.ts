import { Produto } from "../Produtos";
const limparCarrinho = (
    setCarrinho: React.Dispatch<
      React.SetStateAction<{ produto: Produto; quantidade: number }[]>
    >
  ) => {
    setCarrinho([]);
  };
  
  export default limparCarrinho;
  