/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { NavigationProvider } from './contexts/navigation';

import routes from './routes';

import GlobalStyles from './assets/styles/GlobalStyle';

function App() {
  return (
    <Switch>
      {routes.map(({ path, component }) => (
        <Route exact key={path} path={path} component={component} />
      ))}
      <Redirect to="/home" />
    </Switch>
  );
}

export default function () {
  return (
    <Router>
      <NavigationProvider>
        <GlobalStyles />
        <App />
      </NavigationProvider>
    </Router>
  );
}
