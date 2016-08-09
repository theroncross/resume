import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Bio from './components/bio';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import Skills from './components/skills';
import './index.css';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Bio} />
        <Route path="experience" component={Experience} />
        <Route path="education" component={Education} />
        <Route path="skills" component={Skills} />
        <Route path="projects" component={Projects} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
