import React, { useState, useEffect } from "react";
import CardProduto from "./CardProduto";
import UseProdutos from "./Produtos"; // Hook personalizado para buscar os produtos

interface CarrosselDoisProps {
  categoria?: string; // Torna a categoria opcional
}

const CarrosselDois: React.FC<CarrosselDoisProps> = ({ categoria }) => {
  const { produtos, loading, error } = UseProdutos(); // Hook para obter os produtos
  const [currentPage, setCurrentPage] = useState(0); // Estado para a página atual
  const productsPerPage = 2; // Quantidade de produtos por página

  // Se categoria for passada, filtra os produtos, caso contrário, exibe todos os produtos
  const produtosFiltrados = categoria
    ? produtos.filter(
        (produto) => produto.category.toLowerCase() === categoria.toLowerCase()
      )
    : produtos;

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
    <div>
      {produtosFiltrados.length > 0 ? (
        <CardProduto ListaProduto={produtosPagina} />
      ) : (
        <p>{categoria ? `Nenhum produto encontrado na categoria ${categoria}.` : "Nenhum produto encontrado."}</p>
      )}
    </div>
  );
};

export default CarrosselDois;
