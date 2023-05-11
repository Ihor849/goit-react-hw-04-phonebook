import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import AppHook from 'components/App/AppHook';
import { GlobalStyle } from './style/GlobalStyle';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppHook />
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>
);
