import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from '../pages/Search';
import ShoppingCart from '../pages/ShoppingCart';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/shoppingcart"
          render={ () => (
            <ShoppingCart />
          ) }
        />
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
