require('./globalObject');
/**
 * Accessing Global Variable
 */
console.log(helloWorld)

/**
 * accessing Env Variables Globally instead of process.env.variableName
 */
const config = require('./env');
console.log(config.port);