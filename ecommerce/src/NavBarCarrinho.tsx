import React from "react";
import seta from "./assets/Icon/chevron-left.svg";
import carrinho from "./assets/Icon/shopping-cart.svg";
const NavBarCarrinho: React.FC = ()=>{
    return(
        <div style={{display:"flex", justifyContent:"space-between", margin:"20px"}}>
        <img src={seta} alt="" />
        <img src={carrinho} alt="" />
      </div>
    );
}
export default NavBarCarrinho;