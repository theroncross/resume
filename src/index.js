import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import data from './data.json';
import App from './components/App';
import Landing from './components/Landing';
import Experience from './components/experience';
import Education from './components/education';
import Projects from './components/projects';
import Skills from './components/skills';
import resume from './reducers';

require('./stylesheets/main.scss');

let store = createStore(resume, data, window.devToolsExtension && window.devToolsExtension());

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="experience" component={Experience} />
        <Route path="education" component={Education} />
        <Route path="skills" component={Skills} />
        <Route path="projects" component={Projects} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
