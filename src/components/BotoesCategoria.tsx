import React, { useState } from "react";
interface BotoesCategoriaProps {
  onCategoriaChange: (categoria: string) => void; // Função para notificar o valor do botão
}
const BotoesCategoria: React.FC<BotoesCategoriaProps> = ({ onCategoriaChange }) => {
  const [selectedButton, setSelectedButton] = useState("Headphone");
  const handleClick = (categoria: string) => {
    setSelectedButton(categoria);
    onCategoriaChange(categoria); // Notifica o valor para a página principal
  };

  return (
    <div style={styles.container}>
      <button
        style={{
          ...styles.button,
          ...(selectedButton === "Headphone" ? styles.selected : {}),
        }}
        onClick={() => handleClick("headphones")}
      >
        Headphone
      </button>
      <button
        style={{
          ...styles.button,
          ...(selectedButton === "Headset" ? styles.selected : {}),
        }}
        onClick={() => handleClick("headsets")}
      >
        Headset
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px", 
    marginTop:"30px"
  },
  button: {
    border: "none",
    borderRadius: "20px",
    padding: "10px 20px",
    backgroundColor: "transparent",
    color: "#888", 
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    outline: "none",
  },
  selected: {
    backgroundColor: "#20c997", 
    color: "#fff", 
  },
};

export default BotoesCategoria;
