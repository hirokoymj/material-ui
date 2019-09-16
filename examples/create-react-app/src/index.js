import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import AppTest from './AppTest';
import AppTest2 from './AppTest2';
import AppTest3 from './AppTest3';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <AppTest3 />
  </ThemeProvider>,
  document.querySelector('#root'),
);
