import React, { useState } from "react";
import NavBarCarrinho from "./NavBarCarrinho";
import { Produto } from "./Produtos";
import { useLocation, useNavigate } from "react-router-dom";
import Features from "./Features";
import Overview from "./Overview";
import BotaoAcao from "./BotaoAcao";
import { adicionarAoCarrinho } from "./utils/GerenciarCarrinho";

const ProductDetail: React.FC = () => {
  const [selectedButtonOverview, setSelectedButtonOverview] = useState(true);
  const [selectedButtonFeatures, setSelectedButtonFeatures] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const produto = location.state as Produto;

  const handleClickOverview = () => {
    setSelectedButtonOverview(true);
    setSelectedButtonFeatures(false);
  };

  const handleClickFeatures = () => {
    setSelectedButtonOverview(false);
    setSelectedButtonFeatures(true);
  };

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    adicionarAoCarrinho(produto);
  };

  const handleNavigate = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/carrinho");
  };

  return (
    <div style={{ fontFamily: "Montserrat, serif", margin: "20px", padding: "0" }}>
      <NavBarCarrinho funcao={handleNavigate} />
      <p style={{ color: "#0ACF83", fontSize: "1rem", fontWeight: "400" }}>
        USD {produto.price}
      </p>
      <h1 style={{ fontWeight: "bold" }}>{produto.name}</h1>
      <div>
        <button
          style={{
            background: "#ffff",
            border: "none",
            borderBottom: selectedButtonOverview ? "3px solid #0ACF83" : "none",
          }}
          onClick={handleClickOverview}
        >
          Overview
        </button>
        <button
          style={{
            background: "#ffff",
            border: "none",
            borderBottom: selectedButtonFeatures ? "3px solid #0ACF83" : "none",
          }}
          onClick={handleClickFeatures}
        >
          Features
        </button>
      </div>
      {selectedButtonOverview && <Overview />}
      {selectedButtonFeatures && <Features />}
      <BotaoAcao comando="Add to Cart" funcao={handleAddToCart} />
    </div>
  );
};

export default ProductDetail;
