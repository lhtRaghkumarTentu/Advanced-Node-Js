const url = require('url');

/**
 * parsing URL string to URL Object
 */
const urlString = 'https://www.google.com/search?q=tatto';

console.log(
  url.parse(urlString, true)
);


/**
 * Converting URL Object To String
 */
const urlObject = {
  protocol: 'https',
  host: 'www.facebook.com',
  search: '?user=raghu',
  pathname: '/search',
};

console.log(
  url.format(urlObject)
);