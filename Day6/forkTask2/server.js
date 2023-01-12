
const http = require('http');
const { fork } = require('child_process');

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/compute') {
    const compute = fork('compute.js');
    compute.send('start');
    compute.on('message', sum => {
      res.end(`Sum is ${sum}`);
    });
  } else if (req.url === '/even') {
   const even = fork('even.js');
   even.send('start');
   even.on('message', even => {
     res.end(`even Numbers  b/w 1 to 100 are ${even}`);
   });
  }else if (req.url === '/odd') {
    const odd = fork('odd.js');
    odd.send('start');
    odd.on('message', odd => {
      res.end(`Odd Numbers b/w 1 to 100 are ${odd}`);
    });
   }else if (req.url === '/prime') {
    const prime = fork('prime.js');
    prime.send('start');
    prime.on('message', prime => {
      res.end(`prime Numbers b/w 1 to 100 are ${prime}`);
    });
   }else {
    res.end('Ok')
  }
});

server.listen(3000)
console.log("Server Started on Port http://localhost:3000");
