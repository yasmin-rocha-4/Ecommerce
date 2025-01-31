import React from "react";
import Navbar from "./Navbar";
import seta from "./assets/Icon/chevron-left.svg";
import search from "./assets/Icon/Search.svg";
import carrinho from "./assets/Icon/shopping-cart.svg";
import BarraPesquisa from "./BarraPesquisa";
import ProdutosPopulares from "./ProdutosPopulares";
const Search: React.FC = ()=>{
    return(
        <div style={{height:"100vh", fontFamily:"Montserrat, serif"}}>
            <Navbar opcao={seta} icone={carrinho}  titulo={search}/>
            <BarraPesquisa/>
            <div
            style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                
            }}
            >
                <p style={{ textAlign: "left", margin: "16px" }}>Popular Products</p>
                <ProdutosPopulares />
            </div>
            
        </div>
        
    );
}
export default Search;