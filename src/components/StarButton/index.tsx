import React, { useState } from 'react';

import { Container } from './styles';

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
              <img
                src="https://cdn-icons.flaticon.com/png/512/5701/premium/5701867.png?token=exp=1639240693~hmac=a4a6e60631021905ef60e6505e29b812"
                alt="star"
              />
            </span>
          </button>
        );
      })}
    </Container>
  );
};
