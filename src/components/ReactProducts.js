import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReactProducts extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <section>
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{`R$ ${price}`}</p>
      </section>
    );
  }
}

ReactProducts.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default ReactProducts;
