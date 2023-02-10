import React from 'react';
import { getCategories } from '../services/api';
import CartBtn from '../components/CartBtn';

class Search extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const data = await getCategories();
    // console.log(data);

    this.setState({
      categories: data,
    });
  };

  render() {
    const { categories } = this.state;

    return (
      <div>

        <section data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </section>

        <section>
          {
            categories.map((category) => (
              <button
                key={ category.id }
                data-testid="category"
                type="button"
              >
                { category.name }
              </button>
            ))
          }
        </section>

        <CartBtn />

      </div>
    );
  }
}

export default Search;
