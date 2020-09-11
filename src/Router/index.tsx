import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import cuid from 'cuid';

// Local Dependencies
import { Nav } from 'src/components/Nav';
import { routes } from './routes';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {routes.map((route) => {
            return (
              <Route key={cuid()} exact path={route.path}>
                {route.component}
              </Route>
            );
          })}
        </Switch>
      </div>
    </Router>
  );
};
