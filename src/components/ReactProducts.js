import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class ReactProducts extends Component {
    state = {
      clicked: false
    }

  redirectDetails = () => {
    this.setState({
      clicked: true
    })
  }

  render() {
    const { title, thumbnail, price, id } = this.props;
    const { clicked } = this.state;
    const toRedirect = `/product-details/${id}`
    return (
      <section data-testid="product">
        <div data-testid="product-detail-link" onClick={ this.redirectDetails }>
          <p>{ title }</p>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
        </div>
        { clicked && <Redirect to={ toRedirect }/> }
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

// match: { params: { id } }