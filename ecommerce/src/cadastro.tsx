import React from "react";
import BotaoAcao from "./BotaoAcao";
import Input from "./input";
import EntrarComGoogle from "./EntrarComGoogle";
import TrocarPaginaLogin from "./trocarPaginaLogin";
interface LoginProps {
  titulo: string;
  descricao: string;

}

const Login: React.FC<LoginProps> = (props) => {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <h2>{props.descricao}</h2>
      <Input imgSrc = "./assets/Icon/mail.svg" imgAlt="icone email" placeholderText = "Email"/>
      <Input imgSrc = "./assets/Icon/lock.png" imgAlt="icone cadeado" placeholderText = "Senha"/>

      <BotaoAcao className ="botao-comando" comando="Sign Up"/>
      <EntrarComGoogle texto="Sign Up with Google"/>
      <TrocarPaginaLogin texto="already have an account?" textoLink="Sign In here" link="./Login.tsx" />
    </div>
  );
};

export default Login;
