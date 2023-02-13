import React, { Component } from 'react';
import ProductCart from '../components/ProductCart';
import { readCart } from '../services/cartProducts';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = { products: readCart() };
  }

  render() {
    const { products } = this.state;
    const renderProducts = () => products.map((product) => (<ProductCart
      key={ product.id }
      title={ product.title }
      thumbnail={ product.thumbnail }
      price={ product.price }
      quantity={ product.quantity }
    />));
    return (
      <div>
        { products.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : renderProducts() }
      </div>
    );
  }
}

export default ShoppingCart;
