import React from "react";

interface FiltroModalProps {
  showFilter: boolean;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedSort: string;
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
}

const FiltroModal: React.FC<FiltroModalProps> = ({
  showFilter,
  setShowFilter,
  selectedCategory,
  setSelectedCategory,
  selectedSort,
  setSelectedSort,
}) => {
  if (!showFilter) return null;

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
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: selectedCategory === "headphones" ? "#28a745" : "#fff",
                color: selectedCategory === "headphones" ? "#fff" : "#000",
                borderRadius: "4px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={() => setSelectedCategory("headphones")}
            >
              Headphone
            </button>
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: selectedCategory === "headsets" ? "#28a745" : "#fff",
                color: selectedCategory === "headsets" ? "#fff" : "#000",
                borderRadius: "4px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={() => setSelectedCategory("headsets")}
            >
              Headset
            </button>
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: selectedCategory === "All" ? "#28a745" : "#fff",
                color: selectedCategory === "All" ? "#fff" : "#000",
                borderRadius: "4px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
          </div>
        </div>

        {/* Ordenar */}
        <div style={{ marginBottom: "16px" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: "500", marginBottom: "8px" }}>
            Sort By
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            <button
              style={{
                padding: "8px",
                backgroundColor: selectedSort === "Popularity" ? "#28a745" : "#fff",
                color: selectedSort === "Popularity" ? "#fff" : "#000",
                borderRadius: "4px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={() => setSelectedSort("Popularity")}
            >
              Popularity
            </button>
            <button
              style={{
                padding: "8px",
                backgroundColor: selectedSort === "Newest" ? "#28a745" : "#fff",
                color: selectedSort === "Newest" ? "#fff" : "#000",
                borderRadius: "4px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={() => setSelectedSort("Newest")}
            >
              Newest
            </button>
            <button
              style={{
                padding: "8px",
                backgroundColor: selectedSort === "Oldest" ? "#28a745" : "#fff",
                color: selectedSort === "Oldest" ? "#fff" : "#000",
                borderRadius: "4px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={() => setSelectedSort("Oldest")}
            >
              Oldest
            </button>
            <button
              style={{
                padding: "8px",
                backgroundColor: selectedSort === "High Price" ? "#28a745" : "#fff",
                color: selectedSort === "High Price" ? "#fff" : "#000",
                borderRadius: "4px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={() => setSelectedSort("High Price")}
            >
              High Price
            </button>
            <button
              style={{
                padding: "8px",
                backgroundColor: selectedSort === "Low Price" ? "#28a745" : "#fff",
                color: selectedSort === "Low Price" ? "#fff" : "#000",
                borderRadius: "4px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={() => setSelectedSort("Low Price")}
            >
              Low Price
            </button>
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
          onClick={() => setShowFilter(false)}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default FiltroModal;
