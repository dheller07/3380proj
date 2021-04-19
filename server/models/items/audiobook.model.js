module.exports = (sequelize, Sequelize) => {
    const Audiobook = sequelize.define("audiobook", {
        isbn: {
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        author_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        narrator_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        publisher: {
            type: Sequelize.INTEGER
        },
        publication_year: {
            type: Sequelize.INTEGER
        },
        edition: {
            type: Sequelize.INTEGER
        },
        series: {
            type: Sequelize.INTEGER
        },
        series_position: {
            type: Sequelize.INTEGER
        },
        genre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        checked_out: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        waitlist_capacity: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        location: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    });
    Audiobook.associate = (models) => {
        Audiobook.belongsTo(models.item);
        Audiobook.belongsTo(models.author, {foreignKey: 'author_id'});
        Audiobook.belongsTo(models.narrator, {foreignKey: 'narrator_id'});
        Audiobook.belongsTo(models.location, {foreignKey: 'location'});
        Audiobook.belongsTo(models.series, {foreignKey: 'series'});
        Audiobook.belongsTo(models.publisher, {foreignKey: 'publisher'});
    }
    return Audiobook;
};