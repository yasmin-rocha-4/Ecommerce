import React from "react";
import { useLocation } from "react-router-dom";
import { Produto } from "./Produtos";
const Features:React.FC = ()=> {
    
    const location = useLocation();
      const produto = location.state as Produto;
    return(
        <div>
            <p>{produto.details}</p>
        </div>

    );
}
export default Features;