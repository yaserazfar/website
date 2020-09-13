import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import About from './about';
import Projects from './projects';
import Progress from './progress';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/progress" component={Progress} />
    <Route path="/projects" component={Projects} />
  </Switch>
)

export default Main;