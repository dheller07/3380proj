module.exports = (sequelize, Sequelize) => {
    return sequelize.define("publisher", {
        publisher_name: {
            type: Sequelize.STRING
        },
        headquarters: {
            type: Sequelize.STRING
        }
    });
};