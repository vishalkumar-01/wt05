const http = require('http');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const formData = qs.parse(body);
      res.writeHead(600, {'Content-Type': 'text/html'});
      console.log(`Name: ${formData.fname}\nEmail: ${formData.email} \nPhone number: ${formData.phn}  `);
      
      res.end(`Name: ${formData.fname}\nEmail: ${formData.email} \nPhone number: ${formData.phn}`);
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      not correct
    `);
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});