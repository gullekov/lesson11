const http = require('http')

 const server = http.createServer((req,res)=>{
    const url = req.url;

    if(url === '/about'){
        res.write("Welcome us ABOUT PAGE")
    }else if(url === '/contact'){
        res.write("Welcome to CONTACT PAGE")
    }




    res.end()
})


server.listen(2000, '127.0.0.1', ()=>{
    console.log('2000 portdaky maglumat doly yagdayda isledi')
})


