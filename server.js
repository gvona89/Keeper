const express = require('express')
const app = express()
const methodOverride = require('method-override')
const cors = require('cors')

app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use(express.json())
app.use(methodOverride('_method'))


app.use(express.static(__dirname + "/client/build"))


app.get('/keeperlog', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})


//Routers & Routes
const userRouter = require('./controllers/userController.js')
const logRouter = require('./controllers/logController.js')
const hivesRouter = require('./controllers/hivesController.js')

app.use('/user', userRouter)
app.use('/log', logRouter)
app.use('/hives', hivesRouter)


const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})