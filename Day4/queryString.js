const querystring = require('querystring');

/**
 * converting Object to querystring
 */
console.log(
  querystring.stringify({
    name: 'Mom Dad Tatto',
    website: 'google.com/tattos'
  })
);

/**
 * parsing query string to Object
 */
console.log(
  querystring.parse('name=raghu%kumar&website=google.com%2Ftattos')
);