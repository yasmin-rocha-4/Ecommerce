import React from "react";
import estrela from "./assets/Icon/estrela.svg";
import menuVertical from "./assets/Icon/more-vertical.svg";
import { useNavigate } from "react-router-dom";

interface Review {
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  postedAt: string;
}

interface Produto {
  id: string;
  name: string;
  price: number;
  img: string;
  reviews: Review[];
}

export interface CardProdutoProps {
  ListaProduto: Produto[];
}

const CardProduto: React.FC<CardProdutoProps> = ({ ListaProduto }) => {
  const produtos = ListaProduto;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/productDetail");
  };
  // Função para contar o número de reviews de um produto
  const contarReviews = (produtoId: string) => {
    const produto = produtos.find((p) => p.id === produtoId);
    return produto ? produto.reviews.length : 0;
  };

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
            <img style={styles.img} src={estrela} alt="ícone estrela" />
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                margin: "0",
                padding: "0",
              }}
            >
              <p style={{margin:"0"}}>{contarReviews(produto.id)}</p>
              <p style={{margin:"0"}}>Reviews</p>
            </div>
            <img style={styles.img} src={menuVertical} alt="mais opções" />
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
  img: {
    width: "20px",
    height: "20px",
  },
};

export default CardProduto;
