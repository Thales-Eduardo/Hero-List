import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  background: ${(props) => props.theme.colors.white};
  padding: 10px;
  border: transparent;
  border-radius: 8px;

  svg {
    margin-bottom: 5px;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    height: 280px;
    width: 300px;
    object-fit: cover;
    object-position: top;
  }

  div {
    margin-right: 140px;
    margin-top: 25px;

    h1 {
    }
    h2 {
    }
    P {
    }
  }
`;

export const Description = styled.aside`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div {
    p {
    }
  }

  & + div {
    p {
    }
  }
`;
