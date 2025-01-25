import React, { useState } from "react";
import "./Input.css";

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
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`input-container ${isFocused ? "focused" : ""}`}>
      {!isFocused && (
        <div className="custom-placeholder">
          <img src={imgSrc} alt={imgAlt} className="placeholder-icon" />
          <span className="placeholder-text">{placeholderText}</span>
        </div>
      )}
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value === "")}
      />
    </div>
  );
};

export default Input;
