import { useState } from 'react';
import { FaStar, FaHeart, FaEye } from 'react-icons/fa';
import '../Css/Rating.css';

const Rating = ({ rating, isFavorite, visitorCount }) => {
  const [hover, setHover] = useState(null);

  const handleHover = (ratingValue) => {
    setHover(ratingValue);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  return (
    <div className="rating-container">
      <div className="rating-stars">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              {/* <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => console.log(`You rated ${ratingValue} stars!`)}
              /> */}
              <FaStar
                className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => handleHover(ratingValue)}
                onMouseLeave={handleMouseLeave}
              />
            </label>
          );
        })}
      </div>
      <div className="rating-icons">
        <FaHeart className={`heart ${isFavorite ? 'favorite' : ''}`} />
        <FaEye className="eye" />
        <span className="visitor-count">{visitorCount}</span>
      </div>
    </div>
  );
};

export default Rating;
