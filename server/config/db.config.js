// TODO use a user/pwd with less permissions here

module.exports = {
    HOST: "localhost",
    USER: "cdoo",
    PASSWORD: "book93-EARS",
    DB: "library",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};