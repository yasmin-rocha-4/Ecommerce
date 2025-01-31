import React from "react";

import { useNavigate } from "react-router-dom";
import FooterReviews from "./utils/footerReviews";

interface Review {
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  postedAt: string;
}

export interface Produto {
  id: string;
  name: string;
  price: number;
  img: string;
  reviews: Review[];
  
}

export interface CardProdutoProps {
  ListaProduto: Produto[];
  footer?: React.ReactNode;
}

const CardProduto: React.FC<CardProdutoProps> = ({ ListaProduto }) => {
  const produtos = ListaProduto;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/productDetail");
  };
  // Função para contar o número de reviews de um produto
 

  return (
    <div onClick={handleClick} style={styles.cards}>
      {produtos.map((produto) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#fff",
          }}
          key={produto.id}
        >
          <img
            style={{ width: "120px", height: "120px" }}
            src={produto.img}
            alt={produto.name}
          />
          <p style={{ paddingTop: "20px", margin: "0" }}>{produto.name}</p>
          <p style={{ fontWeight: "bold" }}>USD {produto.price}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
           
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                margin: "0",
                padding: "0",
              }}
            >
              <FooterReviews produto={produto}/>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  cards: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifySelf: "center",
    margin: "10px",
    gap: "1rem",
    width: "300px",
    height: "300px",
  },
};

export default CardProduto;
