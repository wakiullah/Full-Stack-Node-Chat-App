const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookies-parser')
const path = require('node:path')
const dotenv = require('dotenv')
const app = express()
dotenv.config()
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("database connected"))
    .catch(err => console.log(err))


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// set static folder
app.use(express.static(path.join(__dirname, "public")))

// cookie parser
app.user(cookieParser(process.env.COOKIES_STRING))

app.listen(process.env.PORT, (err) => {
    console.log('app is runnig on' + process.env.PORT);

})



