import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addProduct } from '../services/cartProducts';

class ReactProducts extends Component {
  render() {
    const addToCart = () => {
      const { title, thumbnail, price, id } = this.props;
      const product = { title, thumbnail, price, id, quantity: 1 };
      addProduct(product);
    };
    const { title, thumbnail, price } = this.props;
    return (
      <section data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{`R$ ${price}`}</p>
        <button
          data-testid="product-add-to-cart"
          onClick={ () => addToCart() }
        >
          Adicionar ao Carrinho
        </button>
      </section>
    );
  }
}

ReactProducts.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default ReactProducts;
