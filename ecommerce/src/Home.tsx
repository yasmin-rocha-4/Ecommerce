import React, {useState}from "react";
import Navbar from "./Navbar";
import BarraPesquisa from "./BarraPesquisa";
import BotoesCategoria from "./BotoesCategoria";
import CarrosselDois from "./CarrosselDois";
import CarrosselUm from "./CarrosselUm";
import VerTodos from "./VerTodos";
import menuIcon from "./assets/Icon/menu-variant.svg";
import logoIcon from "./assets/Icon/Logo.svg";
import avatarIcon from "./assets/Icon/Avatar.svg";
const Home: React.FC = () =>{
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Headphones");
    return(
        <div style={styles.paiHome}>
            <Navbar opcao={menuIcon} titulo={logoIcon} icone={avatarIcon}/>
            <p>Hi, Andrea</p>
            <p style={styles.boasVindas}>What are you looking for today</p>
            <BarraPesquisa/>
            <div style={{background:"#F6F6F6"}}>
                <BotoesCategoria onCategoriaChange={setCategoriaSelecionada} />
                <CarrosselUm categoria={categoriaSelecionada}/>
                <div style={{display: "flex", gap: "0.5rem", marginTop:"20px", justifyContent:"space-between"}}>
                <p>Featured Products</p>
                <VerTodos/>
                </div>
                <CarrosselDois categoria={categoriaSelecionada} />
            </div>
            
        </div>
    );
    
}
const styles = {
    paiHome: {
        margin: "20px",
        fontFamily: "Montserrat, serif"
    },
    boasVindas:{
        fontSize:"2rem",
        fontWeight:"bold",
    },
    categorias: {
        diplay: "flex"
    }
}
export default Home;