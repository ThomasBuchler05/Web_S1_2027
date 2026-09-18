console.log("Hello Node.js!")
// Import a module
const http = require('http')

const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'       <p>Hello World!</p>' +
'    </body>' +
'</html>'

const url = require('url')

const serverHandle = function (req, res) {
  // Retrieve and print the current path
  const path = url.parse(req.url).pathname
  console.log(path)

  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write(path)
  res.end()
}

http
.createServer(serverHandle)
.listen(8080)