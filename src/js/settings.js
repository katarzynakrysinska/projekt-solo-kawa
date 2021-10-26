export const select = {
  templateOf: {
    productList: '#template-products-widget',
    bookingWidget: '#template-booking-widget',
  },

  containerOf: {
    pages: '#pages',
    home: '.home-wrapper',
    
    booking: '.booking-wrapper',
  },
  widgets: {
    datePicker: {
        wrapper: '.date-picker',
        input: `input[name="date"]`,
    },
    hourPicker: {
        wrapper: '.hour-picker',
        input: 'input[type="range"]',
        output: '.output',
    },
},
booking: {
    peopleAmount: '.people-amount',
    hoursAmount: '.hours-amount',
    tables: '.floor-plan .table',
},

  nav: {
    links: '.main-nav a',
  },
};


export const article = {
  about: '#article-about',
  product: '#article-product',
  contact: '#article-contact',
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
  booking: {
    loading: 'loading',
    tableBooked: 'booked',
},
};

export const settings = {
  hours: {
    open: 12,
    close: 24,
},
datePicker: {
    maxDaysInFuture: 14,
},
booking: {
    tableIdAttribute: 'data-table',
},
db: {
    url: '//localhost:3131',
    product: 'product',
    order: 'order',
    booking: 'booking',
    event: 'event',
    dateStartParamKey: 'date_gte',
    dateEndParamKey: 'date_lte',
    notRepeatParam: 'repeat=false',
    repeatParam: 'repeat_ne=false',
},
};

  
export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.productList).innerHTML),
  bookingWidget: Handlebars.compile(document.querySelector(select.templateOf.bookingWidget).innerHTML),
};