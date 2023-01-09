// Just resolve, don't load
// require.resolve('module');

// Resolve a module.js on the same level as index.js
// const findMe = require('./module');

// Resolve amodule.js on the parent level
// const findMe = require('../module');

// Resolve a module.js on the root level
// const findMe = require('/module');

// Circular module
const module1 = require('./library/module1');
console.log(module1);