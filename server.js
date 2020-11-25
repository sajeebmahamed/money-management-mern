const express = require('express')
const PORT = process.env.PORT || 4000
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRouter = require('./routers/userRoute')


const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/users', userRouter)

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`)
  mongoose.connect('mongodb://localhost:27017/money-management-app-mern',
    {useNewUrlParser: true, useUnifiedTopology: true},
  () => {
    console.log('db conneted...');
  });
})