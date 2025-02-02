import React from "react";
import { useNavigate } from "react-router-dom";
const VerTodos: React.FC = () => {
    const navigate = useNavigate();
    return(
        <div>
            <button style= {styles.button} onClick={ () =>navigate("/AllProducts")}>
                See All
            </button>
        </div>
    );
}
const styles = {
    button:{
        color: "#7F7F7F",
        backgroud:"transparent",
        border: "none"
    }
}
export default VerTodos;