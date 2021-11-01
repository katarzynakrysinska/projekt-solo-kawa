import { templates, select } from '../settings.js';
import ProductsList from '../features/ProductsList.js';

class Home {
  constructor(element, data){
    const thisHome = this;

    thisHome.data = data;

    thisHome.render(element);
    thisHome.renderProducts();
  }

  render(element){
    const thisHome = this;

    const generatedHTML = templates.homeWidget();
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    thisHome.dom.productsList = thisHome.dom.wrapper.querySelector(select.home.productsList);
  }

  renderProducts() {
    const thisHome = this;
    thisHome.productsList = new ProductsList(thisHome.data.products, thisHome.dom.productsList);
  }
}

export default Home;