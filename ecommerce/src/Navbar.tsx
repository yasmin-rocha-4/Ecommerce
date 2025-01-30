import React from "react";
import menuIcon from "./assets/Icon/menu-variant.svg";
import logoIcon from "./assets/Icon/Logo.svg";
import avatarIcon from "./assets/Icon/Avatar.svg";
const Navbar: React.FC = () =>{
    return(
        <div style={styles.navegacao}>
      <img src={menuIcon} alt="Menu" />
      <img src={logoIcon} alt="Logo" />
      <img src={avatarIcon} alt="Avatar" />
    </div>
    );
}
const styles = {
  navegacao: {
    width: "100%",
    display:"flex",
    justifyContent: "space-between",
    margin: "20px"
  }

}
export default Navbar;