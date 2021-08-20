import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Router } from './routes';

import GlobalStyle from './global/global';
import theme from './global/theme';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
