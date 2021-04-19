module.exports = (sequelize, Sequelize) => {
    return sequelize.define("series", {
        series_name: {
            type: Sequelize.STRING
        },
        total_series: {
            type: Sequelize.INTEGER
        },
        series_number: {
            type: Sequelize.INTEGER
        }
    });
};