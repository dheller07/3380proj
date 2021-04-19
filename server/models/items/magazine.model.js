module.exports = (sequelize, Sequelize) => {
    const Magazine = sequelize.define("magazine", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        issue: {
            type: Sequelize.INTEGER,
        },
        issue_date: {
            type: Sequelize.DATE
        },
        topic: {
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
    Magazine.associate = (models) => {
        Magazine.belongsTo(models.item);
        Magazine.belongsTo(models.location, {foreignKey: 'location'});
    }
    return Magazine;
};