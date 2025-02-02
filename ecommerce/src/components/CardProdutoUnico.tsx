import React from "react";
import { CardProdutoProps } from "./CardProduto";
import { useNavigate } from "react-router-dom";
import setaDireita from "../assets/Icon/arrow-right.svg"
const CardProdutoUnico: React.FC<CardProdutoProps> = ({ListaProduto}) =>{
    const produtos = ListaProduto;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/productDetail");
      };
    return(
        <div>
            {produtos.map((produto)=>(
                <div onClick={handleClick} style={{display:"grid", gridTemplateColumns:"1fr 1fr",gap: "1rem", width:"100%", background:"#ffff"}}>
                    <div style={{display: "flex", flexDirection:"column"}}>
                        <p style={{fontWeight: "700", fontSize:"2rem"}}>{produto.name}</p>
                        <div style={{display:"inline-flex", gap:"0.5rem", alignItems:"center"}}>
                        <p style={{color: "#0ACF83", fontSize:"1.3rem", margin:"0"}}>shop now</p>
                        <img style= {{width: "20px", height: "auto"}} src={setaDireita} alt="" />
                        </div>
                    </div>
                    <img style={{ width: "120px", height: "120px" }} src={produto.img} alt="imagem produto" />
                </div>
            ))}
        </div>
    );
}
export default CardProdutoUnico;