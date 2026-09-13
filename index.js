const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200);
    return res.end(JSON.stringify({
      name: 'PsycheAI',
      status: 'online',
      version: '0.1.0',
      message: 'PsycheAI Backend is running.'
    }));
  }

  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200);
    return res.end(JSON.stringify({
      status: 'ok'
    }));
  }

  res.writeHead(404);
  res.end(JSON.stringify({
    error: 'Not found'
  }));
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`PsycheAI server listening on port ${PORT}`);
});
