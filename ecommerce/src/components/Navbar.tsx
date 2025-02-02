import React from "react";
interface NavbarProps{
  opcao: string,
  icone:string,
  titulo?:string
  funcao?: (e: React.FormEvent<Element>) => void | Promise<void>;
  voltar?: (e: React.FormEvent<Element>) => void | Promise<void>;
}
const Navbar: React.FC<NavbarProps> = ({opcao, icone,titulo, funcao, voltar}) =>{
    return(
        <div style={styles.navegacao}>
      <img onClick={voltar} style = {styles.img}src={opcao} alt="Menu" />
      <img style = {styles.img}src={titulo} alt="Logo" />
      <img onClick={funcao} style = {styles.img}src={icone} alt="Avatar" />
    </div>
    );
}
const styles = {
  navegacao: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // Garante alinhamento vertical
    margin: "20px"
  },
  img: {
    maxWidth: "100%", // Garante que as imagens se ajustem ao container
    height: "auto" // Preserva a proporção
  }
};
export default Navbar;