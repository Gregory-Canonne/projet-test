/*-----------------------------------------------------
-> Import Librairies
-----------------------------------------------------*/
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
/*-----------------------------------------------------
-> Import Store
-----------------------------------------------------*/
import store from 'src/redux/redux';
/*-----------------------------------------------------
-> Import Components presentations
-----------------------------------------------------*/
import App from 'src/containers/App';

const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootComponent, document.getElementById('root'));
