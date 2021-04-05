module.exports = (sequelize, Sequelize) => {
    return sequelize.define("author", {
        f_name: {
            type: Sequelize.STRING
        },
        l_name: {
            type: Sequelize.STRING
        },
        origin: {
            type: Sequelize.STRING
        },
        author_born: {
            type: Sequelize.INTEGER
        },
        author_died: {
            type: Sequelize.INTEGER
        }
    });
};