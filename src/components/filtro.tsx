import React from "react";
import { Produto } from "./Produtos";

// FiltroModal.tsx
interface FiltroModalProps {
  showFilter: boolean;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedSort: string;
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
  produtos: Produto[]; // Adicionando `produtos`
}


const FiltroModal: React.FC<FiltroModalProps> = ({
  showFilter,
  setShowFilter,
  selectedCategory,
  setSelectedCategory,
  selectedSort,
  setSelectedSort,
  produtos,
}) => {
  if (!showFilter) return null;

  // Função para aplicar os filtros e ordenações
  const aplicarFiltro = () => {
    let produtosFiltrados = [...produtos];

    // Filtrar por categoria
    if (selectedCategory !== "All") {
      produtosFiltrados = produtosFiltrados.filter(
        (produto) => produto.category === selectedCategory
      );
    }

    // Ordenar
    switch (selectedSort) {
      case "Popularity":
        produtosFiltrados.sort((a, b) => b.popularity - a.popularity); // Verifique se `popularity` é numérico
        break;
      case "Newest":
        produtosFiltrados.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "Oldest":
        produtosFiltrados.sort(
          (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
      case "High Price":
        produtosFiltrados.sort((a, b) => b.price - a.price);
        break;
      case "Low Price":
        produtosFiltrados.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    // Fechar modal
    setShowFilter(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 50,
      }}
      onClick={() => setShowFilter(false)}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "20px",
          width: "90%",
          maxWidth: "400px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>Filter</h2>
          <button
            style={{
              fontSize: "1.25rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#555",
            }}
            onClick={() => setShowFilter(false)}
          >
            ✖
          </button>
        </div>

        {/* Categoria */}
        <div style={{ marginBottom: "16px" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: "500", marginBottom: "8px" }}>
            Category
          </h3>
          <div style={{ display: "flex", gap: "8px" }}>
            {["headphones", "headsets", "All"].map((categoria) => (
              <button
                key={categoria}
                style={{
                  padding: "8px 16px",
                  backgroundColor:
                    selectedCategory === categoria ? "#28a745" : "#fff",
                  color: selectedCategory === categoria ? "#fff" : "#000",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedCategory(categoria)}
              >
                {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Ordenar */}
        <div style={{ marginBottom: "16px" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: "500", marginBottom: "8px" }}>
            Sort By
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            {["Popularity", "Newest", "Oldest", "High Price", "Low Price"].map(
              (sort) => (
                <button
                  key={sort}
                  style={{
                    padding: "8px",
                    backgroundColor: selectedSort === sort ? "#28a745" : "#fff",
                    color: selectedSort === sort ? "#fff" : "#000",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedSort(sort)}
                >
                  {sort}
                </button>
              )
            )}
          </div>
        </div>

        <button
          style={{
            width: "100%",
            backgroundColor: "#28a745",
            color: "white",
            padding: "12px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={aplicarFiltro}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default FiltroModal;
