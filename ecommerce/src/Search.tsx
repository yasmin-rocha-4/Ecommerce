import React, {useState,useEffect} from "react";
import Navbar from "./components/Navbar";
import seta from "./assets/Icon/chevron-left.svg";
import search from "./assets/Icon/Search.svg";
import carrinho from "./assets/Icon/shopping-cart.svg";
import BarraPesquisa from "./components/BarraPesquisa";
import ProdutosPopulares from "./components/ProdutosPopulares";
import useGoBack from "./utils/useGoBack";
import {obterQuantidadeCarrinho } from "./utils/GerenciarCarrinho";
import {useNavigate } from "react-router-dom";
const Search: React.FC = ()=>{
    const navigate = useNavigate();
     const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0); // Estado para a quantidade de itens no carrinho
    const voltar = useGoBack();
    useEffect(() => {
        // Atualiza a quantidade de itens no carrinho ao carregar a página
        setQuantidadeCarrinho(obterQuantidadeCarrinho());
      }, []);
        const handleNavigate = (e: React.FormEvent) => {
          e.preventDefault(); 
          navigate("/carrinho"); 
        };
    return(
        <div style={{height:"100vh", fontFamily:"Montserrat, serif"}}>
            <Navbar voltar={voltar} opcao={seta} icone={carrinho}  titulo={search} quantidade={quantidadeCarrinho} funcao={handleNavigate}/>
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