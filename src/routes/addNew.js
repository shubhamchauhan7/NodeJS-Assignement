const express = require('express')
const addNew = express()
const db = require("./../models");
const Result = db.result;

addNew.get('/add-new', async(req,res) =>{
    res.render('addNew')
})

addNew.post('/add-new', async(req,res) => {
    await Result.create({
        studentRollNumber:req.body.rollNumber,
        studentName:req.body.name,
        studentDob:req.body.date_of_birth,
        studentScore:req.body.score
    })
        res.redirect("/addResult");
});

module.exports= addNew