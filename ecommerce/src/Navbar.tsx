import React from "react";
interface NavbarProps{
  opcao: string,
  icone:string,
  titulo?:string
}
const Navbar: React.FC<NavbarProps> = ({opcao, icone,titulo}) =>{
    return(
        <div style={styles.navegacao}>
      <img style = {styles.img}src={opcao} alt="Menu" />
      <img style = {styles.img}src={titulo} alt="Logo" />
      <img style = {styles.img}src={icone} alt="Avatar" />
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