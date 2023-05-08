const express = require('express')
const deleteResult = express()
const db = require("../models");
const Result = db.result;

deleteResult.get('/delete', async(req,res) => {

    await Result.destroy({
        where:{
            studentRollNumber:req.query.rollNumber,
        }
    });
    const results = await Result.findAll({});

    console.log(results);
    const resultScoresList = [];

    results.forEach(element => {
        const row = {
            studentRollNumber: element.dataValues.rollNumber,
            studentName: element.dataValues.name,
            studentDob: element.dataValues.birth,
            studentScore: element.dataValues.score

        }
        resultScoresList.push(row);
    });

    res.render('addResult', {data: resultScoresList});

    
})
module.exports= deleteResult
