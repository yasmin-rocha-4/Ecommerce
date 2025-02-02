import React from "react";
import seta from "../assets/Icon/chevron-left.svg";
import carrinho from "../assets/Icon/shopping-cart.svg";
interface NavBarCarrinhoProps{
  funcao?: (e: React.FormEvent<Element>) => void | Promise<void>;
  voltar?: (e: React.FormEvent<Element>) => void | Promise<void>;
}
const NavBarCarrinho: React.FC<NavBarCarrinhoProps> = ({funcao, voltar})=>{
    return(
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"20px"}}>
        <img onClick={voltar}src={seta} alt="" />
        <img onClick={funcao} src={carrinho} alt="" />
      </div>
    );
}
export default NavBarCarrinho;