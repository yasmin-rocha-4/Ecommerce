import React, {useState, useEffect} from "react";
import UseProdutos from "./Produtos";
import CardProdutoUnico from "./CardProdutoUnico";

interface CarrosselUmProps {
    categoria: string;
  }
const CarrosselUm: React.FC<CarrosselUmProps> = ({categoria})=>{
    const { produtos, loading, error } = UseProdutos(); // Hook para obter os produtos
  const [currentPage, setCurrentPage] = useState(0); // Estado para a página atual
  const productsPerPage = 1; // Quantidade de produtos por página

  // Filtra os produtos por categoria
  const produtosFiltrados = produtos.filter(
    (produto) => produto.category.toLowerCase() === categoria.toLowerCase()
  );

  // Calcula os produtos a serem exibidos na página atual
  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const produtosPagina = produtosFiltrados.slice(startIndex, endIndex);

  // Avança automaticamente para a próxima página a cada 7 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prevPage) => {
        const nextPage = prevPage + 1;
        return nextPage * productsPerPage >= produtosFiltrados.length ? 0 : nextPage;
      });
    }, 7000);

    return () => clearInterval(timer); // Limpa o timer ao desmontar o componente
  }, [produtosFiltrados.length]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div className="p-4">
      {produtosFiltrados.length > 0 ? (
        <>
          <CardProdutoUnico ListaProduto={produtosPagina} />
        </>
      ) : (
        <p>Nenhum produto encontrado na categoria {categoria}.</p>
      )}
    </div>
  );
}
export default CarrosselUm;