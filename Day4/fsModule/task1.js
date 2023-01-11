/**
 * Script to fix files in a directory.
 * Each file has its data duplicated.
 * Truncate each file in half
 */

const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

// Reading Files from files directory
const files = fs.readdirSync(dirname);


files.forEach(file => {
  const filePath = path.join(dirname, file);
  fs.stat(filePath, (err, stats) => {
    if (err) throw err;

    fs.truncate(filePath, stats.size/2, (err) => {
      if (err) throw err;
    });
  });
});

/// If You Want to try Just Run This Script & Check Code in the files.