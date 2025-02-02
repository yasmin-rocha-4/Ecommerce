import React, { useState } from "react";
import BotaoAcao from "./components/BotaoAcao";
import EntrarComGoogle from "./components/EntrarComGoogle";
import TrocarPaginaLogin from "./components/TrocarPaginaLogin";
import iconeEmail from "./assets/Icon/mail.svg";
import cadeado from "./assets/Icon/lock.svg";
import fundoLogin from "./assets/fundoLogin.svg";
import "./login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./utils/firebase"; 
interface CadastroProps {
  titulo: string;
  descricao: string;

}

const Cadastro: React.FC<CadastroProps> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuário cadastrado:", userCredential.user);
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Erro desconhecido ao cadastrar");
      }
    }
  };
  return (
    <div className="container" style={{backgroundImage: `url(${fundoLogin})` }}>
      <div className="cabecalho">
      <h1>{props.titulo}</h1>
      <h2>{props.descricao}</h2>
      </div>
      <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto"}}>
 
      <form>
        {/* Input para E-mail */}
        <div  className="form-floating mb-3">
        <input
         className="form-control"
          placeholder="Digite seu e-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="floatingInput"
        />
        <label htmlFor="floatingInput">
        <img src={iconeEmail} alt= "icone email"/>
        </label>
        </div>
        {/* Input para Senha */}
        <div className="form-floating mb-3" >
        <input
         className="form-control"
         id="floatingInput2"
         placeholder="Digite sua senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
        />
        <label htmlFor="floatingInput2">
        <img src={cadeado} alt= "icone senha"/>
        </label>
        </div>
       
        {/* Botão para Cadastrar */}
        <BotaoAcao funcao = {handleSignUp} comando="Cadastrar" />
      </form>

      {/* Exibição de Erro */}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
      <EntrarComGoogle  texto="Sign Up with Google"/>
      <TrocarPaginaLogin texto="already have an account?" textoLink="Sign In here" />
    </div>
  );
};

export default Cadastro;
