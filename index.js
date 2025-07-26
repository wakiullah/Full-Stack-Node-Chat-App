const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const path = require('node:path')
const dotenv = require('dotenv')
const loginRouter = require('./router/loginRouter')
// const usersRouter = require('./router/usersRouter')
const app = express()
dotenv.config()

const { notFoundError, errorHandler } = require('./middlewares/common/ErrorHandler')

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("database connected"))
    .catch(err => console.log(err))


app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: true
}))

// set static folder
app.use(express.static(path.join(__dirname, "public")))

// cookie parser
app.use(cookieParser())

app.use('/', loginRouter)
// // app.use('/users', usersRouter)
// // app.use('/inbox', inboxRouter)

app.use(notFoundError)
app.use(errorHandler)

app.listen(process.env.PORT, (err) => {
    console.log('app is runnig on' + process.env.PORT);

})



