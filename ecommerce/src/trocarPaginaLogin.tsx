import React from "react";

interface TrocarPaginaLoginProps{
    texto:string;
    textoLink: string;
    onClick: () => void;
}

const TrocarPaginaLogin: React.FC<TrocarPaginaLoginProps> = ({texto, textoLink, onClick}) =>{
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
              onClick(); 
            }} style={{color: "#0ACF83"}}>
              {textoLink}
            </a>
          </div>
          
    )
}
export default TrocarPaginaLogin;