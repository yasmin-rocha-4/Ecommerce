import React from "react";
import CardProduto from "./CardProduto";
import UseProdutos from "./Produtos";

const AllProducts: React.FC = () => {
  const { produtos, loading, error } = UseProdutos(); // Desestruturação do hook

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  if (error) {
    return <p>Erro ao carregar produtos: {error}</p>;
  }

  return (
    <div>
      <CardProduto ListaProduto={produtos} /> 
    </div>
  );
};

export default AllProducts;
