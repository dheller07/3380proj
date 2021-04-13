module.exports = (sequelize, Sequelize) => {
    const DVD = sequelize.define("dvd", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        release_date: {
            type: Sequelize.DATE,
        },
        director: {
            type: Sequelize.STRING,
            allowNull: false
        },
        studio: {
            type: Sequelize.STRING
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
    DVD.associate = (models) => {
        DVD.belongsTo(models.item);
        DVD.belongsTo(models.location, {foreignKey: 'location'});
    }
    return DVD;
};