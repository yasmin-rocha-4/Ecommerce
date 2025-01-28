import  {useState} from "react";
import Login from "./Login";
import Cadastro from "./cadastro";
function App() {
  const [isLogin, atualizarEstado] = useState(true); // true para a tela de login, false para a tela de cadastro

  

  return (
    <div>
    {isLogin ? (
      <Login onSwitchToCadastro={() => atualizarEstado(false)} titulo="Audio" descricao="Its modular and desined to last" />
    ) : (
      <Cadastro onSwitchToLogin={() => atualizarEstado(true)} titulo="Audio" descricao="Its modular and desined to last"/>
    )}
  </div>
    
  );
}

export default App;
