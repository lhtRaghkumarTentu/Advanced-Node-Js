// require("module")

// 1. try module.js
// 2. try module.json
// 3. try module.node

const config = require ("./config.json");
console.log(config);

/**
 * calling c++ Function
 */
const addOn = require('addon');
console.log(addOn.hello());