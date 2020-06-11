const express = require('express')
const app = express()
const port = 3000


app.get('/',(req,res) => res.send('Hello World'))
app.get('/user/:username',function (req,res){
    // console.log(req.data);
    console.log( req.params);
    let todate = new Date();

    res.send("hello " + req.params.username + todate.toDateString());
    
})
app.get('/date',function (req,res){
    let newdate = new Date();
    let montharr =  ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let datething = {
        day: newdate.getDate(),
        month: montharr[newdate.getMonth()],
        year: newdate.getFullYear(),
    }
    

    res.send(JSON.stringify(2))

})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))