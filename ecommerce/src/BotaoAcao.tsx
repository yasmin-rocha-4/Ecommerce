import React from "react";
interface BotaoAcaoProps{
    comando: string;
    className?: string;
}
const BotaoAcao: React.FC<BotaoAcaoProps> = props =>{
    return(<button>{props.comando}</button>);
}
   
export default BotaoAcao;