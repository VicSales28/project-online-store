import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Search from './pages/Search';
import ShoppingCart from './pages/ShoppingCart';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/shoppingcart" component={ ShoppingCart } />
        <Route exact path="/" component={ Search } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
