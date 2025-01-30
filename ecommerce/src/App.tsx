import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Cadastro from "./cadastro";
import Home from "./Home";
import AllProducts from "./AllProducts";
import ProductDetail from "./ProductDetail";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login titulo="Audio" descricao="its modular and desined to last"  />} />
        <Route path="/cadastro" element={<Cadastro titulo="Audio" descricao="its modular and desined to last"/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/productDetail" element = {<ProductDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
