import React, { useState } from 'react';

import { Container } from './styles';
import starImg from '../../assets/hollywood-star.png';

interface StarProps {
  id: number;
  favorite?: number;
}

export const StarButton: React.FC<StarProps> = ({ id, favorite, ...rest }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function click(index: any) {
    setRating(index);
    // console.log(id, hover);
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
            onClick={() => click(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
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
