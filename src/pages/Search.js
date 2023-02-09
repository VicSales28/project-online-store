import React from 'react';
import CartBtn from '../components/CartBtn';

class Search extends React.Component {
  render() {
    return (
      <div>
        <section data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </section>
        <CartBtn />
      </div>
    );
  }
}

export default Search;
