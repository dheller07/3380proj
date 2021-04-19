module.exports = (sequelize, Sequelize) => {
    const LateFine = sequelize.define("lateFine", {
        checkout_item: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        borrower: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        days_late: {
            type: Sequelize.INTEGER
        },
        fine_amount: {
            type: Sequelize.FLOAT
        },
        paid: {
            type: Sequelize.BOOLEAN
        },
    });
    LateFine.associate = (models) => {
        LateFine.belongsTo(models.item, {foreignKey: 'checkout_item'});
        LateFine.belongsTo(models.customer, {foreignKey: 'borrower'});
    }
    return LateFine;
};