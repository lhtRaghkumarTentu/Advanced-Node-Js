
let fs = require("fs");

// Create a readable stream
const readerStream = fs.createReadStream('../files/testInput.txt');

// Create a writable stream
let writerStream = fs.createWriteStream('../files/testOutput.txt');

// Pipe the read and write operations
// read testInput.txt and write data to testOutput.txt
readerStream.pipe(writerStream);

console.log("Program Ended");