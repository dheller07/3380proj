module.exports = (sequelize, Sequelize) => {
    return sequelize.define("location", {
        id: {
            type: Sequelize.INTEGER
        },
        location_name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        phone_no: {
            type: Sequelize.STRING
        }
    });
};