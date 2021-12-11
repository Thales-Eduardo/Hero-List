import styled from 'styled-components';

export const Container = styled.div`
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    max-width: 30px;
    max-height: 30px;
    margin-left: 5px;

    span {
      img {
        border-radius: 50%;
        max-width: 30px;
        max-height: 30px;
      }
    }
  }

  .on {
    background-color: yellow;
  }
  .off {
    background-color: #fff;
  }

  body {
    padding: 100px;
  }
`;
