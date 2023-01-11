/**
 * The Util module provides access to some utility functions.
 */
var util = require('util');
var txt = 'Congratulate %s on his %dth birthday!';
var result = util.format(txt, 'Linus', 6);

console.log(result);

/**
 * debuglog()	Writes debug messages to the error object
 * deprecate()	Marks the specified function as deprecated
 * format()	Formats the specified string, using the specified arguments
 * inherits()	Inherits methods from one function into another
 * inspect()	Inspects the specified object and returns the object as a string
 */