const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const jsonParser = bodyParser.json()
 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})
function random(x,y) {
    // var arr = [];
    // for(var i = 0 ; i < 100; i++){
    //     arr.push(0);
    // }

    // for(var j = 0; j < 1000000;j++){
    //     arr[Math.floor(Math.random() * 99 + 1)] += 1
    // }

    return Math.floor(Math.random() * y + x)
};
app.post('/addInt',jsonParser, (req, res) => {
    console.log(req.body.min);
    console.log(req.body.max);

    let number = parseInt(req.body.min) + parseInt(req.body.max);
    res.send(`${number}`)
  })

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})