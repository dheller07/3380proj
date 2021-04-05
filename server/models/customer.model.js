module.exports = (sequelize, Sequelize) => {
    return sequelize.define("employee", {
        f_name: {
            type: Sequelize.STRING
        },
        l_name: {
            type: Sequelize.STRING
        },
        customer_role: {
            type: Sequelize.STRING
        },
        item_limit: {
            type: Sequelize.INTEGER
        },
        acct_balance: {
            type: Sequelize.FLOAT
        },
        fine_rate: {
            type: Sequelize.FLOAT
        }
    });
};