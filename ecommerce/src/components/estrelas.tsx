import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar, faStarHalfAlt as halfStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <>
      {/* Exibir estrelas cheias (amarelas) */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <FontAwesomeIcon key={`full-${i}`} icon={fullStar} style={{ color: "#FFC120" }} />
      ))}

      {/* Exibir meia estrela */}
      {hasHalfStar && <FontAwesomeIcon icon={halfStar} style={{ color: "#FFC120" }} />}

      {/* Exibir estrelas vazias */}
      {Array.from({ length: 5 - Math.ceil(rating) }).map((_, i) => (
        <FontAwesomeIcon key={`empty-${i}`} icon={emptyStar} style={{ color: "#F59E0B" }} />
      ))}
    </>
  );
};

export default renderStars;
