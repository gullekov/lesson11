const http = require('http');
const fs = require('fs');
const url = require('url')


const server = http.createServer((req, res)=>{
    const pathName = req.url;
    fs.readFile(, 'utf-8', (err, data)=>{
        if(err){
            res.write('Hello world');
            res.end();
        }else{
            res.write(data)
            res.end()
        }
    })
})

server.listen(8000, 'localhost', ()=>{
    console.log('8000 start')
})


