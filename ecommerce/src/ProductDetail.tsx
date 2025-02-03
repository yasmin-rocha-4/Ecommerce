import React, { useState, useEffect } from "react";
import NavBarCarrinho from "./components/NavBarCarrinho";
import { Produto } from "./components/Produtos";
import { useLocation, useNavigate } from "react-router-dom";
import Features from "./components/Features";
import Overview from "./components/Overview";
import BotaoAcao from "./components/BotaoAcao";
import { adicionarAoCarrinho, obterQuantidadeCarrinho } from "./utils/GerenciarCarrinho"; // Função para obter a quantidade no carrinho
import useGoBack from "./utils/useGoBack";

const ProductDetail: React.FC = () => {
  const voltar = useGoBack();
  const [selectedButtonOverview, setSelectedButtonOverview] = useState(true);
  const [selectedButtonFeatures, setSelectedButtonFeatures] = useState(false);
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0); // Estado para a quantidade de itens no carrinho

  const navigate = useNavigate();
  const location = useLocation();
  const produto = location.state as Produto;

  useEffect(() => {
    // Atualiza a quantidade de itens no carrinho ao carregar a página
    setQuantidadeCarrinho(obterQuantidadeCarrinho());
  }, []);

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
    setQuantidadeCarrinho(obterQuantidadeCarrinho()); // Atualiza a quantidade no carrinho
  };

  const handleNavigate = (e: React.FormEvent) => {
    e.preventDefault(); 
    navigate("/carrinho"); 
  };
  

  return (
    <div style={{ fontFamily: "Montserrat, serif", margin: "20px", padding: "0" }}>
      <NavBarCarrinho  funcao={handleNavigate} voltar={voltar} quantidade={quantidadeCarrinho} />
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
