import React, { useState, useEffect } from "react";
import { Produto } from "./Produtos";
import seta from "./assets/Icon/chevron-left.svg"
import lixeiraPreta from "./assets/Icon/trash-2.svg";
import shoppingCart from "./assets/Icon/ShoppingCart.svg";
import {
  obterCarrinho,
  alterarQuantidade,
  removerProduto,
  limparCarrinho,
  calcularTotal,
} from "./utils/GerenciarCarrinho";
import Navbar from "./Navbar";
import BotaoAcao from "./BotaoAcao";

const Cart: React.FC = () => {
  const [carrinho, setCarrinho] = useState<{ produto: Produto; quantidade: number }[]>([]);

  useEffect(() => {
    setCarrinho(obterCarrinho());
  }, []);
  const handleClick = (e: React.FormEvent) => {
      e.preventDefault();
    limparCarrinho();
    setCarrinho(obterCarrinho());
  }

  return (
    <div>
        <Navbar opcao={seta}titulo={shoppingCart} icone={lixeiraPreta} funcao={handleClick}/>
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <div>
            {carrinho.map((item) => (
                <div  key={item.produto.id}>
                    <div style={{display:"grid", gridTemplateColumns:"1fr 2fr", width:"100%", margin:"10px 10px 10px 30px "}}>
                    
                    <img style={{width:"70px", height:"auto",order:"-1"}}src={item.produto.img} alt="imagem produto" />
                    <div>
                    <p style={{margin:"0"}}>{item.produto.name}</p>
                    <p style={{margin:"0"}}>USD {item.produto.price}</p>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div>
                        <button style={styles.btao}
                  onClick={() => {
                    alterarQuantidade(item.produto.id, 1);
                    setCarrinho(obterCarrinho());
                  }}
                >
                  +
                </button>
                {item.quantidade}
                <button style={styles.btao}
                  onClick={() => {
                    alterarQuantidade(item.produto.id, -1);
                    setCarrinho(obterCarrinho());
                  }}
                >
                  -
                </button>

                        </div>
                   
                <img src={lixeiraPreta} alt="excluir produto"
                  onClick={() => {
                    removerProduto(item.produto.id);
                    setCarrinho(obterCarrinho());
                  }}
                />
                    </div>
                    </div>
                    
                  </div>

                </div>
                
            ))}
            <div style={{position:"absolute", bottom:"10px", width:"100%"}}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                <p >Total {carrinho.length} items</p>
                    <p>${calcularTotal().toFixed(2)}</p>
                </div>
            
            <BotaoAcao comando="Proceed to checkout"/>

            </div>
          
        </div>
      )}
    </div>
  );
};
const styles = {
    btao: {
        margin:"10px",
        backgroundColor:"FFFF",
        borderRadius:"8px",
        borderColor:"#7F7F7F"
    }
}
export default Cart;
