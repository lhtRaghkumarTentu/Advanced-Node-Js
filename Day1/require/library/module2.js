exports.id = 'module2';

exports.content = [2];
exports.content.push(22);
exports.content.push(222);

const module1 = require('./module1');
console.log('module1 is not loaded yet', module1);