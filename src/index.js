import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import ReactGA from 'react-ga';
import GlobalStyles from './index.styled';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactGA.initialize('UA-155498783-1');

WebFont.load({
  google: {
    families: [
      'Cormorant Garamond',
      'Playfair Display',
      'Raleway'
    ]
  }
});

ReactDOM.render(
  <>
    <App />
    <GlobalStyles />
  </>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
