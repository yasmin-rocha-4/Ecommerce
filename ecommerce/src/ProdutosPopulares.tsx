import React from "react";
import UseProdutos from "./Produtos";
import { Produto } from "./CardProduto";
import CardHorizontal from "./CardHorizontal";

const ProdutosPopulares: React.FC = () => {
  const { produtos }: { produtos: Produto[] } = UseProdutos(); // Garante que produtos é um array de Produto

  // Função para pegar os 3 produtos mais populares
  const getTopReviewedProducts = (produtos: Produto[]): Produto[] => {
    return [...produtos] // Cria uma cópia do array original
      .sort((a, b) => b.reviews.length - a.reviews.length) // Ordena por quantidade de reviews
      .slice(0, 3); // Retorna os 3 primeiros produtos
  };

  const topReviewedProducts = getTopReviewedProducts(produtos); // Obtém os produtos populares

  return (
    <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
      <CardHorizontal ListaProduto={topReviewedProducts} />
    </div>
  );
};

export default ProdutosPopulares;
