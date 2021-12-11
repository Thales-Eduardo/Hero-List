import React, { useState } from 'react';

import { Container } from './styles';
import starImg from '../../assets/hollywood-star.png';

type StarProps = {
  favorite?: number;
};

export const StarButton: React.FC<StarProps> = ({ favorite = 0 }) => {
  const [rating, setRating] = useState(favorite);
  const [hover, setHover] = useState(0);

  function click() {
    setHover(rating);
  }

  return (
    <Container>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => click()}
          >
            <span className="star">
              <img src={starImg} alt="star" />
            </span>
          </button>
        );
      })}
    </Container>
  );
};
