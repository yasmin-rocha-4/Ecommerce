import React from "react";
import seta from "../assets/Icon/chevron-left.svg";
import carrinho from "../assets/Icon/shopping-cart.svg";

interface NavBarCarrinhoProps {
  funcao?: (e: React.FormEvent<Element>) => void | Promise<void>;
  voltar?: (e: React.FormEvent<Element>) => void | Promise<void>;
  quantidade: number;
}

const NavBarCarrinho: React.FC<NavBarCarrinhoProps> = ({ funcao, voltar, quantidade }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", position: "relative" }}>
      <img onClick={voltar} src={seta} alt="Voltar" />
      <div style={{ position: "relative" }}>
        <img style={{padding:"6px"}} onClick={funcao} src={carrinho} alt="Carrinho" />
        {quantidade > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              background: "#0ACF83",
              color: "#FFFFFF",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "0.75rem",
              fontWeight: "bold",
            }}
          >
            {quantidade}
          </span>
        )}
      </div>
    </div>
  );
};

export default NavBarCarrinho;
