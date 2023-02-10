import React, { Component } from 'react';

class ProductSearch extends Component {
  state = {
    valueInput: '',
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { valueInput } = this.state;
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
          >
            Buscar
          </button>
        </form>
      </div>
    );
  }
}

export default ProductSearch;
