import { useState, useEffect } from "react";

export interface Produto {
  id: string;
  name: string;
  category: string;
  price: number;
  details: string;
  img: string;
  reviews: {
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    postedAt: string;
  }[];
}

const UseProdutos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]); // Array de produtos
  const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento
  const [error, setError] = useState<string | null>(null); // Estado de erro

  const fetchProdutos = async () => {
    try {
      const response = await fetch("https://run.mocky.io/v3/1e9e1ec6-8807-4b91-91d4-74b8a6438a11");
      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }
      const data: Produto[] = await response.json(); // Converte o JSON para o tipo Produto[]
      setProdutos(data); // Atualiza o estado
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido");
      }
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  return { produtos, loading, error };
};

export default UseProdutos;
