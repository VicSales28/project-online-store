import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from '../pages/Search';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={ () => (
            <Search />
          ) }
        />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default Routes;
