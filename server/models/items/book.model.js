module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
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
        ebook: {
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
    Book.associate = (models) => {
        Book.belongsTo(models.item);
        Book.belongsTo(models.author, {foreignKey: 'author_id'});
        Book.belongsTo(models.location, {foreignKey: 'location'});
        Book.belongsTo(models.series, {foreignKey: 'series'});
        Book.belongsTo(models.publisher, {foreignKey: 'publisher'});
    }
    return Book;
};