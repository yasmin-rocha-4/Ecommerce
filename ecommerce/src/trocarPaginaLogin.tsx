import React from "react";
import { useNavigate } from "react-router-dom";
interface TrocarPaginaLoginProps{
    texto:string;
    textoLink: string;
    
}

const TrocarPaginaLogin: React.FC<TrocarPaginaLoginProps> = ({texto, textoLink}) =>{
    const navigate = useNavigate();
    return(
        <div style={{
            display: "flex",
            width: "100%",
            boxSizing: "border-box",
            padding: "10px",
            gap: "0.5rem",
            position: "absolute",
            bottom: "10px",
            right:"0",
            justifyContent: "center",  // Alinha os itens no centro horizontalmente
               // Alinha os itens no centro verticalmente
          }}>
            <p>{texto}</p>
            <a href="#" onClick={(e) => {
              e.preventDefault(); // Evita o comportamento padrão de recarregar a página
              navigate("/cadastro");
            }} style={{color: "#0ACF83"}}>
              {textoLink}
            </a>
          </div>
          
    )
}
export default TrocarPaginaLogin;