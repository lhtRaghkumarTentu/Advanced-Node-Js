const fs = require('fs');

function fileSize (fileName, cb) {
  if (typeof fileName !== 'string') {
    ///-----------asynchronus the lower lines  can  implemented error shows later
    return process.nextTick(
      cb,
      new TypeError('argument should be string') 
    );
     ///-----Synchronus the lower line not implemented when this shows error
    // return cb(new TypeError('argument must be string'))
  }

  fs.stat(fileName, (err, stats) => {
    if (err) {
      return cb(err);
    }

    cb(null, stats.size);
  });
}

fileSize(1, (err, size) => {
  if (err) throw err;

  console.log(`Size in KB: ${size/1024}`);
});


console.log('Hello!');
console.log('Hello!');
console.log('Hello!');
console.log('Hello!');