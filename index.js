require('dotenv').config()
const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) =>{
    res.send('<h1>Home page</h1>')
})

app.get('/about', (req, res) =>{
    res.send('This is about page')  

})

app.listen(process.env.PORTS, () => {
  console.log(`Example app listening on port ${port}`)
})
