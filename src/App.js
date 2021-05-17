/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import routes from './routes';

import { NavigationProvider } from './contexts/navigation';
import { CartProvider } from './contexts/cart';

import Sidebar from './components/Sidebar';

import GlobalStyles from './assets/styles/GlobalStyle';

function App() {
  return (
    <Sidebar>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route exact key={path} path={path} component={component} />
        ))}
        <Redirect to="/home" />
      </Switch>
    </Sidebar>
  );
}

export default function () {
  return (
    <Router>
      <NavigationProvider>
        <CartProvider>
          <GlobalStyles />
          <App />
        </CartProvider>
      </NavigationProvider>
    </Router>
  );
}
