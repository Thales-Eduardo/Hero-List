import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Form, GamesList, Content, Error } from './styles';

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
  };
}

export const Home: React.FC = () => {
  const [data, setData] = useState<ApiProps[]>([]);
  const [input, setInput] = useState('');
  const [inputError, setInputError] = useState('');
  const history = useHistory();

  useEffect(() => {
    async function name() {
      const response = await api.get('/all.json');
      setData(response.data);
    }
    name();
  }, []);

  function handleFindHero(event: FormEvent) {
    event.preventDefault();

    if (input.trim() === '') {
      return setInputError('Herói não encontrado.');
    }

    // eslint-disable-next-line array-callback-return
    const res = data.find((itens: any) => {
      if (itens.name === input) {
        return history.push(`/profile/${itens.id}`);
      }

      return false;
    });

    if (!res) {
      return setInputError('Herói não encontrado.');
    }

    setInputError('');
  }

  return (
    <Container>
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
            <Content key={itens.id}>
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
            </Content>
          ) : (
            false
          ),
        )}
      </GamesList>
    </Container>
  );
};
