import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 80%;
  background: ${(props) => props.theme.colors.white};
  padding: 10px;
  border: transparent;
  border-radius: 8px;

  svg {
    margin-bottom: 5px;
  }

  @media (max-width: 515px) {
    width: 100%;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;

  img {
    height: 280px;
    width: 300px;
    margin-right: 10px;

    border-radius: 8px;
    object-fit: cover;
    object-position: center;
  }

  div {
    margin-right: 140px;
    margin: 50px 0px;
    padding-right: 30px;

    h1 {
      margin-bottom: 15px;
      font-weight: bold;
      font-family: 'Roboto-Regular';
      font-size: 28px;
    }

    P {
      strong {
        font-weight: bold;
        line-height: 25px;
      }
    }
  }

  @media (max-width: 400px) {
    flex-direction: column;
    img {
      width: 90%;
      margin: 0 auto;
    }
  }
`;
