module.exports = (sequelize, Sequelize) => {
    return sequelize.define("employee", {
        // TODO implement auto incrementing id and set as pk (might be automatic?)
        f_name: {
            type: Sequelize.String(32)
        },
        l_name: {
            type: Sequelize.String(32)
        },
        ssn: {
            type: Sequelize.INT
        },
        birthdate: {
            type: Sequelize.DATE
        },
        salary: {
            type: Sequelize.FLOAT
        },
        job_title: {
            type: Sequelize.String(32)
        },
        phone_no: {
            type: Sequelize.String(32)
        }
    });
};