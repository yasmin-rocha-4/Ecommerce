import React from "react";
import { RecebeProduto } from "./interfaceProduto";

const ContarReviews: React.FC<RecebeProduto> = ({produto})=>{
    return produto.reviews.length;
}
export default ContarReviews