const express = require('express')
const bodyParser = require('body-parser')

const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:8081"
};

const app = express()
const port = 5000

app.use(cors(corsOptions));
app.use(bodyParser.json());


// Static Files
app.use(express.static('./public'))

// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false })); // Deprecated
app.use(express.urlencoded({extended: true})); // New

const loginAs = require('./src/routes/loginAs')
const studentLogin= require('./src/routes/studentLogin')
const teacherLogin= require('./src/routes/teacherLogin')
const addResult= require('./src/routes/addResult')
const addnew= require('./src/routes/addNew')
const findResult= require('./src/routes/findResult')
const deleteResult= require('./src/routes/deleteResult')
const editResult= require('./src/routes/editResult')

app.use('/', loginAs)
app.use(studentLogin)
app.use(teacherLogin)
app.use(addResult)
app.use(deleteResult)
app.use(addnew)
app.use(findResult)
app.use(editResult)


const db = require("./src/models");
db.sequelize.sync();

app.listen(port, () => console.log(`Listening on port ${port}`))