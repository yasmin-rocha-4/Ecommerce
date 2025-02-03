import React from "react";

interface NavbarProps {
  opcao: string;
  icone: string;
  titulo?: string;
  funcao?: (e: React.MouseEvent<HTMLImageElement>) => void | Promise<void>;
  voltar?: (e: React.MouseEvent<HTMLImageElement>) => void | Promise<void>;
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
      <div style={{position:"relative"}}>
        <img
          onClick={funcao}
          style={styles.img}
          src={icone}
          alt="Avatar"
        />
        {quantidade && quantidade > 0 && (
          <span style={{
            position: "absolute",
            top: "-5px",
            right: "-5px",
            background: "#0ACF83",
            color: "#FFFFFF",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "0.75rem",
            fontWeight: "bold",
          }}>
            {quantidade}
          </span>
        )}
      </div>
    </div>
  );
};

const styles = {
  navegacao: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px", // Alterado de margin para padding para evitar problemas de layout
    position: "relative" as const,
  },
  img: {
    maxWidth: "100%",
    height: "auto",
    cursor: "pointer",
  },

};

export default Navbar;