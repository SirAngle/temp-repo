const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req)
  if (req.url === '/') res.end('Welcome to our homepage!')
  if (req.url === '/about') res.end('Here is our story')
  res.end('This page does not exist!')
})

server.listen(5000)
