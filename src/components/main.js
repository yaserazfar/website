import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Projects from '../pages/Projects/Projects';
import Progress from '../pages/Progress/Progress';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/progress" component={Progress} />
    <Route path="/projects" component={Projects} />
  </Switch>
);

export default Main;