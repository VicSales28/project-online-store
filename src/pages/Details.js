import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';

class Details extends Component {
  state = {
    title: '',
    price: '',
    imgUrl: '',
    clicked: false,
  };

  makeFetch = async (id) => {
    const API_URL = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    this.setState({
      title: data.title,
      price: data.price,
      imgUrl: data.thumbnail,
    });
  };

  redirectToCart = () => {
    this.setState({
      clicked: true,
    });
  };

  render() {
    const { match: { params: { id } } } = this.props;
    this.makeFetch(id);
    const { title, price, imgUrl, clicked } = this.state;
    return (
      <main>
        <section>
          <h1 data-testid="product-detail-name">{ title }</h1>
          <img data-testid="product-detail-image" src={ imgUrl } alt={ title } />
        </section>
        <section>
          <h2>Especificações</h2>
          <p data-testid="product-detail-price">
            R$
            { price }
          </p>
          <button
            data-testid="shopping-cart-button"
            onClick={ this.redirectToCart }
          >
            Carrinho
          </button>
        </section>
        { clicked && <Redirect to="/shoppingcart" /> }
      </main>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Details;
