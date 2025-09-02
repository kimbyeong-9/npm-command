// import http from 'http';

// const port = 3000;

// const server = http.createServer((req, res)=> {
//   res.statusCode = 200
//   res.setHeader ('Content-Type', 'text/html')
//   res.end('<h1>Hello World!</h1>')
// })

// server.listen(port, () => {
//   console.log(`Server running at port ${port}`);
// })

const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
  if(req.method === 'POST' && req.url === '/home') {
    req.on('data', (data) => {
      console.log(data);
      const stringfiedData = data.toString();
      console.log(stringfiedData);
      Object.assign(targetObject, JSON.parse(stringfiedData))
    })
  }else{
    if (req.url ==='/home') {
      res.writeHead (200,{
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify({ a: "a", b: "b", c: "c"}));
    } else if( req.url === '/about') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<body>');
      res.write('<h1>About Page</h1>');
      res.write('</body>');
      res.write('</html>');
      res.end();
    } else {
      res.statusCode = 404;
      res.end();
    }
  }
})
  


server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
