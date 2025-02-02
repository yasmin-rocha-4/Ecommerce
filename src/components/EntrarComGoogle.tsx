import React from "react";
import google from "../assets/Icon/google.png";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../utils/firebase"; // Certifique-se de ajustar o caminho para o arquivo firebase.ts

interface EntrarComGoogleProps {
  texto: string;
}

const EntrarComGoogle: React.FC<EntrarComGoogleProps> = ({ texto }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Usuário logado:", result.user); // Exibe os dados do usuário no console
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erro ao logar com o Google:", error.message);
      } else {
        console.error("Erro desconhecido ao logar com o Google");
      }
    }
  };

  return (
    <div style={{display:"flex",  justifyContent: "center",
      alignItems: "center",
      width: "100%",}}>
        <button
      onClick={handleLogin}
      style={{
        ...styles.button, // Estilo do botão
      }}
    >
      <img src={google} alt="icone google" style={styles.icon} />
      <p>{texto}</p>
    </button>
    </div>
    
  );
};

const styles = {
  button: {
    display: "flex",
  background: "transparent",
  color: "#fff",
    gap: "8px", // Espaçamento entre o ícone e o texto
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    
  },
  icon: {
    width: "20px",
    height: "20px",
  },
};

export default EntrarComGoogle;
