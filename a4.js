npm init
npm i express
node app.js 


const express = require('express')
const app = express()
const port = 5000
app.use(express.static("public"));
app.get('/', (req, res) => {
  res.send('Hello World!')
    res.sendFile("index.html");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
