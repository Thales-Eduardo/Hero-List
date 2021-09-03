import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FiArrowLeft } from 'react-icons/fi';

import { api } from '../../services/api';

import { Container, GamesList, Content } from './styles';

interface ApiProps {
  id: number;
  name: string;
  images: {
    sm: string;
  };
  work: {
    occupation: string;
  };
  biography: {
    publisher: string;
    fullName: string;
  };
  favorite: boolean;
}

export const Favorite: React.FC = () => {
  const [data, setData] = useState<ApiProps[]>([]);
  const [value, setValue] = useState(false);

  useEffect(() => {
    async function findAllHero() {
      const response = await api.get('/all.json');

      const res = response.data.filter((itens: ApiProps) => {
        const id = localStorage.getItem(`@favoriteHero${itens.id}`);
        if (itens.id === Number(id)) {
          itens.favorite = true;
          return itens.id;
        }
        return false;
      });
      if (!res) {
        return undefined;
      }
      res.filter((itens: ApiProps) => {
        if (itens.favorite === false || itens.favorite === undefined) {
          return false;
        }
        if (itens.favorite === true) {
          setData(res);
          setValue(true);
        }
        return false;
      });
    }
    findAllHero();
  }, []);

  function handleFavorite(hero: ApiProps) {
    const res = data.filter((itens) => {
      localStorage.removeItem(`@favoriteHero${hero.id}`);
      if (itens.id !== hero.id) {
        return itens;
      }
      return false;
    });
    setData(res);

    if (res.length <= 0) {
      setValue(false);
    }
  }

  return (
    <Container>
      <Link to="/">
        <FiArrowLeft color="#fff" size={26} />
        Voltar
      </Link>
      {value ? (
        <GamesList>
          {data.map((itens) => (
            <Content key={itens.id} isFavorite={itens.favorite}>
              <img src={itens.images.sm} alt={itens.name} />

              <aside>
                <h1>{itens.name}</h1>
                <p>
                  <strong>Ocupação: </strong>
                  {itens.work.occupation}.
                </p>
                <p>
                  <strong>Editora: </strong> {itens.biography.publisher}.
                </p>
              </aside>

              <button type="submit" onClick={() => handleFavorite(itens)}>
                {itens.favorite ? (
                  <AiFillHeart size={26} />
                ) : (
                  <AiOutlineHeart size={26} />
                )}
              </button>
            </Content>
          ))}
        </GamesList>
      ) : (
        <h1>Você não tem nenhum herói favorito ainda 😢</h1>
      )}
    </Container>
  );
};
