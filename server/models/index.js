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

db.employee = require("./employee.model.js")(sequelize, Sequelize);
db.customer = require("./customer.model.js")(sequelize, Sequelize);
db.location = require("./location.model.js")(sequelize, Sequelize);
db.author = require("./author.model.js")(sequelize, Sequelize);
db.publisher = require("./publisher.model.js")(sequelize, Sequelize);
db.narrator = require("./narrator.model.js")(sequelize, Sequelize);
db.series = require("./series.model.js")(sequelize, Sequelize);
db.book = require("./items/book.model.js")(sequelize, Sequelize);
db.audiobook = require("./items/audiobook.model.js")(sequelize, Sequelize);
db.device = require("./items/device.model.js")(sequelize, Sequelize);
db.dvd = require("./items/dvd.model.js")(sequelize, Sequelize);
db.magazine = require("./items/magazine.model.js")(sequelize, Sequelize);
db.checkoutItem = require("./checkoutItem.model.js")(sequelize, Sequelize);
db.itemRequest = require("./itemRequest.model.js")(sequelize, Sequelize);
db.lateFine = require("./lateFine.model.js")(sequelize, Sequelize);
db.itemRequest = require("./itemRequest.model.js")(sequelize, Sequelize);
db.item = require("./items/item.model.js")(sequelize, Sequelize);

module.exports = db;
