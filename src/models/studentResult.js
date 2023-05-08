module.exports = (sequelize, Sequelize) => {
    const Result = sequelize.define("result", {
        studentRollNumber: {type: Sequelize.INTEGER, primaryKey: true,},
        studentName: {type: Sequelize.STRING},
        studentDob:{ type:Sequelize.DATE},
        studentScore: {type: Sequelize.INTEGER}
    });

    return Result;
}