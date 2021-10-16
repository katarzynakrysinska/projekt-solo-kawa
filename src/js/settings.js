export const select = {
  templateOf: {
    productList: '#template-products-widget',
  },

  containerOf: {
    pages: '#pages',
    home: '.home-wrapper',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  }
};
  
export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.productList).innerHTML),
    
};