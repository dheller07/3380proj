// TODO use a user/pwd with less permissions here?

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "starZ1845fun?",
    DB: "library",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};