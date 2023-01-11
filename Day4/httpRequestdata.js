const http = require('http');

// req: http.ClientRequest
const req = http.request(
  {
    method: 'GET',
    hostname: 'www.google.com',
    // path:'/activities',
    // headers: {},
  },
  (res) => {
    // res: http.IncomingMessage
    console.log(res.statusCode);
    console.log(res.headers);

    res.on('data', (data) => {
      console.log(data.toString());
    });
  }
);

//error Handling
req.on('error', (e) => console.log(e));
req.end();