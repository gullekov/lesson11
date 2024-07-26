const http = require('http')

 const server = http.createServer((req,res)=>{
    const pathName 



    res.end("Hello Node its me ")
})


server.listen(2000, '127.0.0.1', ()=>{
    console.log('2000 portdaky maglumat doly yagdayda isledi')
})


