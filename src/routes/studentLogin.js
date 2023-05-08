const express = require('express')
const studentLogin = express()
studentLogin.get('/student', (req,res) => {
    res.render('studentLogin')
})
module.exports= studentLogin

