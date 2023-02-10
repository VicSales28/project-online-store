import React from 'react';
import { getCategories, getProductByCategory } from '../services/api';
import CartBtn from '../components/CartBtn';
import ProductSearch from '../components/ProductSearch';
import ReactProducts from '../components/ReactProducts';

class Search extends React.Component {
  state = {
    categories: [],
    productsCategory: [],
    notResults: undefined,
  };

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const data = await getCategories();

    this.setState({
      categories: data,
    });
  };

  resultsProduct = () => {
    const { resultsSearch } = this.state;
    if (resultsSearch.length !== 0) {
      this.setState({
        notResults: false,
      });
    } else {
      this.setState({
        notResults: true,
      });
    }
  };

  onClickButton = async (id) => {
    const productsCategoryId = await getProductByCategory(id);
    this.setState({
      productsCategory: productsCategoryId.results,
    });
    this.resultsProduct();
  };

  render() {
    const { categories, productsCategory, notResults } = this.state;

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
                onClick={ () => this.onClickButton(category.id) }
              >
                { category.name }
              </button>
            ))
          }
        </section>

        {notResults ? (
          <section>
            {productsCategory.map(({ title, thumbnail, price, id }) => (
              <div key={ id }>
                <ReactProducts
                  title={ title }
                  thumbnail={ thumbnail }
                  price={ price }
                />
              </div>
            ))}
          </section>) : (<p>Nenhum produto foi encontrado</p>)}

        <CartBtn />

        <ProductSearch />

      </div>
    );
  }
}

export default Search;
