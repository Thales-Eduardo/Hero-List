import React, { useState, useEffect } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { api } from '../../services/api';

import { Container, Form, GamesList, Content, Star } from './styles';

interface ApiProps {
  id: number;
  name: string;
  images: {
    sm: string;
  };
  work: {
    occupation: string;
  };
}

export const Home: React.FC = () => {
  const [data, setData] = useState<ApiProps>({} as ApiProps);
  const [value, setvalue] = useState(false);

  useEffect(() => {
    async function name() {
      const response = await api.get('/all.json');
      // response.data.map((itens: any) => console.log(itens));
    }
    name();
  }, []);

  return (
    <Container>
      <Form>
        <input type="text" placeholder="Digite o nome do jogo." />
        <button type="submit">Pesquisar</button>
      </Form>
      {value ?? (
        <GamesList>
          <Content>
            <img src={data.images.sm} alt={data.name} />

            <aside>
              <h1>{data.name}</h1>
              <p>{data.work.occupation}</p>
            </aside>

            <Star type="button">
              {true ? (
                <AiFillHeart size={24} color="red" />
              ) : (
                <AiOutlineHeart size={24} />
              )}
            </Star>
          </Content>
        </GamesList>
      )}
    </Container>
  );
};
