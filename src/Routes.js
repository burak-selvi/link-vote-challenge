import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AddLink, Links, Error } from './pages';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Links} />
      <Route path="/add-link" component={AddLink} />
      <Route path="/error" component={Error} />
      <Redirect to="/error" />
    </Switch>
  )
}
