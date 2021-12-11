import styled, { css } from 'styled-components';

interface FormProps {
  erro: boolean;
}

interface ContentProps {
  isFavorite: boolean;
}

export const Container = styled.div`
  width: 100%;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    transition: filter 0.2ms;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 400px) {
    padding: 10px;

    a {
      margin-bottom: 10px;
    }
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
  margin-top: 60px;
  max-width: 715px;
  border-radius: 10px;
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  padding: 8px;
  overflow: hidden;
  height: 220px;

  & + div {
    margin-top: 15px;
  }

  > img {
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

  article {
    button {
      align-self: flex-end;
      color: ${(props) => props.theme.colors.button};
      background: transparent;
      border: 0;
      ${(props) =>
        props.isFavorite &&
        css`
          color: red;
        `}
    }

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 400px) {
    img {
      margin-top: -8px;
      width: 230px;
      height: 200px;

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
    article {
      button {
        align-self: center;
        margin-bottom: 10px;
      }
    }
  }
`;
