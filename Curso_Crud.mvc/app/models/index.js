const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const { Model } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,

    },
});

const db = {};

db.Seuqelize = Sequelize;
db.sequelize = sequelize;

db.livros = require("./livros.model")(sequelize, Sequelize);


Models.exports = db;