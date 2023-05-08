const express = require('express')
const newsRouter = express()
newsRouter.get('', async(req,res) => {
    res.render('loginAs')

})
module.exports= newsRouter