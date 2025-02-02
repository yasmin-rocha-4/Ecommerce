import { useNavigate } from "react-router-dom";

const useGoBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navega para a página anterior
  };

  return goBack;
};

export default useGoBack;
