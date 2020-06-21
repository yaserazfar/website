import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import About from './about';
import Work from './work';
import Ideas from './ideas';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/ideas" component={Ideas} />
    <Route path="/work" component={Work} />
  </Switch>
)

export default Main;