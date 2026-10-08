@'
const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Multi-Tier Web App Running Successfully on Port 3000!\n');
});
server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
'@ | Out-File -Encoding utf8 C:\Users\mafif\Desktop\app-tier-q2\index.js