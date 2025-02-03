import React from "react";
import { CardProdutoProps } from "./CardProduto";
import FooterReviews from "../utils/footerReviews";
import { Produto } from "./Produtos";
import { useNavigate } from "react-router-dom";
const CardHorizontal: React.FC<CardProdutoProps> = ({ListaProduto})=>{
  const navigate = useNavigate();
    const produtos = ListaProduto;
     const handleClick = (produto: Produto) => {
        // Navega para a página de detalhes, passando o produto selecionado via 'state'
        navigate("/productDetail", { state: produto });
      };
    return(
        <div>
            
                {produtos.map((product) => (  
                        
                  <div style={{display:"grid", gridTemplateColumns:"1fr 2fr", width:"100%", margin:"10px 10px 10px 30px "}}key={product.id} onClick={() => handleClick(product)}>
                    
                    <img style={{width:"70px", height:"auto",order:"-1"}}src={product.img} alt="imagem produto" />
                    <div>
                    <p style={{margin:"0"}}>{product.name}</p>
                    <p style={{margin:"0"}}>USD {product.price}</p>
                    <div>{<FooterReviews produto={product}/>}</div>
                    </div>
                    
                  </div>
                  
                ))}
            
        </div>
        

    );
}
export default CardHorizontal;