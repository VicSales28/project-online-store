import React, { Component } from 'react';
// import ProductCart from '../components/ProductCart';
import { readCart } from '../services/cartProducts';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: readCart(),
      quantity: 1,
    };
  }

  toIncreaseItem = () => {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity + 1,
    });
  };

  toDecreaseItem = () => {
    const { quantity } = this.state;
    if (quantity > 0) {
      this.setState({ quantity: quantity - 1 });
    } else {
      this.setState({ quantity: 0 });
    }
  };

  toRemove = () => {

  };

  render() {
    const { products, quantity } = this.state;

    return (
      <div>
        { products.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (
          products.map((product, index) => (
            <div data-testid="product" key={ index }>
              <p data-testid="shopping-cart-product-name">{ product.title }</p>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{`R$ ${product.price}`}</p>
              <p data-testid="shopping-cart-product-quantity">{ quantity }</p>

              <button
                type="button"
                data-testid="product-increase-quantity"
                name="increase"
                onClick={ this.toIncreaseItem }
              >
                +
              </button>

              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ this.toDecreaseItem }
              >
                -
              </button>

              <button
                type="button"
                data-testid="remove-product"
                onClick={ this.toRemove() }
              >
                Remover
              </button>
            </div>
          ))
        ) }
      </div>
    );
  }
}

export default ShoppingCart;
