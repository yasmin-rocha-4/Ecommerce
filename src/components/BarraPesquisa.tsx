import React, { useState } from "react";
import iconPesquisa from "../assets/Icon/IconePesquisa.svg";
import { useNavigate } from "react-router-dom";
import UseProdutos from "./Produtos";
import CardHorizontal from "./CardHorizontal";

const BarraPesquisa: React.FC = () => {
  const navigate = useNavigate();
  const { produtos } = UseProdutos();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleClick = () => {
    navigate("/search");
  };

  const filteredProducts = produtos.filter((produto) =>
    produto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div onClick={handleClick} style={styles.inputContainer}>
        <img src={iconPesquisa} alt="Menu" />
        <input
          type="text"
          placeholder="Search headphone"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input}
        />
      </div>
      {/* Exibe o CardHorizontal apenas se searchTerm não estiver vazio */}
      {searchTerm.trim() && (
        <CardHorizontal ListaProduto={filteredProducts} />
      )}
    </div>
  );
};

const styles = {
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #d3d3d3",
    borderRadius: "20px",
    padding: "8px 12px",
    width: "100%",
    backgroundColor: "#fff",
  },
  input: {
    border: "none",
    outline: "none",
    fontSize: "14px",
    flex: 1,
    color: "#000",
  },
};

export default BarraPesquisa;
