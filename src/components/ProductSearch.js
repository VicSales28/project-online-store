import React, { Component } from 'react';

class ProductSearch extends Component {
  render() {
    return (
      <div>
        <form>
            <input
              type="text"
              data-testid="query-input"
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