module.exports = (sequelize, Sequelize) => {
    const ItemRequest = sequelize.define("itemRequest", {
        item_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        req_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        requester_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    });
    ItemRequest.associate = (models) => {
        ItemRequest.belongsTo(models.item, {foreignKey: 'item_id'});
        ItemRequest.belongsTo(models.customer, {foreignKey: 'requester_id'});
    }
    return ItemRequest;
};