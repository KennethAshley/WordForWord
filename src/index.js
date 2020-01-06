import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import GlobalStyles from './index.styled';
import App from './App';
import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Cormorant Garamond', 'Playfair Display', 'Raleway']
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
