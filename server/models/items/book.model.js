const Item = require("./item.model.js")
const Author = require("../author.model.js")
const Publisher = require("../publisher.model.js")
const Series = require("../series.model.js")
const Location = require("../location.model.js")

module.exports = (sequelize, Sequelize) => {
    const Book= sequelize.define("book", {
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
    Book.belongsTo(Item);
    Book.belongsTo(Author, { foreignKey : 'author_id' });
    Book.belongsTo(Location, { foreignKey : 'location' });
    Book.belongsTo(Series, { foreignKey : 'series' });
    Book.belongsTo(Publisher, { foreignKey : 'publisher' });
    return Book;
};