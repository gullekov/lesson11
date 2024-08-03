const http = require('http');
const fs = require('fs');



const server = http.createServer((req,res)=>{
    console.log(req.url, req.method)
    
    
    res.setHeader('Content-type', 'text/html')
    let pathName = res.url;
    fs.readFile('./view/index.html', (err,data)=>{
        if(pathName === '/', ){
            console.log(err)
            res.end()
        }else{
            res.end(data)
        }
    })
    
    
    res.end();
    
})


server.listen(3000, 'localhost', ()=>{
    console.log('3000 port bilen isledildi')
})



