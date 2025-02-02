import { Produto } from "../components/Produtos";

const calcularTotal = (carrinho: { produto: Produto; quantidade: number }[]) => {
  return carrinho.reduce(
    (total, item) => total + item.produto.price * item.quantidade,
    0
  );
};

export default calcularTotal;
