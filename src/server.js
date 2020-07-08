const express = require('express')
const ejs = require('ejs')
const path = require('path')

const app = express()
const port = 3000
var count = 0

const receiver = (req, res) => {
  count++
  res.send({ count: count })
}

const index = (req, res) => {
  res.render('index', {count: count})
}

const counter = (req, res) => {
  res.send({ count: count })
}

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/api/counter', counter)

app.get('/', index)
app.post('/', receiver)

app.listen(port, () =>
  console.log(`listening at http://localhost:${port}`)
)
