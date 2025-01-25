import React from "react";

interface TrocarPaginaLoginProps{
    texto:string;
    textoLink: string;
    link:string;
}

const TrocarPaginaLogin: React.FC<TrocarPaginaLoginProps> = ({texto, link, textoLink}) =>{
    return(
        <div>
            <p>{texto}</p>
            <a href={link}>{textoLink}</a>
        </div>
    )
}
export default TrocarPaginaLogin;