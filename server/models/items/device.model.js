module.exports = (sequelize, Sequelize) => {
    const Device = sequelize.define("device", {
        device_type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        model: {
            type: Sequelize.STRING,
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
    Device.associate = (models) => {
        Device.belongsTo(models.item);
        Device.belongsTo(models.location, {foreignKey: 'location'});
    }
    return Device;
};