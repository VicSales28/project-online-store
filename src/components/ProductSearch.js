import React, { Component } from 'react';
import { getProductBySearch } from '../services/api';
import ReactProducts from './ReactProducts';

class ProductSearch extends Component {
  state = {
    valueInput: '',
    resultsSearch: [],
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  onButtonClick = async () => {
    const { valueInput } = this.state;
    const endpointProduct = await getProductBySearch(valueInput);
    this.setState({
      resultsSearch: endpointProduct.results,
    });
  };

  render() {
    const { valueInput, resultsSearch } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            data-testid="query-input"
            value={ valueInput }
            onChange={ this.onInputChange }
            name="valueInput"
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.onButtonClick }
          >
            Buscar
          </button>
          {resultsSearch.map(({ title, thumbnail, price, id }) => (
            <div key={ id }>
              <ReactProducts
                title={ title }
                thumbnail={ thumbnail }
                price={ price }
              />
            </div>
          ))}
        </form>
      </div>
    );
  }
}

export default ProductSearch;
