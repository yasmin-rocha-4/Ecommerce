import { Produto } from "../components/Produtos";
import estrela from "../assets/Icon/estrela.svg";
import menuVertical from "../assets/Icon/more-vertical.svg"
const contarReviews = (produto: Produto): number => {
  return produto ? produto.reviews.length : 0;
};
interface FooterReviewProps{
    produto:Produto
}

const FooterReviews:React.FC<FooterReviewProps>= ({produto}) =>{
    return(
        <div style={{display:"flex", justifyContent:"space-between"}}>
             <img style={{ width:"20px", height: "auto" }} src={estrela} alt="ícone estrela" />
            
            <div style={{display:"flex", gap:"0.5rem"}}>
                <p style={{margin:"0"}}>{contarReviews(produto)}</p>
                <p style={{margin:"0"}}>Reviews</p>
            </div>
            <img style={{ width:"20px", height: "auto" }} src={menuVertical} alt="mais opções" />
        </div>
       

    );
}
export default FooterReviews;