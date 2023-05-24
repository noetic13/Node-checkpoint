const http = require('http');
const fs = require('fs')

const server= http.createServer((request,response)=>{
response.statusCode=200;
response.setHeader('Content-Type','text/html');
fs.readFile('index.html','utf8' , (err,data)=>{
    if(err){
        response.statusCode=500;
        response.end('Error loading the file')
        return;
    }
    response.end(data);
})
})
const port=3000
server.listen(port, ()=> {
    console.log(`Server listening on port ${port}`)
})

