module.exports = (sequelize, Sequelize) => {
    return sequelize.define("narrator", {
        f_name: {
            type: Sequelize.STRING
        },
        l_name: {
            type: Sequelize.STRING
        },
        origin: {
            type: Sequelize.STRING
        },
        narrator_born: {
            type: Sequelize.INTEGER
        },
        narrator_died: {
            type: Sequelize.INTEGER
        }
    });
};