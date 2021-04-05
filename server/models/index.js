const dbConfig = require("../config/db.config.js");

const {Sequelize} = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// TODO add all tables
db.employee = require("./employee.model.js")(sequelize, Sequelize);
db.customer = require("./customer.model.js")(sequelize, Sequelize);
db.location = require("./location.model.js")(sequelize, Sequelize);
db.author = require("./author.model.js")(sequelize, Sequelize);
db.publisher = require("./publisher.model.js")(sequelize, Sequelize);
db.narrator = require("./narrator.model.js")(sequelize, Sequelize);
db.series = require("./series.model.js")(sequelize, Sequelize);

module.exports = db;
