import React, { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
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
}

interface ParamesProps {
  id: string;
}

export const Profile: React.FC = () => {
  const [hero, setHero] = useState({} as ProfileProps);
  const [value, setValue] = useState(false);
  const params = useParams<ParamesProps>();

  useEffect(() => {
    api.get(`/id/${params.id}.json`).then((response) => {
      setHero(response.data);
      setValue(true);
    });
  }, [params.id]);

  return (
    <Container>
      <Link to="/">
        <FiArrowLeft size={24} />
      </Link>

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
