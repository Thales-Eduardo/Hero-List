import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { api } from '../../services/api';

import { Container, Form, GamesList, Content, Error } from './styles';
import { StarButton } from '../../components/StarButton';

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

export const Home: React.FC = () => {
  const [data, setData] = useState<ApiProps[]>([]);
  const [input, setInput] = useState('');
  const [inputError, setInputError] = useState('');
  const history = useHistory();

  useEffect(() => {
    async function findAllHero() {
      const response = await api.get('/all.json');
      setData(response.data);
    }
    findAllHero();
  }, []);

  function handleFindHero(event: FormEvent) {
    event.preventDefault();

    if (input.trim() === '') {
      return setInputError('Herói não encontrado.');
    }

    const response = data.find((itens: ApiProps) => {
      const value = input.toLowerCase().replace(/(?:^|\s)\S/g, (string) => {
        return string.toUpperCase();
      });

      if (
        itens.name === value.trim() ||
        itens.biography.fullName === value.trim()
      ) {
        return history.push(`/profile/${itens.id}`);
      }

      return false;
    });

    if (!response) {
      return setInputError('Herói não encontrado.');
    }

    setInputError('');
  }

  useEffect(() => {
    const res = data.filter((itens: ApiProps) => {
      const id = localStorage.getItem(`@favoriteHero${itens.id}`);
      if (itens.id === Number(id)) {
        return itens.id;
      }
      return false;
    });

    if (!res) {
      return undefined;
    }

    res.filter((itens: ApiProps) => {
      if (itens.favorite === false || itens.favorite === undefined) {
        itens.favorite = true;
        const id = itens.id - 1;
        data.splice(id, 1, itens);
        setData((props) => [...props]);
      } else {
        return false;
      }
      return false;
    });
  }, [data]);

  function handleFavorite(hero: ApiProps) {
    data.filter((itens: ApiProps) => {
      if (itens.id === hero.id && itens.favorite === undefined) {
        itens.favorite = true;
        localStorage.setItem(
          `@favoriteHero${itens.id}`,
          JSON.stringify(itens.id),
        );
        return setData((props) => [...props]);
      } else if (itens.id === hero.id && itens.favorite === false) {
        itens.favorite = true;
        localStorage.setItem(
          `@favoriteHero${itens.id}`,
          JSON.stringify(itens.id),
        );
        return setData((props) => [...props]);
      } else if (itens.id === hero.id && itens.favorite === true) {
        itens.favorite = false;
        localStorage.removeItem(`@favoriteHero${itens.id}`);
        return setData((props) => [...props]);
      } else {
        return false;
      }
    });
  }

  return (
    <Container>
      <Link to="/favorite">
        Favoritos
        <AiFillHeart color="red" size={18} />
      </Link>
      {inputError && <Error>{inputError}</Error>}
      <Form erro={!!inputError} onSubmit={handleFindHero}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Digite o nome do herói."
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <GamesList>
        {data.map((itens) =>
          itens.id <= 10 ? (
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

              <article>
                <button type="button" onClick={() => handleFavorite(itens)}>
                  {itens.favorite ? (
                    <AiFillHeart size={26} />
                  ) : (
                    <AiOutlineHeart size={26} />
                  )}
                </button>

                <section>
                  <StarButton id={itens.id} />
                </section>
              </article>
            </Content>
          ) : (
            false
          ),
        )}
      </GamesList>
    </Container>
  );
};
