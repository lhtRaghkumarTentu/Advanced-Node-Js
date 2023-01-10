const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
  execute(asyncFunc, ...args) {
    console.time('execute');
    asyncFunc(...args, (err, data) => {
      if (err) {
        return this.emit('error', err);
      }

      this.emit('data', data);
      console.timeEnd('execute');
    });
  }
}

const withTime = new WithTime();

withTime.on('data', (data) => {
  console.log(`Length: ${data.length}`);
});

//error Event
// withTime.on('error',console.error); 

// Handling Error
process.once('uncaughtException', (err) => {
    console.log(err);
    // do some cleanup
    // exit anyway
    process.exit(1); 
  });



// Without Error
withTime.execute(fs.readFile, __filename);

// Checking Error
withTime.execute(fs.readFile, '');
