/** 
 * The syntax for creating an empty Buffer of the length 15:
 */
var buf = Buffer.alloc(15);
console.log(buf);

/**
 * Convert the string "abc" into a stream of binary data:
 */
var buf = Buffer.from('abc');
console.log(buf);