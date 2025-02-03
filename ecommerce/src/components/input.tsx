import React from "react";
import "./login.css"
interface InputProps {
  imgSrc: string; // URL da imagem
  imgAlt: string; // Texto alternativo para a imagem
  placeholderText: string; // Texto do placeholder
}

const Input: React.FC<InputProps> = ({
  imgSrc,
  imgAlt,
  placeholderText,
}) => {
  return(
    <div className="form-floating mb-3">
      <input className="form-control"  placeholder={placeholderText} />
      <label htmlFor="floatingInput">
      <img src={imgSrc} alt={imgAlt} />
      </label>
     
    </div>
  )
};

export default Input;
