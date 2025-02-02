import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar, faStarHalfAlt as halfStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <>
      {Array.from({ length: fullStars }).map((_, i) => (
        <FontAwesomeIcon key={`full-${i}`} icon={fullStar} className="text-yellow-500" />
      ))}
      {hasHalfStar && <FontAwesomeIcon icon={halfStar} className="text-yellow-500" />}
      {Array.from({ length: 5 - Math.ceil(rating) }).map((_, i) => (
        <FontAwesomeIcon key={`empty-${i}`} icon={emptyStar} className="text-gray-400" />
      ))}
    </>
  );
};
export default renderStars;