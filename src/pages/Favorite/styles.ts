import styled, { css } from 'styled-components';

interface ContentProps {
  isFavorite: boolean;
}

export const Container = styled.div`
  width: 100%;
  > h1 {
    color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    display: flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    transition: filter 0.2ms;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 400px) {
    padding: 10px;
  }
`;

export const GamesList = styled.div`
  margin-top: 80px;
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

  button {
    margin-bottom: 160px;
    color: ${(props) => props.theme.colors.button};
    background: transparent;
    border: 0;
    ${(props) =>
      props.isFavorite &&
      css`
        color: red;
      `}
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
    button {
      margin-bottom: 0px;
    }
  }
`;
