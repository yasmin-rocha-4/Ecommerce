import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface TrocarPaginaLoginProps {
  texto: string;
  textoLink: string;
}

const TrocarPaginaLogin: React.FC<TrocarPaginaLoginProps> = ({ texto, textoLink }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Para obter a localização atual

  // Função para decidir para onde o usuário deve ser redirecionado
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página

    // Verifica se o usuário está na página de cadastro
    if (location.pathname === "/cadastro") {
      navigate("/login"); // Redireciona para a página de login
    } else {
      navigate("/cadastro"); // Redireciona para a página de cadastro (caso contrário)
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        boxSizing: "border-box",
        padding: "10px",
        gap: "0.5rem",
        position: "absolute",
        bottom: "10px",
        right: "0",
        justifyContent: "center", // Alinha os itens no centro horizontalmente
      }}
    >
      <p>{texto}</p>
      <a
        href="#"
        onClick={handleLinkClick} // Usando a função modificada
        style={{ color: "#0ACF83" }}
      >
        {textoLink}
      </a>
    </div>
  );
};

export default TrocarPaginaLogin;
