const express = require('express')
const editResult = express()
const db = require("../models");
const Result = db.result;


editResult.get('/edit' , async(req,res) =>{
    const getScore= await Result.findOne({
        where:{
            studentRollNumber:req.query.rollNumber,
        }
    });
    const studentResult= {
            studentRollNumber: getScore.dataValues.studentRollNumber,
            studentName: getScore.dataValues.studentName,
            studentDob: getScore.dataValues.studentDob.toJSON().slice(0,10),
            studentScore: getScore.dataValues.studentScore
    }
    console.log(studentResult);
    res.render("editResult", {data: studentResult})
})

editResult.post('/edit' , async(req,res) => {
    await Result.update({ studentName: req.body.name , 
                        studentDob:req.body.date_of_birth,
                        studentScore:req.body.score }, {
    where: {
      studentRollNumber: req.body.rollNumber
    }
  });

    res.redirect("/addResult");
}); 
module.exports= editResult
