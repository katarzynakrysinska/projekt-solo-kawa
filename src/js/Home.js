import { templates} from './settings.js';


class Home {
  constructor(element){
    const thisProduct = this;

    thisProduct.render(element);
  }

  render(element){
    const thisHome = this;

    const generatedHTML = templates.homeWidget();
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }
}



export default Home;