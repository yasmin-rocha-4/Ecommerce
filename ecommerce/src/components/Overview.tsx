import React from "react";
import renderStars from "./estrelas";
import avatar from "../assets/Icon/Avatar.svg"; // Avatar fixo, pode ser dinâmico caso necessário
import { useLocation } from "react-router-dom";
import { Produto } from "./Produtos";
import VerTodos from "./VerTodos";
import CarrosselDois from "./CarrosselDois";

const Overview: React.FC = () => {
  const location = useLocation();
  const produto = location.state as Produto; // Obtém o produto passado pela navegação

  return (
    <div>
      {/* Imagem do produto */}
      <img src={produto.img} alt={produto.name} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
      
      {/* Exibição dos reviews */}
      <div>
        <p style={{margin:"20px"}}>Reviews ({produto.reviews.length})</p>
        {produto.reviews.map((review, index) => (
          <div key={review.userId || index} style={{ marginBottom: "20px" }}>
            {/* Imagem do usuário */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={avatar} alt="foto usuario" style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }} />
              <p style={{ fontWeight: "bold" }}>{review.userName}</p>
            </div>

            {/* Estrelas de rating */}
            <div>{renderStars(review.rating)}</div>

            {/* Comentário */}
            <p>{review.comment}</p>

          </div>
        ))}
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <p>Another Products</p>
            <VerTodos/>
        </div>
        <CarrosselDois/>
 
      </div>
    </div>
  );
};

export default Overview;
