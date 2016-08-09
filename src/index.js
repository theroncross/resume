import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import Skills from './components/skills';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="experience" component={Experience} />
      <Route path="education" component={Education} />
      <Route path="skills" component={Skills} />
      <Route path="projects" component={Projects} />
    </Route>
  </Router>,
  document.getElementById('root')
);
