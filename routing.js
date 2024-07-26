const http = require('http')

 const server = http.createServer((req,res)=>{
    const url = req.url;

    if(url === '/about'){
        res.write("<h1>Welcom to my ABOUT PAGE DEAR USER</h1>")
    }else if(url === '/contact'){
        res.write('<h1>WELCOM to CONTACT PAGE MY borhers<h1/>')
    }




    res.end()
})


server.listen(2000, '127.0.0.1', ()=>{
    console.log('2000 portdaky maglumat doly yagdayda isledi')
})


