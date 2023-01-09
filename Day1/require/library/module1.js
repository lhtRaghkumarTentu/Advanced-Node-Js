exports.id = 'module1';

exports.content = [1];
exports.content.push(11);
exports.content.push(111);

const module2 = require('./module2');
console.log(module2);
