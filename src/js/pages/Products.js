import { select } from '../settings.js';
import ProductsList from '../features/ProductsList.js';

class Products {
  constructor(element, data){
    const thisProducts = this;

    thisProducts.data = data;
    thisProducts.render(element);
    thisProducts.renderProducts();
  }

  render(element) {
    const thisProducts = this;
    thisProducts.dom = {
      wrapper: element
    };
    thisProducts.dom.productsList = thisProducts.dom.wrapper.querySelector(select.home.productsList);
  }

  renderProducts() {
    const thisProducts = this;
  
    thisProducts.productsList = new ProductsList(thisProducts.data.products, thisProducts.dom.productsList);
  }
}

export default Products;