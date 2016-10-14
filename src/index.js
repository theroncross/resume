import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import data from './data.json';
import App from './components/app';
import resume from './reducers';

require('../node_modules/purecss/build/base-min.css');
require('../node_modules/purecss/build/grids-responsive-min.css');
require('./stylesheets/main.scss');

const store = createStore(resume, data, window.devToolsExtension && window.devToolsExtension());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
