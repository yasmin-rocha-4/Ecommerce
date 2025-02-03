import React from "react";
import { Produto } from "../components/Produtos";

interface ContarReviewsProps {
  produto: Produto;
}

const ContarReviews: React.FC<ContarReviewsProps> = ({ produto }) => {
  return <>{produto.reviews.length}</>; // Exibe a quantidade de reviews
};

export default ContarReviews;
