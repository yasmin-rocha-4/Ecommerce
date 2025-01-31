import React from "react";
import CardProduto from "./CardProduto";
import UseProdutos from "./Produtos";
import NavBarCarrinho from "./NavBarCarrinho";
import iconeFiltro from "./assets/Icon/sliders.svg"
const AllProducts: React.FC = () => {
  const { produtos, loading, error } = UseProdutos(); // Desestruturação do hook

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  if (error) {
    return <p>Erro ao carregar produtos: {error}</p>;
  }

  return (
    <div style={{fontFamily:"Montserrat, serif"}}>
      <NavBarCarrinho/>
      <p style={{fontSize:"1.5rem", fontWeight:"bold", margin:"20px"}}>All Products</p>
      <button style={{width:"90%", height:"40px",display:"flex", gap:"1rem", justifyContent:"center", alignItems:"center", margin:"20px", borderRadius:"8px", borderColor: "#bababa", background:"#FFFF", marginBottom:"100px"}}>
        <img src={iconeFiltro} alt="" />
        <p style={{margin:"0"}}>filter</p>
      </button>
      <CardProduto ListaProduto={produtos} /> 
    </div>
  );
};

export default AllProducts;
