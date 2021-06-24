import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import './styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import theme from './components/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <Router>
        <App />
      </Router>
    </CssBaseline>
  </ThemeProvider>,
  document.querySelector('#root')
);
