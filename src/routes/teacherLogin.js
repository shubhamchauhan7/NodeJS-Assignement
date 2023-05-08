const express = require('express');
const res = require('express/lib/response');
const teacherLogin = express()
const db = require("./../models");
const User = db.user;

teacherLogin.get('/teacher', (req,res) => {
    res.render('teacherLogin')
});
teacherLogin.post('/teacher', async (req,res) => {
    const user = await User.findOne({
        where: {
          userName: req.body.email,
          passWord: req.body.password
        }
      });
      if (user) {
          res.redirect("/addResult");
      }
      res.redirect("/")   
});
module.exports= teacherLogin
