import React from "react";
import UseProdutos from "./Produtos";
import { Produto } from "./Produtos";
import CardHorizontal from "./CardHorizontal";

const ProdutosPopulares: React.FC = () => {
  // Garante que `UseProdutos` retorna produtos e está tipado corretamente
  const { produtos }: { produtos: Produto[] } = UseProdutos();

  // Função para pegar os 3 produtos mais populares
  const getTopReviewedProducts = (produtos: Produto[]): Produto[] => {
    return [...produtos] // Cria uma cópia do array original
      .sort((a, b) => b.popularity - a.popularity) // Ordena por popularidade
      .slice(0, 3); // Retorna os 3 primeiros produtos
  };

  // Obtém os produtos mais populares
  const topReviewedProducts = produtos ? getTopReviewedProducts(produtos) : [];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {/* Garante que os produtos estão sendo passados corretamente */}
      {topReviewedProducts.length > 0 ? (
        <CardHorizontal ListaProduto={topReviewedProducts} />
      ) : (
        <p>Nenhum produto popular encontrado.</p>
      )}
    </div>
  );
};

export default ProdutosPopulares;
