const express = require('express')
const app = express()

const routesReport = require('rowdy-logger').begin(app)

app.use(require('morgan')('tiny'))
app.use(require('cors')())
app.use(express.json())

const models = require('./models')

//routes
const userRoute = require('./routes/userRoute')
app.use('/user', userRoute)

const plantRoute = require('/routes/plantRoute')
app.use('/plant', plantRoute)

const orderRoute = requre('./routes/orderRoute')
app.use('/order', orderRoute)

app.listen(3001, () => {
    routesReport.print()
  })