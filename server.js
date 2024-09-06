const http = require('http');
const app = require('./app')
const port = process.env | 3000;

const server = http.createServer(app)
server.listen(port , ()=>{
  console.log("server is listen" , port)
});