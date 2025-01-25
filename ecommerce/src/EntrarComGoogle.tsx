import React from "react";
import google from "./assets/Icon/google.png";
interface EntrarComGoogleProps{
    texto: string;
}

const EntrarComGoogle: React.FC<EntrarComGoogleProps> = ({texto}) =>{
    return(
        <div>
            <img src={google} alt="icone google" style={styles.icon} />
            <p>{texto}</p>
        </div>
    )
}
const styles = {
    button: {
      display: "flex",
      alignItems: "center",
      gap: "8px", // Espaçamento entre o ícone e o texto
      padding: "10px 20px",
      border: "none",
      background: "white",
      borderRadius: "8px",
      cursor: "pointer",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    },
    icon: {
      width: "20px",
      height: "20px",
    },
  };
export default EntrarComGoogle;