const express = require('express')
const findResult = express()
const db = require("../models");
const Result = db.result;

findResult.get('/find', (req,res)=> {
    res.render('findResult')
});

findResult.post('/find' , async(req,res) => {
    console.log(req.body.rollNumber);
    const getScore= await Result.findOne({
        where:{
            studentRollNumber:req.body.rollNumber,
        }
    });
    const studentResult= {
            studentRollNumber: getScore.dataValues.studentRollNumber,
            studentName: getScore.dataValues.studentName,
            studentDob: getScore.dataValues.studentDob,
            studentScore: getScore.dataValues.studentScore
    }
    res.render("showResult", {data: studentResult});
}); 

module.exports= findResult