const express = require('express')
const loginRouter = express.Router()
loginRouter.get('/', async(req,res) => {
    res.render('news')
})


module.exports= loginRouter