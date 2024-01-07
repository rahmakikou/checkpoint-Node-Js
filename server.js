
const http = require('http')

http.createServer((req,res)=>{
    res.write ('You are a fighter')
    res.end()
}).listen(5000) 
