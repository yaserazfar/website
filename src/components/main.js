import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import About from './about';
import Work from './work';
import Progress from './progress';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/progress" component={Progress} />
    <Route path="/work" component={Work} />
  </Switch>
)

export default Main;