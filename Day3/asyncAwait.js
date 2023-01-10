///--------------------------Async Syntax-----------------///
// both functions return promise object
//asynchronus function
async function myFunction() {
    return "Hello";
}

// Same as above but normal
function myFunction() {
    return Promise.resolve("Hello");
}

function myDisplayer(some) {
  console.log(some);
}

myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);



///-------------------Await Syntax-----------------------///
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("I love You !!");}, 3000);
  });
  const result = await myPromise;
  console.log(result);
}

myDisplay();


/// Another example
const fs = require('fs');

const readFileAsArray = function(file, cb = () => {}) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, function(err, data) {
      if (err) {
        reject(err);
        return cb(err);
      }

      const lines = data.toString().trim().split('\n');
      resolve(lines);
      cb(null, lines);
    });
  });
};

// example call
readFileAsArray('./numbers')
  .then(lines => {
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(number => number % 2 === 1);
    console.log('odd numbers count:', oddNumbers.length);
  })
  .catch(console.error);

readFileAsArray('./numbers', (err, lines) => {
  if (err) throw err;

  const numbers = lines.map(Number);
  const oddNumbers = numbers.filter(number => number % 2 === 1);
  console.log('odd numbers count:', oddNumbers.length);
});

async function countOdd () {
  try {
    const lines = await readFileAsArray('./numbers');
    const numbers = lines.map(Number);
    const oddCount = numbers.filter(number => number % 2 === 1).length;
    console.log('odd numbers count:', oddCount);
  } catch(err) {
    console.error(err);
  }
}

countOdd();