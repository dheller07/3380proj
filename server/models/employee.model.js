module.exports = (sequelize, Sequelize) => {
    return sequelize.define("employee", {
        f_name: {
            type: Sequelize.STRING
        },
        l_name: {
            type: Sequelize.STRING
        },
        ssn: {
            type: Sequelize.INTEGER
        },
        birthdate: {
            type: Sequelize.DATE
        },
        salary: {
            type: Sequelize.FLOAT
        },
        job_title: {
            type: Sequelize.STRING
        },
        phone_no: {
            type: Sequelize.STRING
        }
    });
};