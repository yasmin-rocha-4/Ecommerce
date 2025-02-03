import React, { useState } from "react";

interface BotoesCategoriaProps {
  onCategoriaChange: (categoria: string) => void; // Função para notificar o valor do botão
}

const BotoesCategoria: React.FC<BotoesCategoriaProps> = ({ onCategoriaChange }) => {
  const [selectedButton, setSelectedButton] = useState("headphones"); // Estado armazenando valores consistentes com os atributos dos produtos

  const handleClick = (categoria: string) => {
    setSelectedButton(categoria);
    onCategoriaChange(categoria); // Notifica a página principal com o valor correto
  };

  return (
    <div style={styles.container}>
      <button
        style={{
          ...styles.button,
          ...(selectedButton === "headphones" ? styles.selected : {}), // Verifica o botão selecionado
        }}
        onClick={() => handleClick("headphones")} // Passa o valor consistente
      >
        Headphone
      </button>
      <button
        style={{
          ...styles.button,
          ...(selectedButton === "headsets" ? styles.selected : {}), // Verifica o botão selecionado
        }}
        onClick={() => handleClick("headsets")} // Passa o valor consistente
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
    marginTop: "30px",
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
