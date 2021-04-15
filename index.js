var express = require('express')

var app = express();

app.get('/', (req, res)=> {
    res.send("HI FROM JS")
})

app.listen(80, () =>{
    console.log('Server is up 80')
});