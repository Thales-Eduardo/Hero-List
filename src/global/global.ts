import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: ${(props) => props.theme.colors.background};
    -webkit-font-smoothisng: antialiased;
  }

  body, input, button, textarea {
    font: 400 16px "Roboto", sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  #root {
    max-width: 960px;
    margin: auto;
    padding: 40px 20px;
  }

  button{
    cursor: pointer;
  }
`;
