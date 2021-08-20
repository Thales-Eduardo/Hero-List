import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form`
  margin-top: 10px;
  max-width: 715px;
  display: flex;

  input {
    flex: 1;
    height: 60px;
    background: ${(props) => props.theme.colors.white};
    padding: 0 34px;
    border: 0;
    border-radius: 5px 0px 0px 5px;
    color: ${(props) => props.theme.colors.secondary};
    border: 2px solid white;
    border-right: 0;
  }

  button {
    width: 210px;
    height: 60px;
    color: ${(props) => props.theme.colors.white};
    border: 0;
    background: ${(props) => props.theme.colors.button};
    border-radius: 0px 5px 5px 0px;
    transition: filter 0.2ms;

    &:hover {
      filter: brightness(0.9);
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

  & + div {
    margin-top: 15px;
  }

  img {
    width: 150px;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
    object-position: top;
    margin-right: 10px;
  }

  aside {
    padding: 0px 80px 10px 20px;
    overflow: hidden;
    flex: 1;

    h1 {
      display: block;
      font-weight: bold;
    }
    p {
      margin: 20px 0px;
    }
  }
`;

export const Star = styled.button`
  border: 0;
  background: none;
  height: 40px;
  width: 40px;

  margin-bottom: 150px;
`;
