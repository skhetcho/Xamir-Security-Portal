//initiate and run the server on port 3000

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3000

//request db info
const db = require("./db");
const portalRouter = require('./routes/portal-router')
const commandRouter = require('./routes/command-router')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

//connect to the db
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('I am alive')
})

app.use('/user-api', portalRouter);
app.use('/command-api', commandRouter);

app.listen(apiPort, () => console.log(`Server is running on port ${apiPort}`))