import Product from './Product.js';

class ProductsList {
  constructor(products, element) {
    const thisProductsList = this;
    thisProductsList.render(products, element);
  }

  render(products, element) {
    for(const product of products) {
      const prodInstance = new Product(product.id, product);
      element.appendChild(prodInstance.render());
    }
  }
}

export default ProductsList;