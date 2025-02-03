import React, { CSSProperties } from "react";

interface NavbarProps {
  opcao: string;
  icone: string;
  titulo?: string;
  funcao?: (e: React.FormEvent<Element>) => void | Promise<void>;
  voltar?: (e: React.FormEvent<Element>) => void | Promise<void>;
  quantidade?: number;
}

const Navbar: React.FC<NavbarProps> = ({
  opcao,
  icone,
  titulo,
  funcao,
  voltar,
  quantidade,
}) => {
  return (
    <div style={styles.navegacao}>
      <img
        onClick={voltar}
        style={styles.img}
        src={opcao}
        alt="Menu"
      />
      {titulo && <img style={styles.img} src={titulo} alt="Logo" />}
      <img
        onClick={funcao}
        style={styles.img}
        src={icone}
        alt="Avatar"
      />
      {quantidade && quantidade > 0 && (
        <span style={styles.notification}>
          {quantidade}
        </span>
      )}
    </div>
  );
};

const styles = {
  navegacao: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px",
    position: "relative" as const, // Para o `span` com posição absoluta funcionar
  } as CSSProperties,
  img: {
    maxWidth: "100%",
    height: "auto",
    cursor: "pointer", // Adicionado para indicar clicável
  } as CSSProperties,
  notification: {
    position: "absolute",
    top: "-5px",
    right: "-5px",
    background: "#0ACF83",
    color: "#FFFFFF",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "0.75rem",
    fontWeight: 700, // Use o número 700 no lugar de "bold"
  } as CSSProperties,
};

export default Navbar;
