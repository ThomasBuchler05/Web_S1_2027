import handles.js

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
const qs = require('querystring')



http
.createServer(handles.serverHandle)
.listen(8080)