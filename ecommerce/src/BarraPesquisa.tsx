import React from "react";
import iconPesquisa from "./assets/Icon/IconePesquisa.svg"
const BarraPesquisa: React.FC = ()=>{
    return(
        <div style= {styles.inputContainer}>
      <img src={iconPesquisa} alt="Menu" />
      <input
        type="text"
        placeholder="Search headphone"
        style={styles.input}
      />
    </div>
    )
   
}
const styles = {
    inputContainer: {
      display: "flex",
      justifyContent:"center",
      alignItems: "center",
      border: "1px solid #d3d3d3",
      borderRadius: "20px",
      padding: "8px 12px",
      width: "100%",
      backgroundColor: "#fff",
    },
    input: {
      border: "none",
      outline: "none",
      fontSize: "14px",
      flex: 1,
      color: "#000",
    },
  };
export default BarraPesquisa;