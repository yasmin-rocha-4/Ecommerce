import React, { useState } from "react";
import BotaoAcao from "./BotaoAcao";
import EntrarComGoogle from "./EntrarComGoogle";
import TrocarPaginaLogin from "./trocarPaginaLogin";
import IconeEmail from "./assets/Icon/mail.svg";
import cadeado from "./assets/Icon/lock.svg";
import "./login.css";
import fundoLogin from "./assets/fundoLogin.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

interface LoginProps {
  onSwitchToCadastro: () => void;
  titulo: string;
  descricao: string;
}

const Login: React.FC<LoginProps> = ({ onSwitchToCadastro, titulo, descricao }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const credencialUsuario = await signInWithEmailAndPassword(auth, email, senha);
      console.log("Usuário logado:", credencialUsuario.user);
      alert("Login feito com sucesso!");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Erro desconhecido ao tentar logar.");
      }
    }
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${fundoLogin})` }}>
      {/* Cabeçalho */}
      <div className="cabecalho">
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
      </div>
      <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto"}}>
      <form >
        {/* Input para E-mail */}
        <div className="form-floating mb-3">
          <input
            className="form-control"
            placeholder="Digite seu e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="emailLogin"
          />
          <label htmlFor="emailLogin">
            <img src={IconeEmail} alt="Ícone de e-mail" />
          </label>
        </div>

        {/* Input para Senha */}
        <div className="form-floating mb-3">
          <input
            className="form-control"
            placeholder="Digite sua senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            id="senhaLogin"
          />
          <label htmlFor="senhaLogin">
            <img src={cadeado} alt="Ícone de senha" />
          </label>
        </div>

        {/* Esqueci minha senha */}
        <p style={{ fontSize: "1rem" }}>Forgot Password</p>

        {/* Botão para Logar */}
        <BotaoAcao className="botao-comando" funcao={handleLogin} comando="Sign In" />
      </form>

      {/* Exibição de Erro */}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </div>

      
      {/* Botão para Login com Google */}
      <EntrarComGoogle texto="Sign In with Google" />

      {/* Trocar para Página de Cadastro */}
      <TrocarPaginaLogin
        texto="Didn't have any account?"
        textoLink="Sign Up here"
        onClick={onSwitchToCadastro}
      />
    </div>
  );
};

export default Login;
