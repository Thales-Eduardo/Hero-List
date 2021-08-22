import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Content, Description } from './styles';

export const Profile: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <FiArrowLeft size={24} />
      </Link>

      <Content>
        <img
          src="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg"
          alt="perfil"
        />
        <div>
          <h1>Thales Eduardo Santos Melo</h1>
          <p>Gender</p>
          <p>race</p>
        </div>
      </Content>

      <Description>
        <div>
          <p>Ocupação: </p>
          <p>Ocupação: </p>
          <p>Ocupação: </p>
        </div>

        <div>
          <p>Ocupação: </p>
          <p>Ocupação: </p>
          <p>Ocupação: </p>
        </div>
      </Description>
    </Container>
  );
};
