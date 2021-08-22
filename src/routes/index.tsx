import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';

export const Router: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/profile/:id" component={Profile} />
  </Switch>
);
