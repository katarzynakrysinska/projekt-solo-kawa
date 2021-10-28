import { templates } from '../settings.js';
import { utils } from '../utils.js';

class Product {
  constructor(id, data){
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;
  }

  render(){
    const thisProduct = this;

    const generatedHTML = templates.productWidget(thisProduct.data);
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);

    return thisProduct.element;
  }
}

export default Product;