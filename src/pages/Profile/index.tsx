import React, { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Content } from './styles';

interface ProfileProps {
  id: number;
  name: string;
  images: {
    sm: string;
  };
  appearance: {
    gender: string;
    race: string;
  };
  biography: {
    fullName: string;
  };
  favorite: boolean;
}

interface ParamesProps {
  id: string;
}

export const Profile: React.FC = () => {
  const [hero, setHero] = useState({} as ProfileProps);
  const [value, setValue] = useState(false);
  const params = useParams<ParamesProps>();

  useEffect(() => {
    api.get<ProfileProps>(`/id/${params.id}.json`).then((response) => {
      setHero(response.data);
      setValue(true);

      const id = localStorage.getItem(`@favoriteHero${params.id}`);

      if (params.id === id) {
        if (
          response.data.favorite === false ||
          response.data.favorite === undefined
        ) {
          response.data.favorite = true;
          setHero((props) => ({ ...props }));
        } else {
          return false;
        }
      }
    });
  }, [params.id]);

  function handleFavorite(heroId: number) {
    const id = localStorage.getItem(`@favoriteHero${params.id}`);

    if (hero.favorite === false || hero.favorite === undefined) {
      hero.favorite = true;
      localStorage.setItem(`@favoriteHero${params.id}`, params.id);
      return setHero((props) => ({ ...props }));
    }

    if (heroId === Number(id)) {
      hero.favorite = false;
      localStorage.removeItem(`@favoriteHero${params.id}`);
      return setHero((props) => ({ ...props }));
    }
  }

  return (
    <Container isFavorite={hero.favorite}>
      <div>
        <Link to="/">
          <FiArrowLeft size={24} />
        </Link>
        <button type="button" onClick={() => handleFavorite(hero.id)}>
          {hero.favorite ? (
            <AiFillHeart size={26} />
          ) : (
            <AiOutlineHeart size={26} />
          )}
        </button>
      </div>

      {value ? (
        <Content>
          <img src={hero.images.sm} alt={hero.name} />

          <div>
            <h1>{hero.biography.fullName}</h1>
            <p>
              <strong>Nike: </strong>
              {hero.name}.
            </p>
            <p>
              <strong>Gender: </strong>
              {hero.appearance.gender}.
            </p>
            <p>
              <strong>Race: </strong>
              {hero.appearance.race}.
            </p>
          </div>
        </Content>
      ) : (
        <h1>Carregando...</h1>
      )}
    </Container>
  );
};
