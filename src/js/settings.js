export const select = {
  templateOf: {
    productList: '#template-products-widget',
    contactWidget: '#template-contact-widget',
  },

  containerOf: {
    pages: '#pages',
    home: '.home-wrapper',
    contact: '.contact-wrapper',
    
  },

  nav: {
    links: '.main-nav a',
  },
};


export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
    contact: 'contact',
  }
};

  
export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.productList).innerHTML),
  contactWidget: Handlebars.compile(document.querySelector(select.templateOf.contactWidget).innerHTML),
};