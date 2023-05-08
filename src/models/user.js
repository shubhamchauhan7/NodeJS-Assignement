module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        userName: {type: Sequelize.STRING},
        passWord: {type: Sequelize.STRING}
    });
    return User;
}