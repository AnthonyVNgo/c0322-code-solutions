var books = [
  {
    title: 'JavaScript for impatient programmers',
    author: 'Rauschmayer, Dr. Axel',
    returnWindow: 'Sep 7, 2020',
    subtotal: '$31.55'
  },

  {
    title: 'The Timeless Way of Building',
    author: 'Alexander, Christopher',
    returnWindow: 'Aug 19, 2020',
    subtotal: '$41.33'
  },

  {
    title: 'The Art of Sql',
    author: 'Faroult Stephane',
    returnWindow: 'Aug 4, 2020',
    subtotal: '$33.99'
  }
];

var electronics = [
  {
    product: 'Gamecube Controller Adapter',
    returnWindow: 'Aug 5, 2020',
    subtotal: '$15.98'
  },

  {
    product: 'Gamecube Controller SSB edition',
    returnWindow: 'Aug 4, 2020',
    subtotal: '$94.95'
  }
];

var products = {
  category: [books, electronics]
};

var orderHistory = [
  {
    orderNumber: 114,
    products: books[0],
    total: '$34.00',

    numberOfItems: 1,
    ordered: 'August 4, 2020',
    shipTo: 'JS Masher',
    delivered: 'Aug 8, 2020'
  },

  {
    orderNumber: 113,
    products: books[1],
    total: '$44.53',

    numberOfItems: 1,
    ordered: 'July 19, 2020',
    shipTo: 'JS Masher',
    delivered: 'July 20, 2020'
  },

  {
    orderNumber: 1141,
    products: electronics[0],
    total: '$17.22',

    numberOfItems: 1,
    ordered: 'July 4, 2002',
    shipTo: 'JS Masher',
    delivered: 'Jul 7, 2020'
  },

  {
    orderNumber: 1132,
    products: [electronics[1], books[2]],
    total: '$138.93',

    numberOfItems: 2,
    ordered: 'July 3, 2020',
    shipTo: 'JS Masher',
    delivered: 'Jul 5, 2020'
  }
];

console.log(orderHistory);
