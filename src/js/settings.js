export const select = {
  templateOf: {
    productWidget: '#template-product-widget',
    contactWidget: '#template-contact-widget',
    homeWidget: '#template-home-widget',
  },

  containerOf: {
    pages: '#pages',
    products: '.products-wrapper',
    contact: '.contact-wrapper',
    home: '.home-wrapper',
  },

  nav: {
    links: '.main-nav a',
  },

  home: {
    productsList: '.products-list'
  },

  products: {
    productsList: '.products-list'
  }
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
    home: 'home',
  }
};

export const templates = {
  productWidget: Handlebars.compile(document.querySelector(select.templateOf.productWidget).innerHTML),
  contactWidget: Handlebars.compile(document.querySelector(select.templateOf.contactWidget).innerHTML),
  homeWidget: Handlebars.compile(document.querySelector(select.templateOf.homeWidget).innerHTML),
};