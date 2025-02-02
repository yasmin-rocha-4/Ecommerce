import React, { useState } from "react";
import UseProdutos from "./components/Produtos";
import CardProduto from "./components/CardProduto";
import NavBarCarrinho from "./components/NavBarCarrinho";
import FiltroModal from "./components/filtro";
import icone from "./assets/Icon/sliders.svg";
import useGoBack from "./utils/useGoBack";
const AllProducts: React.FC = () => {
  const voltar = useGoBack();
  const { produtos, loading, error } = UseProdutos();
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSort, setSelectedSort] = useState<string>("Popularity");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  let filteredProducts = produtos;

  // Filtragem por categoria
  if (selectedCategory !== "All") {
    filteredProducts = filteredProducts.filter(
      (produto) => produto.category === selectedCategory
    );
  }

  // Ordenação
  if (selectedSort === "High Price") {
    filteredProducts = filteredProducts.sort(
      (a, b) => b.price - a.price
    );
  } else if (selectedSort === "Low Price") {
    filteredProducts = filteredProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  return (
    <div>
      <NavBarCarrinho voltar={voltar} />
      <h1 style={{margin:"20px", fontWeight:"bold"}}>All Products</h1>
      <button
        onClick={() => setShowFilter(true)}
        style={{
          padding: "10px",
          backgroundColor: "#ffff",
          color: "black",
          border: "1px solid #BABABA",
          cursor: "pointer",
          margin: "20px",
          borderRadius: "8px",
          width:"90%"
        }}
      >
        <img style={{marginRight:"10px"}} src={icone} alt="" />
        Filter
      </button>

      <FiltroModal
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />

      <CardProduto ListaProduto={filteredProducts} />
    </div>
  );
};

export default AllProducts;
