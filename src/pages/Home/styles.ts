import styled, { css } from 'styled-components';

interface FormProps {
  erro: boolean;
}

export const Container = styled.div`
  width: 100%;

  @media (max-width: 400px) {
    padding: 10px;
  }
`;

export const Error = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.red};
  margin-top: 8px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 10px;
  max-width: 715px;
  display: flex;

  input {
    flex: 6;
    height: 60px;
    background: ${(props) => props.theme.colors.white};
    padding: 0 34px;
    border: 0;
    border-radius: 5px 0px 0px 5px;
    color: ${(props) => props.theme.colors.secondary};
    border: 2px solid white;
    border-right: 0;
    transition: filter 0.2ms;

    &:hover {
      filter: brightness(0.9);
    }

    ${(props) =>
      props.erro &&
      css`
        border-color: ${(props) => props.theme.colors.red};
      `}
  }

  button {
    flex: 2;
    height: 60px;
    color: ${(props) => props.theme.colors.white};
    border: 0;
    background: ${(props) => props.theme.colors.button};
    border-radius: 0px 5px 5px 0px;
    transition: filter 0.2ms;
    padding: 2px;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 400px) {
    max-width: 0;
    margin-top: 0px;
    input {
      padding: 0 12px;
    }

    button {
      padding: 0 12px;
    }
  }

  @media (max-width: 320px) {
    input {
      padding: 0;
    }

    button {
      padding: 0 5px;
    }
  }
`;

export const GamesList = styled.div`
  margin-top: 80px;
  max-width: 715px;
  border-radius: 10px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  padding: 8px;
  overflow: hidden;
  height: 220px;
  cursor: pointer;
  transition: filter 0.2ms;

  &:hover {
    filter: brightness(0.9);
  }

  & + div {
    margin-top: 15px;
  }

  img {
    width: 150px;
    height: 200px;
    margin-right: 10px;
    border-radius: 10px;

    object-fit: cover;
    object-position: top;
  }

  aside {
    padding: 0px 80px 10px 20px;
    overflow: hidden;
    flex: 1;

    h1 {
      display: block;
      font-weight: bold;
      margin-bottom: 20px;
    }

    p {
      margin-top: 5px;
      line-height: 25px;

      strong {
        font-weight: bold;
      }
    }
  }
  @media (max-width: 400px) {
    img {
      width: 230px;
      height: 200px;
      margin-top: 10px;

      object-fit: cover;
      object-position: center;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 50%;
    margin-top: -45px;

    aside {
      padding: 10px 8px 10px 20px;

      h1 {
      }
    }
  }
`;
