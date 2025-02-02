import React from "react";
import { useNavigate } from "react-router-dom";
import FooterReviews from "./utils/footerReviews";
import { Produto } from "./Produtos";
export interface CardProdutoProps {
  ListaProduto: Produto[];
  footer?: React.ReactNode;
}

const CardProduto: React.FC<CardProdutoProps> = ({ ListaProduto }) => {
  const navigate = useNavigate();

  
  const handleClick = (produto: Produto) => {
    // Navega para a página de detalhes, passando o produto selecionado via 'state'
    navigate("/productDetail", { state: produto });
  };

  return (
    <div style={styles.cards}>
      {ListaProduto.map((produto) => (
        <div
          key={produto.id}
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            cursor: "pointer",
          }}
          onClick={() => handleClick(produto)} // Passa o produto para o handleClick
        >
          <img
            style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "8px" }}
            src={produto.img}
            alt={produto.name}
          />
          <p style={{ paddingTop: "20px", margin: "0", fontSize: "16px" }}>
            {produto.name}
          </p>
          <p style={{ fontWeight: "bold" }}>USD {produto.price}</p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <FooterReviews produto={produto} />
          </div>
        </div>
      ))}
    </div>
  );
};

// Estilos para o layout
const styles = {
  cards: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifySelf: "center",
    margin: "10px",
    gap: "1rem",
    width: "100%",
    maxWidth: "600px", // Máximo de largura para os cards
    marginBottom: "30px",
    padding:"0"
  },
};

export default CardProduto;
