module.exports = (sequelize, Sequelize) => {
    const CheckoutItem = sequelize.define("checkoutItem", {
        item: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        checkout_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        return_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        returned: {
            type: Sequelize.BOOLEAN
        },
        borrower_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        employee_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    });
    CheckoutItem.associate = (models) => {
        CheckoutItem.belongsTo(models.item, {foreignKey: 'item'});
        CheckoutItem.belongsTo(models.customer, {foreignKey: 'borrower_id'});
        CheckoutItem.belongsTo(models.employee, {foreignKey: 'employee_id'});
    }
    return CheckoutItem;
};