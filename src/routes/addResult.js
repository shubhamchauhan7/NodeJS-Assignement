const express = require('express')
const addResult = express()
const db = require("../models");
const Result = db.result;

addResult.get('/addResult', async (req,res) => {
    
    const results = await Result.findAll({});

    // console.log(results);
    const resultScoresList = [];

    results.forEach(element => {
        const row = {
            studentRollNumber: element.dataValues.studentRollNumber,
            studentName: element.dataValues.studentName,
            studentDob: element.dataValues.studentDob,
            studentScore: element.dataValues.studentScore

        }
        resultScoresList.push(row);
    });

    // console.log(resultScoresList);
    res.render('addResult', {data: resultScoresList});

})

module.exports= addResult