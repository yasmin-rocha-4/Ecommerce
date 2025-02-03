import React, { useState, useEffect, useMemo } from "react";
import UseProdutos from "./components/Produtos";
import CardProduto from "./components/CardProduto";
import NavBarCarrinho from "./components/NavBarCarrinho";
import FiltroModal from "./components/filtro";
import icone from "./assets/Icon/sliders.svg";
import useGoBack from "./utils/useGoBack";
import { obterQuantidadeCarrinho } from "./utils/GerenciarCarrinho";
import { useNavigate } from "react-router-dom";

const AllProducts: React.FC = () => {
  const navigate = useNavigate();
  const voltar = useGoBack();
  const { produtos, loading, error } = UseProdutos();

  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSort, setSelectedSort] = useState<string>("Popularity");
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState<number>(0);

  // Atualiza a quantidade de itens no carrinho ao carregar a página
  useEffect(() => {
    setQuantidadeCarrinho(obterQuantidadeCarrinho());
  }, []);

  // Função de navegação para o carrinho
  const handleNavigate = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/carrinho");
  };

  // Filtragem e ordenação de produtos usando useMemo
  const filteredProducts = useMemo(() => {
    let result = [...produtos];

    // Filtragem por categoria
    if (selectedCategory !== "All") {
      result = result.filter((produto) => produto.category === selectedCategory);
    }

    // Ordenação
    switch (selectedSort) {
      case "High Price":
        result.sort((a, b) => b.price - a.price);
        break;
      case "Low Price":
        result.sort((a, b) => a.price - b.price);
        break;
      case "Popularity":
        result.sort((a, b) => b.popularity - a.popularity); // Ordenação por popularidade
        break;
      case "Newest":
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()); // Ordenação por mais novo
        break;
      case "Oldest":
        result.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()); // Ordenação por mais velho
        break;
      default:
        break;
    }

    return result;
  }, [produtos, selectedCategory, selectedSort]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {/* NavBar com carrinho */}
      <NavBarCarrinho
        quantidade={quantidadeCarrinho}
        voltar={voltar}
        funcao={handleNavigate}
      />

      {/* Título da página */}
      <h1 style={{ margin: "20px", fontWeight: "bold" }}>All Products</h1>

      {/* Botão de filtro */}
      <button
        onClick={() => setShowFilter(true)}
        style={{
          padding: "10px",
          backgroundColor: "#fff",
          color: "black",
          border: "1px solid #BABABA",
          cursor: "pointer",
          margin: "20px",
          borderRadius: "8px",
          width: "90%",
        }}
      >
        <img style={{ marginRight: "10px" }} src={icone} alt="Filter Icon" />
        Filter
      </button>

      {/* Modal de filtro */}
      <FiltroModal
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        produtos={produtos}
      />

      {/* Lista de produtos */}
      <CardProduto ListaProduto={filteredProducts} />
    </div>
  );
};

export default AllProducts;
